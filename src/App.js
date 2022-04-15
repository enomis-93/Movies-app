import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/movie/Movie";
import Navbar from "./components/navbar/Navbar";
import SliderCenterMode from "./components/slider-center-mode/SliderCenterMode";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0); // Creo uno stato per la gestione delle categorie

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=62246f42d8cd6cd318736d2f5103beeb&language=en-US&page=1"
    );
    const movies = await response.json();
    console.log(movies.results);
    setPopular(movies.results); // Salvo l'array ottenuto della chiamata in popular
    setFiltered(movies.results); //
  };

  return (
    <div>
      <Navbar
        popular={popular}
        setFiltered={setFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <SliderCenterMode popular={popular} />
      <div className="App">
        <div className="popular-movies m-5 py-4">
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
