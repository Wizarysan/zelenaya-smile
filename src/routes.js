import React from 'react';
import { Route, Switch, IndexRoute } from 'react-router';
import {CSSTransitionGroup} from 'react-transition-group';
import App from './app/App';
import './app/App.css';
import HomePage from './pages/Home';
import CityPage from './pages/City';
import GalleryPage from './pages/Gallery';
import ImagePage from './pages/Image';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
      <Route path="city/:cityName" component={CityPage}/>
      <Route path="gallery/:id/:cityName" component={GalleryPage}/>
      <Route path="image/:galleryId/:image/:cityName" component={ImagePage}/>
      <Route path="*" component={HomePage}/>
  </Route>
);
