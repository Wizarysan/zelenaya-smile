import React from 'react';
import Thumb from './Thumb.js';
import renderer from 'react-test-renderer';

it('renders correctly with test ID, city and image', () => {
  const tree = renderer
    .create(<Thumb currentId="1" currentCity="testCity" image="test.jpg"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});