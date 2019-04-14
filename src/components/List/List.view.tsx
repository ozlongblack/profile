import React, {
  ComponentType,
  ReactElement,
  lazy,
  memo,
  Suspense,
  LazyExoticComponent,
  FunctionComponent,
} from 'react';
import { List } from 'immutable';
import { isEqual } from 'lodash/fp';
import { FormattedMessage } from 'react-intl';

import { ListData } from 'types/ListData';
import { ListProps } from './List.props';

const ListItem: LazyExoticComponent<ComponentType<any>> = lazy(
  (): Promise<any> => import('../ListItem/ListItem.view'),
);

const renderList: Function = (list: List<ListData>): any[] =>
  list
    .map(
      (item: ListData, index: number): JSX.Element => (
        <Suspense key={index} fallback={<div>Loading</div>}>
          <ListItem category={item.Category} description={item.Description} />
        </Suspense>
      ),
    )
    .toArray();

const ListComponent: FunctionComponent<ListProps> = (
  props: ListProps,
): JSX.Element => (
  <div>
    <FormattedMessage id="app.title">
      {(text): ReactElement => <h1>{text}</h1>}
    </FormattedMessage>
    <button
      onClick={(): void => {
        props.fetchList();
      }}
    >
      Get list
    </button>
    {renderList(props.list.data)}
  </div>
);

export default memo(
  ListComponent,
  (prevProps: ListProps, nextProps: ListProps): boolean =>
    isEqual(prevProps.list, nextProps.list),
);
