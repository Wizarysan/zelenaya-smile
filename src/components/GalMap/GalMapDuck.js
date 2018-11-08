import initialState from './../../app/initialState';

//Actions
const GET_GALMAP = 'app/GalMap/GET_GALMAP';
const GET_GALMAP_SUCCESS = 'app/GalMap/GET_GALMAP_SUCCESS';
const GET_GALMAP_ERROR = 'app/GalMap/GET_GALMAP_ERROR';

//Reducer
export default function reducer(state = initialState.galMap, action) {
  switch (action.type) {
    case GET_GALMAP:
      return {
        loading: true,
        error: false,
        body: state.body
      };
    case GET_GALMAP_SUCCESS:
      return {
        loading: false,
        error: false,
        body: action.data
      };
    case GET_GALMAP_SUCCESS:
      return {
        loading: false,
        error: true,
        body: state.body
      };
    default:
      return state;
  }
}

//Action Creators 
export function getGalleryMap() {
  return {
    type: GET_GALMAP
  }
}

export function getGalleryMapSuccess(data) {
  return {
    type: GET_GALMAP_SUCCESS,
    data
  }
}

export function getGalleryMapError() {
  return {
    type: GET_GALMAP_ERROR
  }
}

export function fetchGalMap() {
  return (dispatch) => {
    dispatch(getGalleryMap());
    console.log('GalMap fetching initiated')
    fetch('/galleryMap.json')
      .then(res => res.json())
      .then(
        data => dispatch(getGalleryMapSuccess(data)),
        err => dispatch(getGalleryMapError())
      )
  }
}

