import React from 'react'
import Home from './home/Home'
import Cources from './courses/Cources'
import Signup from './components/Signup'

import { Toaster } from 'react-hot-toast';

import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthProvider';

function App() {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser ? <Cources/> : <Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
