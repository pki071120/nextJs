import Link from "next/link";

const API_URL = process.env.REACT_APP_API_KEY;

export async function getSimilar(id: string){
  const res = await fetch(`${API_URL}/movies/${id}/similar`);
  return res.json();
}

export default async function Similar({ id }: {id:string}){
  const similar = await getSimilar(id);
  return (
  <div>
    {similar.map((sim) => (
      <div key={sim.id}>
        <Link href={`${sim.id}`}>
          {sim.poster_path !== null ? (
            <>
              <img src={sim.poster_path} alt={sim.title} style={{width: "100px"}} /> 
              <h6>{sim.title}</h6>
            </>
          ) : null}
        </Link>
      </div>
    ))}
  </div>
  )
}
