import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getMovieLists } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Movies() {
  const [movieLists, setMovieLists] = useState([])

  useEffect(() => {
    async function getAllData() {
      setMovieLists(await getMovieLists())
    }

    getAllData()
  }, [])

  return (
    <Container>
      {movieLists.map((movie) => (
        <Link
          key={movie.id}
          style={{ textDecoration: 'none' }}
          to={`/detalhe/${movie.id}`}
        >
          <div>
            <img src={getImages(movie.poster_path)} alt="" />
            <p>{movie.title}</p>
          </div>
        </Link>
      ))}
    </Container>
  )
}
export default Movies
