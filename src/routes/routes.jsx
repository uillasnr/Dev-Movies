import { Route, Routes } from 'react-router-dom'

import DefaultLayout from '../components/layout/DefaultLayout'
import Detail from '../containers/DetailMovie'
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
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}
export default Router
