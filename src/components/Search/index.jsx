import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import SearchInput from '../../assets/search.png'
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Container, Img, ContainerSearch, SearchIcon, Button } from './styles'

function Search() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showInput, setShowInput] = useState(false)

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

  const handleButtonClick = () => {
    setShowInput(!showInput)
  }

  return (
    <Container showInput={showInput}>
      <Button onClick={handleButtonClick}>Search</Button>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Busca"
      />
      <SearchIcon src={SearchInput} alt="Search Icon" />

      {showInput && (
        <ContainerSearch ref={searchRef}>
          <div>
            {searchResults.map((result) => (
              <Link
                key={result.id}
                to={`/detalhe/${result.id}`}
                onClick={handleItemClick}
              >
                <p>{result.title}</p>
                {search && (
                  <Img
                    alt="capa-do-filme"
                    src={getImages(result.poster_path)}
                  />
                )}
              </Link>
            ))}
          </div>
        </ContainerSearch>
      )}
    </Container>
  )
}
export default Search
