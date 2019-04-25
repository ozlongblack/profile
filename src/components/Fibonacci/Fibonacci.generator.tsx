import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { FibonacciProps } from './Fibonacci.props';

const mapStateToProps: MapStateToProps<{}, {}, FibonacciProps> = (
  state: FibonacciProps,
): {} => ({
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<FibonacciProps>,
): Function {
  return connect(mapStateToProps)(BaseComponent);
}
