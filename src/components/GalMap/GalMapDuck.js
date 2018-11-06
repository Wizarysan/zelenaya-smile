import initialState from './../../app/initialState';

//Actions
const GET_GALMAP = 'app/GalMap/GET_GALMAP';

//Reducer
export default function reducer(state = initialState.galMap, action) {
  switch (action.type) {
    case GET_GALMAP:
      return state;
    default:
      return state;
  }
}
