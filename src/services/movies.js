import { options } from "../utils/constants/constantes";

export const getMovies = async ({ endpoint }) => {
  const response = await fetch(
    
    `https://api.themoviedb.org/3/${endpoint}`,
    options
  );
 
  return await response.json();
};

 