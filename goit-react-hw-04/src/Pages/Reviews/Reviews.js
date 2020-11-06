import React, { Component } from 'react';
import API from '../../api/api';
import LoaderComponent from '../../components/Loader/Loader';

export default class Reviews extends Component {
  state = {
    reviewData: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    API.fetchReviewsFilm(API.id)
      .then(data => {
        this.setState({ reviewData: data });
      })
      .catch(error => this.setState({ error: true }))
      .finally(this.setState({ isLoading: false }));
  }

  handleGetIDOfFilm = id => {
    API.id = id;
  };

  render() {
    const { reviewData, isLoading, error } = this.state;

    return (
      <>
        {isLoading ? (
          <LoaderComponent />
        ) : error ? (
          <p>Something went wrong</p>
        ) : reviewData.length > 0 ? (
          <ul>
            {' '}
            {reviewData.map(elem => {
              return (
                <li key={elem.id}>
                  <h3>Author: {elem.author}</h3>

                  <p> {elem.content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}
