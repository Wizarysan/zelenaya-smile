import initialState from './../../app/initialState';

//Actions
const GALLERY_REQUEST = 'app/Gallery/GALLERY_REQUEST';
const GALLERY_SUCCESS = 'app/Gallery/GALLERY_SUCCESS';
const GALLERY_ERROR = 'app/Gallery/GALLERY_ERROR';

//Reducer
export default function reducer (state = initialState.activeGallery, action) {
  switch (action.type) {
    case 'app/Gallery/GALLERY_REQUEST':
      return {
        ...state,
        id: action.payload,
        loading: true,
        error: false
      };
    case 'app/Gallery/GALLERY_SUCCESS':
      return {
        ...state,
        body: action.payload,
        loading: false,
        error: false
      };
    case 'app/Gallery/GALLERY_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

//Action Creators
export function requestGallery(id) {
  return {
    type: GALLERY_REQUEST,
    payload: id
  }
}

export function receiveGallerySuccess(body) {
  return {
    type: GALLERY_SUCCESS,
    payload: body
  }
}

export function receiveGalleryError(err) {
  return {
    type: GALLERY_ERROR
  }
}

export function loadGallery(id) {
  return (dispatch) => {
    dispatch(requestGallery(id))
    let galData = {id:id};
    let fd = new FormData();
    for(var i in galData){
       fd.append(i,galData[i]);
    }
    return fetch('/getGallery.php',
      {
        method: "POST",
        body: fd,
        mode: "cors"
      })
    .then(res => res.json())
    .then(
      data => dispatch(receiveGallerySuccess(data)),
      err => {
        console.error(err)
        dispatch(receiveGalleryError(err))
      }
    )
  }
}
