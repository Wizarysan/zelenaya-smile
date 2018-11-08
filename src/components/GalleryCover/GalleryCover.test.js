import React from 'react';
import GalleryCover from './GalleryCover.js';
import renderer from 'react-test-renderer';

it('renders correctly with test props', () => {
  const tree = renderer
    .create(<GalleryCover link="testLink" currentId="1" currentCity="testCity" name="test name" image="test.jpg"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});