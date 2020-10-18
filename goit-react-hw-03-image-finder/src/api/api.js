import axios from 'axios';

export default {
  APIKey: '17968712-6412cf5ccb97a4541594b82f1',
  numberOfPage: 1,
  incrementPage: function () {
    this.numberOfPage += 1;
  },
  resetPage: function () {
    this.numberOfPage = 1;
  },

  fetchImages: function (serchQuery) {
    return axios
      .get(
        `https://pixabay.com/api/?q=${serchQuery}&page=${this.numberOfPage}&key=${this.APIKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(responce => {
        return responce.data.hits;
      });
  },
};
