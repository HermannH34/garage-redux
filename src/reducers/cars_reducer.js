import { FETCH_CARS, POST_CAR } from '../actions';


export default function (state = [], action) {
  switch (action.type) {

    case FETCH_CARS:
      return action.payload;
    // case POST_CAR
    //   return
    default:
      return state
  }
}
