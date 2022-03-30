import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Login } from './pages'

export default function App () {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate to='/login'/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}
