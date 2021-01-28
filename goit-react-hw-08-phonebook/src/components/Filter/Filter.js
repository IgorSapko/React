import React from "react";
import PropTypes from "prop-types";
import FilterStyles from "styled-components";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/actions/contactsAction";
import { getFilterValue } from "../../redux/selectors/contactsSelectors.js";

const InputStyle = FilterStyles.input`
width:71vw;
&:focus{outline-style: solid;
outline-color: blue;}
`;

function Filter({ filterContacts, filter }) {
  console.log("FILTER");
  return (
    <InputStyle
      type="text"
      placeholder="Enter Name for serch"
      name="filter"
      value={filter}
      onChange={(event) => {
        filterContacts(event.target.value);
      }}
    />
  );
}

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapSateToProps = (state) => {
  return { filter: getFilterValue(state) };
};

const mapDispatchToProps = { filterContacts };

export default connect(mapSateToProps, mapDispatchToProps)(Filter);
