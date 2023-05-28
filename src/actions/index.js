import { request } from "http";

export const FETCH_CARS = 'FETCH_CARS';
export const POST_CAR = 'POST_CAR';
export const DELETE_CAR = 'DELETE_CAR';

const url = `https://wagon-garage-api.herokuapp.com/garage/cars`;

export function fetchCars() {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return {
        type: FETCH_CARS,
        payload: data
      }
    });
}

export function createCar(values, callback) {
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)

  })
    .then(resp => resp.json())
    .then(callback)

  return {
    type: POST_CAR,
    payload: request
  }
}

export function deleteCar(carId, callback) {
  debugger
  const request = fetch(`https://wagon-garage-api.herokuapp.com/cars/${carId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    }
  )
    .then(resp => resp.json())
    .then(callback)

  return {
    type: DELETE_CAR,
    payload: request
  }
}
