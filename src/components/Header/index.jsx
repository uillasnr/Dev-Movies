import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import api from '../../services/api'
import { Container, Menu, Li } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const [search, setSearch] = useState('')
  const { pathname } = useLocation()
  const [searchResults, setSearchResults] = useState([]) // Estado para armazenar os resultados da pesquisa

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }
  useEffect(() => {
    async function searchMovies() {
      if (search) {
        const {
          data: { results }
        } = await api.get('/search/movie', {
          params: {
            query: search
          }
        })
        console.log(results)
        setSearchResults(results) // Atualiza o estado com os resultados da pesquisa
      }
    }

    searchMovies()
  }, [search])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <Container changeBackground={changeBackground}>
      {<img src={Logo} alt="logo-dev-movies" />}
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>

        <input
          type="text"
          value={search} // Define o valor do campo de input como o estado search
          onChange={handleChange}
          placeholder="procurar"
        />

        <Li isActive={pathname.includes === 'filmes'}>
          <Link to="filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes === 'series'}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>

      {/*     <div>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </div> */}
    </Container>
  )
}
export default Header
