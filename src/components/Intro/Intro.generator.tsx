import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { IntroProps } from './Intro.props';

const mapStateToProps: MapStateToProps<any, any, IntroProps> = (
  state: IntroProps,
): {} => ({
  profile: state.profile,
  theme: state.theme,
});

export default function generator(
  BaseElement: FunctionComponent<IntroProps>,
) {
  return connect(mapStateToProps)(BaseElement);
}
