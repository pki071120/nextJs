import { API_URL } from "../app/(home)/page";

async function getMovie(id:string){
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({id}: {id:string}){
  const info = await getMovie(id);
  return <h6>{JSON.stringify(info.title)}</h6>
}