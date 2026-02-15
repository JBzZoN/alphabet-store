import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Cart from './pages/Cart/Cart'
import { Provider } from 'react-redux';
import { store } from './store'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    
    <Provider store={store}>
      <Routes>
        <Route path='/' element = {<Home/>}>
          <Route index element = {<Dashboard/>}/>
          <Route path="/cart" element = {<Cart/>}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </Provider>
    
  )
}

export default App
