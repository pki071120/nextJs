<<<<<<< HEAD
import Link from "next/link";

export const metadata = {
  title: "Home",
}
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
  return fetch(API_URL).then(res => res.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map(movie => <li><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
=======
"use client"

import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setIsLoadind] = useState(true);
  const [moives, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const json = await response.json();
    setMovies(json);
    setIsLoadind(false);
  }
  useEffect(() => {
    getMovies();
  },[]);
  return (
    <div>
      {isLoading ? "Loading..." : JSON.stringify(moives)}
>>>>>>> 873680f (client side fetching)
    </div>
  );
}
