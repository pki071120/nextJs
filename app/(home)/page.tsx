import Movie from "../../components/movie";
import stylse from "../../styles/home.module.css";

const API_URL = process.env.REACT_APP_API_KEY;

export const metadata = {
  title: "Home",
}

export async function getMovies() {
  const res = await fetch(`${API_URL}/movies`);
  return res.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={stylse.container}>
      {movies.map(movie => <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}></Movie>)}
      </div>
    )
}