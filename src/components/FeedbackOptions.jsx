import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, addFeedback }) => {
  return options.map(name => {
    return (
      <button onClick={addFeedback} name={name} type="button">
        {name}
      </button>
    );
  });
};

FeedbackOptions.propTypes = {
  name: PropTypes.array.isRequired,
  addFeedback: PropTypes.func.isRequired,
};
