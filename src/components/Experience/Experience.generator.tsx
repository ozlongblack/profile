import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { ExperienceProps } from './Experience.props';

const mapStateToProps: MapStateToProps<any, any, ExperienceProps> = (
  state: ExperienceProps,
): {} => ({
  profile: state.profile,
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<ExperienceProps>,
) {
  return connect(mapStateToProps)(BaseComponent);
}
