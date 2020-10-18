import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button.js';
import LoaderComponent from './components/Loader/Loader.js';
import requestApi from './api/api';
import styles from './styles/styles.css';

export default class App extends Component {
  state = {
    isLoading: false,
    valueOfInput: '',
    responce: [],
    dataOfBigImage: {
      src: '',
      description: '',
    },
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.responce !== this.state.responce &&
      prevState.responce.length !== 0
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
    const { valueOfInput, responce } = this.state;

    if (prevState.valueOfInput !== valueOfInput && valueOfInput) {
      requestApi.resetPage();

      requestApi
        .fetchImages(valueOfInput, requestApi.numberOfPage)
        .then(arrOfFetchedImages =>
          this.setState({
            responce: arrOfFetchedImages,
            // valueOfInput: '',
            isLoading: false,
          }),
        );
    }
  }

  getDataOfBigElement = (srcBig, descr) => {
    this.setState({
      dataOfBigImage: {
        src: srcBig,
        description: descr,
      },
    });
  };

  handleCloseOfModalWindowByClick = e => {
    this.setState({
      dataOfBigImage: {
        src: '',
        description: '',
      },
    });
  };

  escFunction = event => {
    if (event.code === 'Escape') {
      this.setState({
        dataOfBigImage: {
          src: '',
          description: '',
        },
      });
    }
  };

  handleCloseOfModalWindowByESC = () => {
    document.addEventListener('keydown', this.escFunction);
  };

  handleSubmit = e => {
    e.preventDefault();

    const input = document.querySelector('input');

    if (!input.value) {
      alert('Please enter Your request');
      return;
    }

    this.setState({ valueOfInput: input.value, isLoading: true });

    input.value = '';
  };

  handleClick = () => {
    this.setState({ isLoading: true });

    const { valueOfInput } = this.state;
    requestApi.incrementPage();

    requestApi
      .fetchImages(valueOfInput, requestApi.numberOfPage)
      .then(arrOfFetchedImages =>
        this.setState(prevState => {
          return {
            responce: [...prevState.responce, ...arrOfFetchedImages],
            isLoading: false,
          };
        }),
      );
  };

  render() {
    const { responce, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <ImageGallery>
            <ImageGalleryItem
              data={responce}
              getDataOfBigElement={this.getDataOfBigElement}
            />
          </ImageGallery>
        )}
        <Modal
          src={this.state.dataOfBigImage.src}
          descr={this.state.dataOfBigImage.description}
          closeWindowByClick={this.handleCloseOfModalWindowByClick}
          closeWindowByESC={this.handleCloseOfModalWindowByESC}
        />
        {responce.length > 0 && <Button callback={this.handleClick} />}
      </div>
    );
  }
}
