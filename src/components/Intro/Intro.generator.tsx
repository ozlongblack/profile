import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { IntroProps } from './Intro.props';

const mapStateToProps: MapStateToProps<{}, {}, IntroProps> = (
  state: IntroProps,
): {} => ({
  profile: state.profile,
  theme: state.theme,
});

export default function generator(
  BaseElement: FunctionComponent<IntroProps>,
): Function {
  return connect(mapStateToProps)(BaseElement);
}
