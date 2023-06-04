import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import { Container } from './styles'

function Movies({ movieId }) {
  const [movieLists, setMovieLists] = useState([])

  useEffect(() => {
    async function getMovieLists() {
      const {
        data: { results }
      } = await api.get(`/movie/tv/recommendations`)

      console.log(results)
      setMovieLists(results)
    }

    getMovieLists()
  }, [])

  return (
    <Container>
      <h1>filmes</h1>
      {movieLists.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </Container>
  )
}

export default Movies
