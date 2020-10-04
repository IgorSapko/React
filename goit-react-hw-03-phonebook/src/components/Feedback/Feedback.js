import React, { Children } from 'react';
import PropTypes, { number } from 'prop-types';
import FeedbackStyles from 'styled-components';

const ButtonsListStyles = FeedbackStyles.ul`
&>button{margin-right: 15px;};
&>button:hover{background:blue; 
cursor:pointer}
`;
function Feedback({ onLeaveFeedback }) {
  return (
    <ButtonsListStyles className="buttonsList">
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>

      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>

      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </ButtonsListStyles>
  );
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
