// Todas chamadas  API

import api from './api'

export async function getMovies() {
  const {
    data: { results }
  } = await api.get('/movie/popular')

  return results[8] /// //////////////////////////////////////
}

export async function getTopMovies() {
  const {
    data: { results }
  } = await api.get('/movie/top_rated')

  return results
}

export async function getTopSeries() {
  const {
    data: { results }
  } = await api.get('/tv/top_rated')

  return results
}

export async function getPopularSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular')

  return results
}

export async function getTopPeople() {
  const {
    data: { results }
  } = await api.get('/person/popular')

  return results
}

export async function getMovieVideos(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results
}

export async function getMovieCredits(movieId) {
  const {
    data: { cast }
  } = await api.get(`/movie/${movieId}/credits`)

  return cast
}

export async function getMovieSimilar(movieId) {
  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`) /// ////////////////////////

  return results
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`)

  return data
}

export async function getMovieLists() {
  const {
    data: { results }
  } = await api.get(`/movie/popular`)

  return results
}

export async function getDetailMovie(id) {
  const { data } = await api.get(`/movie/${id}`)

  return data
}
// DetailSeries
export async function getDetailSeries(id) {
  const { data } = await api.get(`/tv/${id}`)

  return data
}
export async function getSeries() {
  const {
    data: { results }
  } = await api.get('/tv/popular', {
    params: {
      page: 2 // Defina o número da página que deseja obter (começando em 1)
    }
  })

  return results
}

export async function getSeriesVideos(id) {
  const {
    data: { results }
  } = await api.get(`/tv/${id}/videos`)
  console.log(results)
  return results
}
export async function getSerieSimilar(id) {
  const {
    data: { results }
  } = await api.get(`/tv/${id}/similar`)

  return results
}
export async function getSerieCredits(id) {
  const {
    data: { cast }
  } = await api.get(`/tv/${id}/credits`)

  return cast
}
