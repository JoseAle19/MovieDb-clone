// api key
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjY5NDkzMTMxZTNmODFkMDgyYWQwOGYwNjEyMmNhZiIsInN1YiI6IjYxOTlkZTZlYmU3ZjM1MDAyYWQzMjhhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HntRf4ZxT1Q9X0TB4TZ7HYGCXycxn9F37FbWqUE4WGA

export const LIST_IMAGES = [
  "/xcXALwBjdHIjrESpGVhghqj8fGT.jpg",
  "/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg",
  "/zZ3Cv1lz61V9OXXvtCPVtCFTVP7.jpg",
  "/5N8LOeRzt7LcZIhPbNVaCsVOPdT.jpg",
  "/8rmx3Wh6fQdSL2nzTmdFn9thcK8.jpg",
  "/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg",
  "/8rmx3Wh6fQdSL2nzTmdFn9thcK8.jpg",
  "/xpba0Dxz3sxV3QgYLR8UIe1LAAX.jpg",
];

export const options = {
  method: "GET",
  headers: {
    accept: "applications/json",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjY5NDkzMTMxZTNmODFkMDgyYWQwOGYwNjEyMmNhZiIsInN1YiI6IjYxOTlkZTZlYmU3ZjM1MDAyYWQzMjhhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HntRf4ZxT1Q9X0TB4TZ7HYGCXycxn9F37FbWqUE4WGA",
  },
};

export const NO_IMAGE = "../../public/no-image.jpg";

export const addPoster = ({ keyImg }) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${keyImg}`;
};
export const backgroundPoster = ({ keyImg }) => {
  return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${keyImg}`;
};

export const urlVideo = "https://www.youtube.com/embed/";
