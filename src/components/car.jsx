import React, { Component } from 'react';

class Car extends Component {
  render() {
    return (
      <div class="card-product">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
        <div class="card-product-infos">
          <h2>{this.props.car.brand} - {this.props.car.model}</h2>
          <p><strong>Owner</strong> - {this.props.car.owner}</p>
        </div>
      </div>
    );
  }
};

export default Car;
