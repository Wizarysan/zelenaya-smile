import React from 'react';
import GalImage from './GalImage.js';
import renderer from 'react-test-renderer';

it('renders correctly with test ID and filename', () => {
  const tree = renderer
    .create(<GalImage currentId="1" image="test.jpg"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});