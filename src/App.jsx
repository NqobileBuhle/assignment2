// import React from 'react';
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
// import MainLayout from './Layout/MainLayout';
// import HomePage from './Pages/HomePage';
// import SeriesPage from './Pages/SeriesPage';
// import Add from './Components/Add';
// import EditMovie from './Components/EditMovie';
// import Edit from './Components/Edit';
// import MoviesPage from './Pages/MoviesPage';
// import NotFound from './Components/NotFound';
// import ErrorBoundary from './Components/ErrorBoundary'; // Import ErrorBoundary
// import Series from './Components/Series';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<MainLayout />}>
//       <Route path='/' element={<HomePage />} />
//       <Route path="/" element={<Movies />} />
//         <Route path="/movies" element={<Movies />} />
//       <Route path='/movies/:movieId' element={<MoviesPage />} />
//       <Route path='/series' element={<SeriesPage />} />
//       <Route path='/add' element={<Add submitMovies={(movie) => console.log('New movie:', movie)} />} />
//       <Route path='/edit/:movieId' element={<EditMovie />} />
//       <Route path='/edit/:id' element={<Edit />} />
//       <Route path='*' element={<NotFound />} /> {/* Handle 404 */}
//     </Route>
//   )
// );

// const App = () => {
//   return (
//     <ErrorBoundary>
//       <RouterProvider router={router} />
//     </ErrorBoundary>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import streams from './streams.json';
import Movies from './Components/Movies';
import MoviesPage from './Pages/MoviesPage';
import EditMovie from './Components/EditMovie';
import Edit from './Components/Edit';
import NotFound from './Components/NotFound';
import Navbar from './Components/Navbar';
import AddButton from './Components/AddButton';
import Add from './Components/Add';
import Series from './Components/Series'; // Import Series component
import SeriesPage from './Pages/SeriesPage'; // Import SeriesPage component
import HomePage from './Pages/HomePage';
import MoviesFetch from './Pages/MoviesFetch';
import SeriesFetch from './Pages/SeriesFetch';

const App = () => {
  const [movies, setMovies] = useState(streams.movies);
  const [series, setSeries] = useState(streams.series); // Add state for series

  return (
    <Router>
      <Navbar />
      {/* <AddButton /> */}

      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Movies movies={movies} setMovies={setMovies} /> */}
        <Route path="/movies" element={<MoviesFetch/>} />
        <Route path="/movies/:movieId" element={<MoviesPage movies={movies} setMovies={setMovies} />} />
        <Route path="/edit/:movieId" element={<EditMovie movies={movies} setMovies={setMovies} />} />
        
        <Route path="/add" element={<Add submitMovies={(movie) => console.log('New movie:', movie)} />} />

        <Route path="/series" element={<SeriesFetch />} /> {/* Add route for Series */}
        <Route path="/series/:seriesId" element={<SeriesPage series={series} setSeries={setSeries} />} />
        <Route path="/edit-series/:seriesId" element={<Edit series={series} setSeries={setSeries} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;


