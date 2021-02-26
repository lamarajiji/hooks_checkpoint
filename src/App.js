import './App.css';
import FilterByName from './Component/FilterByName';
import FilterByRating from './Component/FilterByRating';
import {moviesData} from './data';
import {useState,React} from'react';
import MovieList from './Component/MovieList'
import AddMovie from './Component/AddMovie';




function App() {
  const [movies, setMovies] = useState(moviesData)
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState(1);

  return (
<>
    <div className="App" >
         <div className="up">
      <FilterByName setSearch={setSearch}/>
      <FilterByRating  setRating={setRating} rating={rating}/>
      </div>
      <div>
      <MovieList movies={movies} search={search} rating={rating}  />
      
        
      <AddMovie movies={movies} setMovies={setMovies} />
      

      

      
      </div>
    </div>
  
    
    </>
  );
}

export default App;
