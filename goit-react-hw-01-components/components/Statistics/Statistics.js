import React from 'react';
// import StatisticsStyles from './Statistics.module.css'
import PropTypes, { number } from 'prop-types';
import StatisticsStyles from 'styled-components';

const StatisticsSection = StatisticsStyles.section`
  display: block;
    width: 280px;
    height: 150px;
    text-align: center;
  `;
const Title = StatisticsStyles.h2`
font-size: 18px;
    color: grey;
    font-weight: 700;
    text-transform: uppercase;
`;
const StatList = StatisticsStyles.ul`
display: flex;
`;
const StatsListItem = StatisticsStyles.li`
width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    &:first-child{
      background-color: hotpink;
  };
  &:nth-child(2){
      background-color: indianred;
  };
  &:nth-child(3){
      background-color: khaki;
  };
  &:last-child{
      background-color: lawngreen;
  }
`;
const Label = StatisticsStyles.span`
font-size: 14px;
margin-bottom: 10px;
`;
const Percentage = StatisticsStyles.span`
font-size:20px;
`;
function Statistics({ title, stats }) {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map((elem, i) => {
          if (i > 3) {
            return;
          } else
            return (
              <StatsListItem key={elem.id}>
                <Label>{elem.label}</Label>
                <Percentage>{elem.percentage}%</Percentage>
              </StatsListItem>
            );
        })}
      </StatList>
    </StatisticsSection>
  );
}

Statistics.defaultProps = {
  title: '',
  stats: [
    { id: 'id-1', label: '.docx', percentage: 'XX' },
    { id: 'id-2', label: '.pdf', percentage: 'XX' },
    { id: 'id-3', label: '.mp3', percentage: 'XX' },
    { id: 'id-4', label: '.psd', percentage: 'XX' },
  ],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
