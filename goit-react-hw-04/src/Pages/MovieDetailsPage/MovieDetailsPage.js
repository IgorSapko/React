import React, { useState, Component } from 'react';
import API from '../../api/api';
import FilmItemForDetilsPage from '../../components/FilmItemForDetilsPage/FilmItemForDetilsPage';
import LoaderComponent from '../../components/Loader/Loader';

class MovieDetailsPage extends Component {
  state = {
    dataOfFilmByID: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    API.fetchFilmByID(API.id)
      .then(data => {
        this.setState({ dataOfFilmByID: data });
      })
      .catch(error => {
        this.setState({ error: true });
      })
      .finally(this.setState({ isLoading: false }));
  }

  handleGoback = () =>{
    const { state } = this.props.location;

    if (state && state.from) {
      this.props.history.push(state.from);
    }
  }

  render() {
    const { dataOfFilmByID, isLoading, error } = this.state;

    return (
      <>
        {isLoading ? (
          <LoaderComponent />
        ) : error ? (<>
        <button onClick={this.handleGoback}>GoBack</button>
          <p>Something went wrong</p></>
        ) : (
          Object.keys(dataOfFilmByID).length > 0 && (
            <FilmItemForDetilsPage data={dataOfFilmByID} {...this.props} handleGoback = {this.handleGoback} />
          )
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
