import axios from 'axios';

export default {
  APIKey: 'd2391c473c2dd48960a52c6837b69990',

   id: false,

  fetchTrendingFilms: function () {
   let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.APIKey}`;
    return axios.get(url).then(responce => responce.data.results);
  },

  fetchFilmByQuery: function (serchQuery) {
    let  url = `https://api.themoviedb.org/3/search/movie?api_key=${this.APIKey}&query=${serchQuery}&page=1`;
    return axios.get(url).then(responce => responce.data.results);
  },

  fetchFilmByID: function (id) {
    console.log('id only');
    let  url = ` https://api.themoviedb.org/3/movie/${id}?api_key=${this.APIKey}`;
    return axios.get(url).then(responce => responce.data);
  },

  fetchCastFilm: function (id) {
    console.log('cast');
    let  url = ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.APIKey}`;
    return axios.get(url).then(responce => responce.data);
  },

  fetchReviewsFilm: function (id) {
    console.log('reviews');
    let  url = ` https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.APIKey}`;
    return axios.get(url).then(responce => responce.data.results);
  },
};
