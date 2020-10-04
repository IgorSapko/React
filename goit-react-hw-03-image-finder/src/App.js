import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback.js';
import Statistics from './components/Statistics/Statistics.js';
import Section from './components/Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = e => {
    if (e.nativeEvent.target.childNodes[0].nodeValue === 'Good') {
      this.setState(() => {
        return { good: this.state.good + 1 };
      });
    } else if (e.nativeEvent.target.childNodes[0].nodeValue === 'Neutral') {
      this.setState(() => {
        return { neutral: this.state.neutral + 1 };
      });
    } else if (e.nativeEvent.target.childNodes[0].nodeValue === 'Bad') {
      this.setState(() => {
        return { bad: this.state.bad + 1 };
      });
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <Feedback onLeaveFeedback={this.handleIncrement}></Feedback>
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      </div>
    );
  }
}
