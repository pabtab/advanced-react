import React, { useContext } from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { NotRegisterUSer } from './pages/NotRegisterUser'
import { Favs } from './pages/Favs'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Detail path='/detail/:detailId' />
        <Home path='/' />
        <Home path='/pet/:id' />
        {!isAuth && <NotRegisterUSer path='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' /> }
        {!isAuth && <Redirect noThrow from='/favs' to='/login' /> }
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <User path='/user' />
        <Favs path='/favs' />

      </Router>
      <NavBar />
    </>
  )
}
