export const getActorByMovieId = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-tr&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const data = await res.json();
  return data;
};
