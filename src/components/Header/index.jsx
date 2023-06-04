import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../assets/logo.png'
import Search from '../Search'
import { Container, Menu, Li, LogoImg } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }

  return (
    <Container changeBackground={changeBackground}>
      {<LogoImg src={Logo} alt="logo-dev-movies" />}
      <Menu>
        <Search />

        <Li isActive={pathname === '/'}>
          <Link to="/">Home</Link>
        </Li>

        <Li isActive={pathname.includes === 'filmes'}>
          <Link to="filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes === 'series'}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}
export default Header
