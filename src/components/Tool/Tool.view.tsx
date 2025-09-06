import React, { ReactNode } from 'react';
import { map } from 'lodash/fp';
import { Logos } from 'consts';
import { Stack } from 'types/Stack';
import { ToolProps } from './Tool.props';

const renderStack = (
  stack: Stack[],
  style: Record<string, string>,
): ReactNode[] =>
  map((item: Stack): ReactNode => {
    const Logo = Logos[item.name];

    return (
      <a
        key={item.name}
        className="tool__item"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
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
  })(stack);

const Tool = (props: ToolProps): ReactNode => {
  const profile = props.profile.data;
  const stack = profile.get('stack');

  const theme = props.theme.data;
  const generalStyle = theme.get('general');

  return (
    <div id="tool" className="tool">
      <h3
        className="tool__header"
        style={{ color: generalStyle.fontLabelColor }}
      >
        Tech stack
      </h3>
      {renderStack(stack, generalStyle)}
    </div>
  );
};

export default Tool;
