import initialState from './../../app/initialState';
import { combineReducers } from "redux";

//Actions
const CHANGE_ID = 'app/Gallery/CHANGE_ID';
const RECEIVE = 'app/Gallery/RECEIVE';

//Reducer
function activeGalleryId(state = initialState.activeGallery.id, action) {
  switch (action.type) {
    case 'app/Gallery/CHANGE_ID':
      return action.payload;
    default:
      return state;
  }
}

function activeGallery(state = initialState.activeGallery.body, action) {
  switch (action.type) {
    case 'app/Gallery/RECEIVE':
      return action.payload;
    default:
      return state;
  }
}

const reducer = combineReducers( {
    activeGalleryId,
    body: activeGallery,
} );

export default reducer;

//Action Creators
export function requestGallery(id) {
  return {
    type: CHANGE_ID,
    payload: id
  }
}

export function receiveGallery(id, body) {
  return {
    type: RECEIVE,
    payload: body
  }
}

export function loadGallery(id) {
  return function (dispatch) {
    dispatch(requestGallery(id))
    let galData = {id:id};
    let fd = new FormData();
    for(var i in galData){
       fd.append(i,galData[i]);
    }
    return fetch('/getGallery.php',
      {method: "POST",
      body: fd,
      mode: "cors"
      })
    //.then(response => console.log(response))
    .then(response => response.json())
    .then(data => {
      dispatch(receiveGallery(id, data))
    })
    //TODO обработка ошибки
    .catch(alert);
  }
}

// export function loadGallery(id) {
//   return function (dispatch) {
//     dispatch(requestGallery(id))
//     return dispatch(receiveGallery(id, [
//       '3a54c2ad3b86437c0ffb985969eb93e2.jpg',
//       '0e5119763afb9a53cd87fcea413431c4.jpg',
//       '4d32f45a8b78fc9776b4fdb5b580b616.jpg',
//       '4cfd439256cab895100dfefc0a0f0b43.jpg',
//       ]
//     ))
//   }
// }
