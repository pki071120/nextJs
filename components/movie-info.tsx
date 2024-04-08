import { API_URL } from "../app/(home)/page";

async function getMovie(id:string){
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({id}: {id:string}){
  const info = await getMovie(id);
  console.log(info.backdrop_path);
  return <>
  <img src={info.backdrop_path} alt="경로 못찾음" style={{"width" : "50%",}}/>
  <h2>{info.title}</h2>
  </>
}