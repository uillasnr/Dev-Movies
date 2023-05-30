import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
  getMovies,
  getMoviesVideos,
  getMovieCredits,
  getMovieSimilar
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info } from './styles'

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getAllData() {
      setMovie(await getMovies())
      setMovieVideos(await getMoviesVideos())
      setMovieCredits(await getMovieCredits())
      setMovieSimilar(await getMovieSimilar())
    }

    getAllData()
  }, [])
  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <div>generos do filmes</div>
              <p>{movie.overview}</p>
              <div>Creditos</div>
            </Info>
          </Container>
        </>
      )}
    </>
  )
}

export default Detail
