import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, addFeedBack }) => {
  return options.map(name => {
    <button onClick={addFeedBack} name={name} type="button">
      {name}
    </button>;
  });
};

FeedbackOptions.propTypes = {
  name: PropTypes.array.isRequired,
  addFeedBack: PropTypes.func.isRequired,
};
