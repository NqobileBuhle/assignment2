import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import SeriesPage from './Pages/SeriesPage';
import Add from './Components/Add';
import EditMovie from './Components/EditMovie';
import Edit from './Components/Edit';
import MoviesPage from './Pages/MoviesPage';
import NotFound from './Components/NotFound';
import ErrorBoundary from './Components/ErrorBoundary'; // Import ErrorBoundary

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies/:movieId' element={<MoviesPage />} />
      <Route path='/series' element={<SeriesPage />} />
      <Route path='/add' element={<Add submitMovies={(movie) => console.log('New movie:', movie)} />} />
      <Route path='/edit/:movieId' element={<EditMovie />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='*' element={<NotFound />} /> {/* Handle 404 */}
    </Route>
  )
);

const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

export default App;


