import PropTypes from 'prop-types';

const Screen = ({ total, operation, next }) => (
  <div className="result">
    <span className="screen">
      {total}
      {operation}
      {next}
    </span>
  </div>
);

Screen.propTypes = {
  total: PropTypes.number.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Screen;
