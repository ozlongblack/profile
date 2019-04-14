import { NOT_FOUND } from 'redux-first-router';
import { RouterProps } from './Router.props';
import { FunctionComponent } from 'react';

const Router: FunctionComponent<RouterProps> = (
  props: RouterProps,
): JSX.Element =>
  (props.components[props.location.type] || props.components[NOT_FOUND])();

export default Router;
