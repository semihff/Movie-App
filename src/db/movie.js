export const getMovies = async (page = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const data = await res.json();
  return data;
};

export const getMovieDetailsById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=tr-US&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const data = await res.json();
  return data;
};

export const getSimilarMovieById = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const data = await res.json();
  return data;
};

export const getMoviesByName = async (name, page = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=${page}&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const data = await res.json();
  return data;
};
