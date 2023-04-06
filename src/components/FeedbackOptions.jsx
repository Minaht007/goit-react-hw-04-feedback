import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, addFeedBack }) => {
  return options.map(name => {
    return (
      <ul>
        <li key={name}>
          <button key={name} onClick={addFeedBack} name={name} type="button">
            {name}
          </button>
        </li>
      </ul>
    );
  });
};

FeedbackOptions.propTypes = {
  name: PropTypes.array,
  addFeedBack: PropTypes.func,
};
