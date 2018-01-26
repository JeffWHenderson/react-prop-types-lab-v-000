// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {

  render() {
    <div>
      <h1>{this.props.name}</h1>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
    </div>
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
  // orderInfo: PropTypes.shape({
  //   customerName: PropTypes.string.isRequired,
  //   orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  // }).isRequired
};
