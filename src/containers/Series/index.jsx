import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { getSeries } from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container } from './styles'

function Series() {
  const [series, setSeries] = useState([])

  useEffect(() => {
    async function getAllData() {
      setSeries(await getSeries())
    }

    getAllData()
  }, [])

  return (
    <Container>
      {series.map((series) => (
        <Link
          key={series.id}
          style={{ textDecoration: 'none' }}
          to={`/detalhe/Series/${series.id}`}
        >
          <div>
            <img src={getImages(series.poster_path)} alt="" />
            <p>{series.title}</p>
          </div>
        </Link>
      ))}
    </Container>
  )
}

export default Series
