import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import SearchInput from '../../assets/search.png'
import api from '../../services/api'
import { getMovies } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Img, ContainerSearch } from './styles'

function Search() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([]) // Estado para armazenar os resultados da pesquisa
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
        /*    console.log(results) */
        setSearchResults(results) // Atualiza o estado com os resultados da pesquisa
      }
    }

    searchMovies()
  }, [search])

  useEffect(() => {
    async function getAllData() {
      setSearch(await getMovies())
    }

    getAllData()
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  // resultados da pesquisa desapareçam quando o usuário clicar
  useEffect(() => {
    function handleOutsideClick(event) {
      if (!searchRef.current.contains(event.target)) {
        setSearch('')
        setSearchResults([])
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleItemClick = () => {
    setSearch('')
    setSearchResults([])
  }

  return (
    <Container>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Procurar"
      ></input>
      <img src={SearchInput} alt="Search Icon" />
      <ContainerSearch ref={searchRef}>
        <div>
          {searchResults.map((result) => (
            <Link
              key={result.id}
              style={{
                textDecoration: 'none',
                display: 'flex',
                direction: 'rtl',
                textAlign: 'center',
                color: '#fff'
              }}
              to={`/detalhe/${result.id}`}
              onClick={handleItemClick}
            >
              <p>{result.title}</p>
              {search && (
                <Img alt="capa-do-filme" src={getImages(result.poster_path)} />
              )}
            </Link>
          ))}
        </div>
      </ContainerSearch>
    </Container>
  )
}
export default Search
