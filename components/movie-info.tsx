import styles from "../styles/movie-info.module.css";

const API_URL = process.env.REACT_APP_API_KEY;

export async function getMovie(id:string){
  const res = await fetch(`${API_URL}/movies/${id}`);
  return res.json();
}

export default async function MovieInfo({id}: {id:string}){
  const info = await getMovie(id);
  return <div className={styles.container}>
  <img src={info.poster_path} alt="경로 못찾음" className={styles.poster}/>
  <div className={styles.detail}>
    <h2 className={styles.title}>{info.title}</h2>
    <div className={styles.genresContainer}>
      genres: 
      {info.genres.map((genre) => <span key={genre.id} className={styles.genre}> {genre.name},</span>)}
    </div>
    <h2 className={styles.runtime}>Runtime : {Math.floor(info.runtime/60)}H {info.runtime%60 == 0 ?null : info.runtime%60+"M"}</h2>
    <h2 className={styles.reviewpoint}>⭐️ {info.vote_average}</h2>
    <p className={styles.overview}>{info.overview}</p>
  </div>
  </div>
}