import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import MoviesPage from '../../Pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../Pages/MovieDetailsPage/MovieDetailsPage';
import Layout from '../Layout/Layout';
import LoaderComponent from '../Loader/Loader';


// const MovieDetailsPage = lazy(()=> import('../../Pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */))
export default class App extends Component {
  state = {
    isLoading: false,
  };




  render() {

    return (
      <Layout>
        <Suspense fallback = {<LoaderComponent/>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          
          <Route  path="/movies/:movieId" component={MovieDetailsPage} />
          
          <Redirect to="/" />
        </Switch>
        </Suspense>
      </Layout>
    );
  }
}
