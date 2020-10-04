import React from 'react';
import PropTypes from 'prop-types';
import StatisticsStyles from 'styled-components';

const List = StatisticsStyles.ul`
list-style: none;
&>li{margin-bottom: 6px;}
&>li>span:first-child{margin-right: 6px;}

`;
const NoFeedbackSpan = StatisticsStyles.span`
font-size:18px;
font-weight:700px
`;

function Statistics({ good, neutral, bad }) {
  return good || neutral || bad ? (
    <div>
      <List>
        <li>
          <span>Good:</span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral:</span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad:</span>
          <span>{bad}</span>
        </li>
        <li>
          <span>Total:</span>
          <span>{neutral + good + bad}</span>
        </li>
        <li>
          <span>Positive feedback:</span>
          <span>{Math.round((good / (neutral + good + bad)) * 100)}%</span>
        </li>
      </List>
    </div>
  ) : (
    <NoFeedbackSpan>'No feedbacks given'</NoFeedbackSpan>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
};

export default Statistics;
