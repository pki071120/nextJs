import styles from "../styles/movie-video.module.css"

const API_URL = process.env.REACT_APP_API_KEY;
async function getVideo(id:string){
  const res = await fetch(`${API_URL}/movies/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({id}: {id:string}){
  const videos = await getVideo(id);
  return <div className={styles.container}>
      <iframe key={videos[0].id} src={`https://youtube.com/embed/${videos[0].key}`} title={videos[0].name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
  </div>
}