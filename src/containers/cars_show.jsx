import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CarsShow extends Component {
  destroyCar = () => {
    const carId = this.props.car.id;

    this.props.deleteCar(carId, () =>
      this.props.history.push('/')
    );
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return (
      <div class="contain">
        <div class="card-product mb-4">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          <div class="button-pos">
            <div class="card-product-infos">
              <h2>{this.props.car.brand} - {this.props.car.model}</h2>
              <p><strong>Owner</strong> - {this.props.car.owner}</p>
              <p><strong>{this.props.car.plate}</strong></p>
            </div>
            <a class="btn btn-flat" href="#" onClick={this.destroyCar}>Delete</a>
          </div>
        </div>
        <Link to="/" className="text-dark">
          Back
        </Link>
      </div >
    )
  }

}

import { bindActionCreators } from "redux";

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

import { deleteCar } from '../actions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { deleteCar: deleteCar },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
