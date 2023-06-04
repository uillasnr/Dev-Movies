import React, { useEffect, useState } from 'react'

import { getSeries } from '../../services/getData'

function Series() {
  const [series, setSeries] = useState([])

  useEffect(() => {
    async function getAllData() {
      setSeries(await getSeries())
    }

    getAllData()
  }, [])

  return (
    <div>
      <h1>Séries</h1>
      {series.map((serie) => (
        <p key={serie.id}>{serie.title}</p>
      ))}
    </div>
  )
}

export default Series
