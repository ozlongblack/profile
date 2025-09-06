import { NOT_FOUND } from 'redux-first-router';
import { RouterProps } from './Router.props';
import { FunctionComponent, ReactNode } from 'react';

const Router: FunctionComponent<RouterProps> = (
  props: RouterProps,
): ReactNode => {
  console.log(props.location.type);
  return (
    props.components[props.location.type] || props.components[NOT_FOUND]
  )();
};

export default Router;
