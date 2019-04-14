import React, { ComponentClass } from 'react';
import { injectIntl } from 'react-intl';
import { ListItemProps } from './ListItem.props';

const ListItem: ComponentClass<Pick<ListItemProps, any>> = injectIntl(
  (props: ListItemProps): JSX.Element => (
    <div>
      <div>
        <span>{props.intl.formatDate(new Date())}</span>
        <span>{props.category}</span>
      </div>
      <div>{props.description}</div>
    </div>
  ),
);

export default ListItem;
