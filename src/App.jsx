import React from 'react'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import SeriesPage from './Pages/SeriesPage'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MoviesPage from './Pages/MoviesPage'


const App = () => {

  const router= createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}></Route> 
        <Route path='/movies' element={<MoviesPage/>}></Route>   
        <Route path='/series' element={<SeriesPage/>}></Route>   
       </Route>
    )
  )
  return<RouterProvider router={router}/>
  
      
}

export default App

