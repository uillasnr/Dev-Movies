import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import ListSharpIcon from '@mui/icons-material/ListSharp'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

import Search from '../Search'
import { Container, Menu, Li, MenuToggle } from './styles'

function MenuMobile() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { pathname } = useLocation()
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
    console.log(!searchOpen)
  }

  const handleIconClick = (event) => {
    event.stopPropagation()
    toggleMenu()
  }

  const handleSearchIconClick = (event) => {
    event.stopPropagation()
    toggleSearch()
  }

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <Container>
      <MenuToggle>
        <div className="search-icon">
          <SearchSharpIcon
            onClick={handleSearchIconClick}
            style={{ fontSize: '2.5rem' }}
          />
        </div>

        <div className="menu-icon">
          <ListSharpIcon
            onClick={handleIconClick}
            style={{ fontSize: '2.5rem' }}
          />
        </div>
      </MenuToggle>

      {searchOpen && <Search />}

      <Menu isVisible={menuOpen} ref={menuRef}>
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
    </Container>
  )
}

export default MenuMobile
