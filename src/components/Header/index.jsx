import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import ListSharpIcon from '@mui/icons-material/ListSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

import Logo from '../../assets/logo.png'
import Search from '../Search'
import { Container, Menu, Li, LogoImg, MenuToggle } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const { pathname } = useLocation()

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Container changeBackground={changeBackground}>
      <LogoImg src={Logo} alt="logo-dev-movies" />
      <MenuToggle onClick={toggleMenu}>
        <ListSharpIcon style={{ color: '#fff', width: '20%', height: '30%' }} />
        <SearchSharpIcon
          style={{
            color: '#fff',
            width: '20%',
            height: '30%',
            marginLeft: '-700'
          }}
        />
      </MenuToggle>
      {isMenuOpen && (
        <Menu>
          <Search />
          <Li isActive={pathname === '/'}>
            <Link to="/">Home</Link>
          </Li>
          <Li isActive={pathname.includes('filmes')}>
            <Link to="/filmes">Filmes</Link>
          </Li>
          <Li isActive={pathname.includes('series')}>
            <Link to="/series">Séries</Link>
          </Li>
        </Menu>
      )}
    </Container>
  )
}

export default Header
