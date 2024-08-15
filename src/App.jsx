import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Add from "./Components/Add";
import NotFoundP from "./Components/NotFoundP";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Series from "./Components/Series";
import MoviesInfo, { movieLoader } from "./Components/MoviesInfo";
import Edit from "./Components/Edit";

function App() {
  //Delete Movie
  const deleteMovie = async (id) => {
    const res = await fetch(`/api/movies/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log(`Movie with id: ${id} deleted successfully.`);
      return true;
    } else {
      console.error(`Failed to delete movie with id: ${id}`);
      return false;
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/add-new" element={<Add />} />
        <Route path="/series" element={<Series />} />
        <Route
          path="/movies/:id"
          element={<MoviesInfo deleteMovie={deleteMovie} />}
          loader={movieLoader}
        />
        <Route
          path="/edit-movie/:id"
          element={<Edit />}
          loader={movieLoader}
        />

        
        <Route path="*" element={<NotFoundP />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
