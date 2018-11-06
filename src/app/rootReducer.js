import {combineReducers} from 'redux';
import CityReducer from './../components/CitySwitch/CityDuck';
import GalMapReducer from './../components/GalMap/GalMapDuck';
import GalleryReducer from './../components/Gallery/GalleryDuck';
import SocialsReducer from './../components/Socials/SocialsDuck';

const rootReducer = combineReducers({
  city: CityReducer,
  galMap: GalMapReducer,
  activeGallery: GalleryReducer,
  socials: SocialsReducer
});

export default rootReducer;
