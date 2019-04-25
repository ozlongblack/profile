import React from 'react';
import { map } from 'lodash/fp';
import { Logos } from 'consts';
import { Stack } from 'types/Stack';
import { ToolProps } from './Tool.props';

const renderStack = (
  stack: Stack[],
  style: Record<string, string>,
): JSX.Element[] =>
  map(
    (item: Stack): JSX.Element => {
      const Logo = Logos[item.name];

      return (
        <a
          key={item.name}
          className="tool__item"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ borderColor: style.borderColor }}
        >
          <div className="tool__item__logo">
            <Logo className="tool__item__logo__svg" />
          </div>
          <div className="tool__item__desc">
            <span
              className="tool__item__label"
              style={{ color: style.fontLabelColor }}
            >
              {item.label}
            </span>
            <span
              className="tool__item__type"
              style={{ color: style.fontDescriptionColor }}
            >
              {item.type}
            </span>
          </div>
        </a>
      );
    },
  )(stack);

const Tool = (props: ToolProps): JSX.Element => {
  const profile = props.profile.data;
  const stack = profile.get('stack');

  const theme = props.theme.data;
  const generalStyle = theme.get('general');

  return (
    <div className="tool">
      <h3 className="tool__header">Tech stack</h3>
      {renderStack(stack, generalStyle)}
    </div>
  );
};

export default Tool;
