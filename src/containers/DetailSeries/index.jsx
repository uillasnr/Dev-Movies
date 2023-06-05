import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Credits from '../../components/Credits'
import Slider from '../../components/Slider'
import SpanGenres from '../../components/SpanGenres'
import {
  getDetailSeries,
  getSerieCredits,
  getSeriesVideos,
  getSerieSimilar
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'

function DetailSeries() {
  const { id } = useParams()
  const [series, setSeries] = useState([])
  const [seriesVideos, setSeriesVideos] = useState([])
  const [serieCredits, setSerieCredits] = useState()
  const [SerieSimilar, setSerieSimilar] = useState()

  useEffect(() => {
    async function getData() {
      setSeries(await getDetailSeries(id))
      setSeriesVideos(await getSeriesVideos(id))
      setSerieCredits(await getSerieCredits(id))
      setSerieSimilar(await getSerieSimilar(id))
    }

    getData()
  }, [id])

  return (
    <>
      {series && (
        <>
          <Background image={getImages(series.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(series.poster_path)} />
            </Cover>
            <Info>
              <h2>{series.title}</h2>
              <SpanGenres genres={series.genres} />
              <p>{series.overview}</p>
              <div>
                <Credits credits={serieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {seriesVideos &&
              seriesVideos.map((video) => (
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
          {SerieSimilar && (
            <Slider info={SerieSimilar} title={'Filmes Similares'} />
          )}
        </>
      )}
    </>
  )
}

export default DetailSeries
