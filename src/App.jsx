import React from 'react'
import MainLayout from './Layout/MainLayout'
import HomePage from './Pages/HomePage'
import SeriesPage from './Pages/SeriesPage'
import Add from './Components/Add'
import EditMovie from './Components/EditMovie'
// import { createNew } from './createNew';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MoviesPage from './Pages/MoviesPage'
import Edit from './Components/EditMovie'


const App = () => {
  const createNew = (movie) => {
    // Function logic here
    console.log('New movie:', movie);
  };

  const router= createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}></Route> 
        <Route path='/movies' element={<MoviesPage/>}></Route>   
        <Route path='/series' element={<SeriesPage/>}></Route>
        <Route path="/add" element={<Add  submitMovies={createNew}/>} /> 
        <Route path='/movies/:id' element={<MoviesPage />} /> {/* Add route for movie details */}  
        <Route path='/edit/:id' element={<EditMovie />} /> {/* Route for details */} 
       </Route>
    )
  )
  return<RouterProvider router={router}/>
  
      
}

export default App

