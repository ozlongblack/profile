import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ToolProps } from './Tool.props';

const mapStateToProps: MapStateToProps<any, any, ToolProps> = (
  state: ToolProps,
): {} => ({
  profile: state.profile,
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<ToolProps>,
) {
  return connect(mapStateToProps)(BaseComponent);
}
