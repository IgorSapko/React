import React from 'react';
import PropTypes from 'prop-types';
import FilterStyles from 'styled-components';

const InputStyle = FilterStyles.input`
&:focus{outline-style: solid;
outline-color: blue;}
`;

function Filter({ handleChange, filter }) {
  return (
    <InputStyle
      type="text"
      placeholder="Enter Name for serch"
      name="filter"
      value={filter}
      onChange={handleChange}
    />
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
