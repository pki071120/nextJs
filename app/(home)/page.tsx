export const metadata = {
  title: "Home",
}
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
  return fetch(URL).then(res => res.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  );
}
