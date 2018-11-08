import React from 'react';
import BannerGiraffeVertical from './BannerGiraffeVertical.js';
import renderer from 'react-test-renderer';

it('renders correctly with test city', () => {
  const tree = renderer
    .create(<BannerGiraffeVertical cityGW="testCity"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});