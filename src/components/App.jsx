import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section/section';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState();
  const [neutral, setNeutaral] = useState();
  const [bad, setBad] = useState();

  const addFeedBack = name => {
    // this.setState(prevState => {
    //   return {
    //     [event.target.name]: prevState[event.target.name] + 1,
    //   };
    // });
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutaral(prevNeutaral => prevNeutaral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
        defaul: return;
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
          // options={Object.keys(useState())}
          addFeedback={addFeedBack}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistic'}>
        {countTotalFeedback() ? (
          <Statistic
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
