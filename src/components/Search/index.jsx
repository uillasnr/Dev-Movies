import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import SearchInput from '../../assets/search.png'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Container, Img, ContainerSearch, SearchIcon, Input } from './styles'

function Search() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showInput, setShowInput] = useState(true)
  const searchRef = useRef()

  useEffect(() => {
    async function searchMovies() {
      if (search) {
        const {
          data: { results }
        } = await api.get('/search/movie', {
          params: {
            query: search
          }
        })
        setSearchResults(results)
      }
    }

    searchMovies()
  }, [search])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    function handleOutsideClick(event) {
      // Atualiza o estado do valor da pesquisa com o que foi digitado na barra
      if (!searchRef.current.contains(event.target)) {
        setSearch('')
        setSearchResults([])
        setShowInput(false) // Oculta o input ao clicar fora do componente
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleItemClick = () => {
    setSearch('') // Limpa o valor da pesquisa
    setSearchResults([]) // Limpa os resultados da busca
  }

  return (
    <Container>
      {showInput && (
        <Input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Busca"
          showInput={showInput} // Adicione essa linha
        />
      )}
      <SearchIcon src={SearchInput} alt="Search Icon" showInput={showInput} />

      {showInput && search && (
        <ContainerSearch ref={searchRef}>
          <div>
            {searchResults.map((result) => (
              <Link
                style={{
                  display: 'flex'
                }}
                key={result.id}
                to={`/detalhe/${result.id}`}
                onClick={handleItemClick}
              >
                {search && (
                  <Img
                    alt="capa-do-filme"
                    src={getImages(result.poster_path)}
                  />
                )}
                <p>{result.title}</p>
              </Link>
            ))}
          </div>
        </ContainerSearch>
      )}
    </Container>
  )
}

export default Search
