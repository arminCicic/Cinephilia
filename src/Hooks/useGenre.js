//React custom hoooks you use state and other React features without writing a class. Building custom hooks lets us extract component logic into reusable functions.

const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const GenresID = selectedGenres.map((g) => g.id);

  return GenresID.reduce((acc, curr) => acc + "," + curr);
};

//accculumator and a current value
//GenresID will look like [24,31,16,8], number being the ids of the movies or tv-shows.

export default useGenres;
