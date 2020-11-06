import React, { Component } from 'react';
import API from '../../api/api';
import stylesOfCastPage from 'styled-components';
import LoaderComponent from '../../components/Loader/Loader';

const ImgStyles = stylesOfCastPage.img`
width:70px
`;

export default class Cast extends Component {
  state = {
    castData: [],
    isLoading: false,
    error:null
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    API.fetchCastFilm(API.id).then(data => {
      this.setState({ castData: data });
    }).catch(error=>this.setState({error:true})).finally(this.setState({ isLoading: false}));
  }

  render() {
    const { castData, isLoading,error } = this.state;

    return (
      <>
        {isLoading ? (
          <LoaderComponent />
        ) :(error?<p>Something went wrong</p>: (
          Object.keys(castData).length > 0 && (
            <ul>
              {' '}
              {castData.cast.map(elem => {
                return (
                  <li key={elem.id}>
                    <ImgStyles
                      src={`https://image.tmdb.org/t/p/w500${elem.profile_path}`}
                      alt ='no photo'
                    />
                    <p>{elem.name}</p>
                    <p>{elem.character}</p>
                  </li>
                );
              })}
            </ul>
          )
        ))}
      </>
    );
  }
}

