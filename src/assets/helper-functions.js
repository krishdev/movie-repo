export const apiKey = "4d404175";

/**
 * 
 * @param {string} id | Pass imdbID 
 * @returns Object of movies
 */
export const getOmdbUrl = (id) => `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;