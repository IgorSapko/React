import React, { Children } from 'react';
import PropTypes, { number } from 'prop-types';
import FeedbackStyles from 'styled-components';

const ButtonsListStyles = FeedbackStyles.ul`
&>button{margin-right: 15px;};
&>button:hover{background:blue; 
cursor:pointer}
`;
function Feedback({ onLeaveFeedback, options }) {
  return (
    <ButtonsListStyles className="buttonsList">
      {options.map(elem => {
        return (
          <button key={elem} type="button" onClick={onLeaveFeedback}>
            {elem[0].toUpperCase() + elem.slice(1)}
          </button>
        );
      })}
    </ButtonsListStyles>
  );
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
