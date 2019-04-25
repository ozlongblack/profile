import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { GeneralPageLayoutProps } from './GeneralPageLayout.props';

const mapStateToProps: MapStateToProps<{}, {}, GeneralPageLayoutProps> = (
  state: GeneralPageLayoutProps,
): {} => ({
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<GeneralPageLayoutProps>,
): Function {
  return connect(mapStateToProps)(BaseComponent);
}
