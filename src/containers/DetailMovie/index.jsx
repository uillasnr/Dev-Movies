import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  getMovieCredits,
  getDetail,
  getMovieVideos,
  getMovieSimilar
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'

function DetailMovie() {
  const { id } = useParams()
  const [movie, setMovies] = useState()
  const [movieVideos, setMovieVideos] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieSimilar, setMovieSimilar] = useState()

  useEffect(() => {
    async function getData() {
      setMovies(await getDetail(id))
      setMovieVideos(await getMovieVideos(id))
      setMovieCredits(await getMovieCredits(id))
      setMovieSimilar(await getMovieSimilar(id))
    }

    getData()
  }, [id])

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
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={'Filmes Similares'} />
          )}
        </>
      )}
    </>
  )
}

export default DetailMovie
