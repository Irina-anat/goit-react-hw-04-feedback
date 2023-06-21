import {useState, useEffect} from 'react';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import css from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const addFeedbackOption = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1
    }));
  };

  const { good, neutral, bad } = feedback;

  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  useEffect(() => {
    // Виконується дія при зміні стану feedback

  }, [feedback]);

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={addFeedbackOption}
        />
      </Section>

      {totalFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message={"There is no feedback"} />
      )}
    </div>
  );
};

export { App };
          










/*export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  addFeedbacOption = option => {
    this.setState(state => ({
      [option]: state[option] + 1,}));
  };
  
  countTotalFeedback() {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
  };
  
  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;
    if (totalFeedback === 0) {
    return 0;
    }
     const positivePercentage = (good / totalFeedback) * 100;
    return Math.round(positivePercentage);
  };

      render() {
      const { good, neutral, bad } = this.state;
        return (
          <div className={css.container}>

        <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedbacOption} />
            </Section>
            
            {this.countTotalFeedback()
              
              ? (<Section title="Statistics">
              <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()} />
              </Section>)
              : (<Notification message={"There is no feedback"} />)}
    
            </div>)}
};*/

