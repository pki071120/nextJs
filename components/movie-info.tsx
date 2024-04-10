import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

async function getMovie(id:string){
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({id}: {id:string}){
  const info = await getMovie(id);
  return <div className={styles.container}>
  <img src={info.poster_path} alt="경로 못찾음" className={styles.poster}/>
  <div className={styles.detail}>
    <h2>{info.title}</h2>
    <h2>{info.vote_average}</h2>
    <p>{info.overview}</p>
  </div>
  </div>
}