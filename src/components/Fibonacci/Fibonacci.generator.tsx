import { FunctionComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { FibonacciProps } from './Fibonacci.props';

const mapStateToProps: MapStateToProps<any, any, FibonacciProps> = (
  state: FibonacciProps,
): {} => ({
  theme: state.theme,
});

export default function generator(
  BaseComponent: FunctionComponent<FibonacciProps>,
) {
  return connect(mapStateToProps)(BaseComponent);
}
