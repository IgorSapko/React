import React, { Component } from 'react';
import API from '../../api/api';
import FilmItemForList from '../../components/FilmItem/FilmItemForList';
import queryStr from 'query-string';
import LoaderComponent from '../../components/Loader/Loader';
import Searchbox from '../../components/Searchbox/Searchbox';

export default class MoviesPage extends Component {
  state = {
    dataOfFilmsByQuery: [],
    isLoading: false,
    error:null
  };

  componentDidMount() {
    const parsedQuery = queryStr.parse(this.props.location.search);
    if (parsedQuery.query) {
      this.handleChangeQuery(parsedQuery.query);
    }
  }

  handleGetIDOfFilm = id => {
    API.id = id;
  };

  handleChangeQuery = query => {
    this.setState({ isLoading: true });
    API.fetchFilmByQuery(query).then(data =>
      this.setState({
        isLoading: false,
        dataOfFilmsByQuery: data,
      }),
    ).catch(error=>console.log(error));

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { valueOfInput, isLoading, dataOfFilmsByQuery } = this.state;
      return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <ul className="MoviesPage">
            <FilmItemForList
              data={dataOfFilmsByQuery}
              handleGetDataOfFilm={this.handleGetIDOfFilm}
              {...this.props}
            />
          </ul>
        )}
      </>
    );
  }
}
