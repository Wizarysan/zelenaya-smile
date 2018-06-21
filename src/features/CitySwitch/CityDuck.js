import initialState from './../../app/initialState';

//Actions
const SET_CITY = 'app/City/SET_CITY';

//Reducer
export default function reducer(state = initialState.city, action) {
  switch (action.type) {
    case SET_CITY:      
      return action.city;
    default:
      return state;
  }
}

//Action Creators
export function setCity(city) {
  return {
    type: SET_CITY,
    city
  }
}
