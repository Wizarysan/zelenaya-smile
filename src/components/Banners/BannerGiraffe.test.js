import React from 'react';
import BannerGiraffe from './BannerGiraffe.js';
import renderer from 'react-test-renderer';

it('renders correctly with test city', () => {
  const tree = renderer
    .create(<BannerGiraffe cityGW="testCity"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});