import { useEffect, useState } from 'react'

import api from '../../services/api'
import { getMovies } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Pesquiza, Img } from './styles'

function Search() {
  const [movie, setMovie] = useState(null)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([]) // Estado para armazenar os resultados da pesquisa

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
        console.log(results)
        setSearchResults(results) // Atualiza o estado com os resultados da pesquisa
      }
    }

    searchMovies()
  }, [search])

  useEffect(() => {
    async function getAllData() {
      setMovie(await getMovies())
    }

    getAllData()
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <Container>
      <input
        type="text"
        value={search} // Define o valor do campo de input como o estado search
        onChange={handleChange}
        placeholder="procurar"
      />

      <Pesquiza>
        <div>
          {searchResults.map((result) => (
            <p key={result.id}>
              {' '}
              {result.title}
              {movie && (
                <Img alt="capa-do-filme" src={getImages(result.poster_path)} />
              )}{' '}
            </p>
          ))}
        </div>
      </Pesquiza>
    </Container>
  )
}
export default Search
