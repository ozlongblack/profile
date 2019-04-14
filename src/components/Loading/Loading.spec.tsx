import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import LoadingView from './Loading.view';

it('renders correctly', (): void => {
  const tree: ReactTestRendererJSON | null = renderer
    .create(<LoadingView isLoading={true} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
