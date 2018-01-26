// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {

  render() {
    // ...
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool //arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired, // a string — required, can only be `'white'`, `'eggshell-white'` or `'salmon'`
  weight: PropTypes.int.isRequired // a number — required, ranges between 80 and 300
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  }).isRequired
};

