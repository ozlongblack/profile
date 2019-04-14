import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { List } from 'immutable';
import ListView from './List.view';

describe('List', (): void => {
  it('renders correctly', (): void => {
    const fixture: {} = {
      list: {
        data: List([
          {
            cateogry: 'category',
            description: 'description',
          },
        ]),
      },
    };

    const messages: {} = {
      'app.title': 'title',
    };

    const tree: ReactTestRendererJSON | null = renderer
      .create(
        <IntlProvider locale="en" messages={messages}>
          <ListView {...fixture} />
        </IntlProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
