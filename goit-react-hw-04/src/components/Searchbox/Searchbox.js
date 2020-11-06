import React, { Component } from 'react';
import searchboxStyles from 'styled-components';

const SarchBox = searchboxStyles.div`
display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

      .SearchForm {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 600px;
        background-color: #fff;
        border-radius: 3px;
        overflow: hidden;
      };
      .SearchForm-button {
        display: inline-block;
        width: 48px;
        height: 48px;
        border: 0;
        background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
        background-size: 40%;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.4;
        transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        outline: none;
      }
      
      .SearchForm-button:hover {
        opacity: 1;
      }
      
      .SearchForm-button-label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        clip-path: inset(50%);
        border: 0;
      }
      
      .SearchForm-input {
        display: inline-block;
        width: 100%;
        font: inherit;
        font-size: 20px;
        border: none;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;
      }
      
      .SearchForm-input::placeholder {
        font: inherit;
        font-size: 18px;
      }
`;

export default class MoviesPage extends Component {
  state = {
    valueOfInput: '',
    dataOfFilmsByQuery: [],
    isLoading: false,
  };

  handleChange = e => {
    this.setState({ valueOfInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.valueOfInput) {
      this.props.onSubmit(this.state.valueOfInput);

      this.setState({
        valueOfInput: '',
      });
    }
  };

  handleGetIDOfFilm = id => {
    API.id = id;
  };

  render() {
    const { valueOfInput, dataOfFilmsByQuery } = this.state;

    return (
      <>
        <header>
          <SarchBox className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>

              <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search films"
                onChange={this.handleChange}
                value={valueOfInput}
              />
            </form>
          </SarchBox>
        </header>
      </>
    );
  }
}
