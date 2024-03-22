export const getGenresList = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=tr&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const data = await res.json();
  return data;
};

export const getMoviesByCategoriesId = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const data = await res.json();
  return data;
};
