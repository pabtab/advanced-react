import React from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { NotRegisterUSer } from './pages/NotRegisterUser'
import { Favs } from './pages/Favs'
import Context from './Context'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Detail path='/detail/:detailId' />
        <Home path='/' />
        <Home path='/pet/:id' />
      </Router>
      <Context.Consumer>
        {
          ({ isAuth }) => (
            isAuth
              ? <Router>
                <User path='/user' />
                <Favs path='/favs' />
              </Router>
              : <Router>
                <NotRegisterUSer path='/user' />
                <NotRegisterUSer path='/favs' />
              </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
