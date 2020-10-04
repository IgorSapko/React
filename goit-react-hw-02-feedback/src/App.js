import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback.js';
import Statistics from './components/Statistics/Statistics.js';
import Section from './components/Section/Section';
import { object } from 'prop-types';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = e => {
    const nameOfButton = e.nativeEvent.target.childNodes[0].nodeValue;
    
    if (nameOfButton === "Good") {
      this.setState(() => {
        return { good: this.state.good + 1 };
      });
    } else if (nameOfButton === 'Neutral') {
      this.setState(() => {
        return { neutral: this.state.neutral + 1 };
      });
    } else if (nameOfButton === 'Bad') {
      this.setState(() => {
        return { bad: this.state.bad + 1 };
      });
    }
  };

  countTotalFeedback =()=>{
const {good,neutral, bad} = this.state;
const total = neutral + good + bad;
return total
  };
   countPositiveFeedbackPercentage=()=>{
    const { good, neutral, bad } = this.state;
    const positivePercentage= Math.round((good / (neutral + good + bad)) * 100); 
   
    return positivePercentage;
    
   };
  render() {
    const {good,neutral, bad} = this.state;
   
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement}></Feedback>
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </div>
    );
  }
}
