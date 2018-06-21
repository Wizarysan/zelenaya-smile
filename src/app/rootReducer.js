import {combineReducers} from 'redux';
import CityReducer from './../features/CitySwitch/CityDuck';
import GalMapReducer from './../features/GalMap/GalMapDuck';
import GalleryReducer from './../features/Gallery/GalleryDuck';
import SocialsReducer from './../features/Socials/SocialsDuck';

const rootReducer = combineReducers({
  city: CityReducer,
  galMap: GalMapReducer,
  activeGallery: GalleryReducer,
  socials: SocialsReducer
});

export default rootReducer;
