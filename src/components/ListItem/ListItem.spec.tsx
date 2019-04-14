import React from 'react';
import { IntlProvider } from 'react-intl';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { ListItemProps } from './ListItem.props';
import ListItemView from './ListItem.view';

describe('ListItem', (): void => {
  const RealDate = Date;

  function mockDate(isoDate: string): void {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(isoDate);
      }
    };
  }

  afterEach(
    (): void => {
      global.Date = RealDate;
    },
  );

  it('renders correctly', (): void => {
    mockDate('2017-03-25T12:30:00z');

    const fixture: ListItemProps = {
      category: 'category',
      description: 'description',
      intl: {
        formatDate: jest.fn(),
      },
    };

    const tree: ReactTestRendererJSON | null = renderer
      .create(
        <IntlProvider locale="en">
          <ListItemView {...fixture} />
        </IntlProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
