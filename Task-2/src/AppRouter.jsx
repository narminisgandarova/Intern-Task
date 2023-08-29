import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Feed from './pages/Feed'
import Network from './pages/Network'
import Works from './pages/Works'
import Chat from './pages/Chat'
import Bildirisler from './pages/Bildirisler'
import NotFoundPage from './pages/NotFoundPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/feed' element={<Feed/>}></Route>
      <Route path='/network' element={<Network/>}></Route>
      <Route path='/works' element={<Works/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
      <Route path='/bildirisler' element={<Bildirisler/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
     </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter