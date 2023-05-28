import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Car extends Component {
  render() {
    return (
      <Link to={`/cars/${this.props.car.id}`} key={this.props.car.id} className="text-decoration-none text-dark">
        <div class="card-product mb-4">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          <div class="card-product-infos">
            <h2>{this.props.car.brand} - {this.props.car.model}</h2>
            <p><strong>Owner</strong> - {this.props.car.owner}</p>
          </div>
        </div>
      </Link >
    );
  }
};

export default Car;
