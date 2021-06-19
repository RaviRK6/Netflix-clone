const API_KEY = "4a571314aff8cff8d36b19d936850431"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&lanuage=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&lanuage=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
}




export default requests