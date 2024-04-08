import { API_URL } from "../../../(home)/page";

async function getMovie(id:string){
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function getVideo(id:string){
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieDetail({params: {id}}: {params: {id : string}}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideo(id)]);
  return <h1>{movie.title}</h1>;
}