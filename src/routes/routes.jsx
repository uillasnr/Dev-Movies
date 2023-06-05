import { Route, Routes } from 'react-router-dom'

import DefaultLayout from '../components/layout/DefaultLayout'
import DetailMovie from '../containers/DetailMovie'
import DetailSeries from '../containers/DetailSeries'
import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<DetailMovie />} />
        <Route path="/detalhe/Series/:id" element={<DetailSeries />} />
      </Route>
    </Routes>
  )
}
export default Router
