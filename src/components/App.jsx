import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section/section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutaral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedBack = { good, bad, neutral };
  console.log(feedBack);

  const addFeedBack = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutaral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const add = good + neutral + bad;
    return add;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      const positiv = Math.round(good / (countTotalFeedback() / 100));
      return positiv;
    }
    return 0;
  };

  return (
    <div>
      <Section title={'FeedbackOption'}>
        <FeedbackOptions
          name={['good', 'bad', 'neutral']}
          options={Object.keys(feedBack)}
          addFeedback={addFeedBack}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistic'}>
        {countTotalFeedback() > 0 ? (
          <Statistic
            key={feedBack}
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
        ;
      </Section>
    </div>
  );
};
