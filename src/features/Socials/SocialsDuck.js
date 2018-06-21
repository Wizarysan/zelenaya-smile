import initialState from './../../app/initialState';

//Actions
const GET_SOCIALS = 'app/Socials/GET_SOCIALS';

//Reducer
export default function reducer(state = initialState.socials, action) {
  switch (action.type) {
    case GET_SOCIALS:
      return state;
    default:
      return state;
  }
}
