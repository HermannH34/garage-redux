import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Car from '../components/car'
import { fetchCars } from '../actions';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render() {
    return (
      <div className="container">
        {this.props.cars.map((car, i) => (
          <Car key={i} car={car} />
        ))}
        <Link to="car/new" className="btn btn-ghost">Add a Car</Link>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars: fetchCars }, dispatch);
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
