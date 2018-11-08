import React from 'react';
import Share from './Share.js';
import renderer from 'react-test-renderer';

it('renders correctly with test props', () => {
  const tree = renderer
    .create(<Share size="64" image="test.jpg"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});