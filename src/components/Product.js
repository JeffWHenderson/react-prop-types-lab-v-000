// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Order extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName){
    let weight = props[propName]

    if ( weight === undefined ) {
  return new Error( `missing ${propName} prop` )
    }
    if ( !(typeof weight === 'number') ) {
      return new Error( `${propName} is not a number` )
    }
    if ( !(weight >= 80 && weight <= 300) ) {
      return new Error( `${propName} not between 80 and 300` )
    }
  }
}

export default Product
