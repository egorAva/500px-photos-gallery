import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

it('renders without crashing', () => {
  const rendered = renderer.create(<Main />).toJSON();
  expect(rendered).toBeTruthy();
});
