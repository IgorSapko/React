import React, { Component,lazy,Suspense } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import Cast from '../../Pages/Cast/Cast';
import Reviews from '../../Pages/Reviews/Reviews';
import movieDetailsPageStyles from 'styled-components';
import LoaderComponent from '../../components/Loader/Loader';

// const Cast = lazy(()=>import('../../Pages/Cast/Cast'))

const GeneralWrapperStyles = movieDetailsPageStyles.div`
display: flex;
img{width:200px; margin-right:10px};
.genresList{
  list-style:none;
  display:flex;
  
};
.genresList>li:not(:last-child){margin-right:10px}
`;
const LinkListStyles = movieDetailsPageStyles.ul`


    &>li{margin-right:20px;};
    &>li .Active-Nav-Link{
        color:rgb(226, 101, 43)
          };
        
          .Nav-Link{
        color:blue
          };
    
`;

export default class FilmItemForDetilsPage extends Component {


  render() {
    const { data, match } = this.props;

    return (
      <>
        <button onClick={this.props.handleGoback}>Go back</button>
        <GeneralWrapperStyles className="generalWrapper">
          <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}></img>
          <div className="descriptionWrapper">
            <h2>
              {data.original_title} ({data.release_date.split('-')[0]})
            </h2>
            <p>User score: {data.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{data.overview}</p>
            <h3>Genres</h3>
            <ul className="genresList">
              {data.genres.map(elem => {
                return (
                  <li key={elem.id}>
                    <p>{elem.name}</p>{' '}
                  </li>
                );
              })}
            </ul>
          </div>
        </GeneralWrapperStyles>
        <p>Additional information</p>
        <LinkListStyles className="linkList">
          <li>
            <NavLink
              className="Nav-Link"
              activeClassName="Active-Nav-Link"
              exact
              to={{
                pathname: `${match.url}/cast`,
                state: { from: this.props.location.state.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className="Nav-Link"
              activeClassName="Active-Nav-Link"
              exact
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: this.props.location.state.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </LinkListStyles>
        <Suspense fallback={<LoaderComponent/>}>
        <Switch>
          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route exact path="/movies/:movieId/reviews" component={Reviews} />
            {/* <Redirect to="/" /> */}
        </Switch>
        </Suspense>
      </>
    );
  }
}
