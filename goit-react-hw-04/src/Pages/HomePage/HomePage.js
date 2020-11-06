import React, { Component } from 'react';
import FilmItemForList from '../../components/FilmItem/FilmItemForList';
import API from '../../api/api';
import LoaderComponent from '../../components/Loader/Loader';

export default class HomePage extends Component {
  state = {
    isLoading: false,
    dataOfPopularFilms: [],
    error: null,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    API.fetchTrendingFilms()
      .then(data => this.setState({ dataOfPopularFilms: data }))
      .catch(error => this.setState({ error: true }))
      .finally(this.setState({ isLoading: false }));
  }

  handleGetIDOfFilm = id => {
    API.id = id;
  };

  render() {
    const { dataOfPopularFilms, isLoading, error } = this.state;
    return (
      <div>
        {isLoading ? (
          <LoaderComponent />
        ) : error ? (
          <p>Something went wrong</p>
        ) : (
          <>
            <h2> List of popular films</h2>
            <ul>
              <FilmItemForList
                data={dataOfPopularFilms}
                handleGetDataOfFilm={this.handleGetIDOfFilm}
                {...this.props}
              />
            </ul>
          </>
        )}
      </div>
    );
  }
}


