import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import ListSharpIcon from '@mui/icons-material/ListSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

import Logo from '../../assets/logo.png'
import Search from '../Search'
import { Container, Menu, Li, LogoImg, MenuToggle } from './styles'

function Header() {
  const [changeBackground, setChangeBackground] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState()
  // const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { pathname } = useLocation()
  // const menuRef = useRef(null)

  // Verifica a rolagem da janela para alterar o fundo do cabeçalho
  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }

  // Alterna o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Alterna o estado da pesquisa
  /*  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  } */

  return (
    <Container changeBackground={changeBackground}>
      <LogoImg src={Logo} alt="logo-dev-movies" />
      <MenuToggle>
        <ListSharpIcon
          onClick={toggleMenu}
          style={{ color: '#fff', width: '20%', height: '30%' }}
        />
        <SearchSharpIcon
          /*  onClick={toggleSearch} // Toggle the search input */
          style={{
            color: '#fff',
            width: '20%',
            height: '30%',
            marginLeft: '-700'
          }}
        />
      </MenuToggle>
      {!window.innerWidth <= 768 && ( // Adiciona a condição para exibir o menu apenas em dispositivos móveis
        <Menu /* ref={menuRef} */>
          <Search />
          <Li isActive={pathname === '/'}>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </Li>
          <Li isActive={pathname.includes('filmes')}>
            <Link to="/filmes" onClick={toggleMenu}>
              Filmes
            </Link>
          </Li>
          <Li isActive={pathname.includes('series')}>
            <Link to="/series" onClick={toggleMenu}>
              Séries
            </Link>
          </Li>
        </Menu>
      )}
    </Container>
  )
}

export default Header
