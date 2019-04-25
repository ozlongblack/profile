import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash/fp';
import { FibonacciProps } from './Fibonacci.props';

const debouncedHandleResize = (fn: () => void): (() => void) =>
  debounce(500)(fn);

const Fibonacci = (props: FibonacciProps): JSX.Element => {
  const theme = props.theme.data;
  const chartStyle = theme.get('chart');
  const ref = useRef<HTMLDivElement | null>(null);
  const d = useRef('');
  const rects = useRef<any>(null);
  const [path, setPath] = useState('');
  const [rect, setRect] = useState([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const resize = (node, update): void => {
    const width = node.offsetWidth;
    const height = node.offsetHeight;
    update({ width, height });
  };

  useEffect(function(): any {
    if (ref.current) {
      resize(ref.current, setSize);
    }

    const handleResize = (): void => {
      if (ref.current) {
        resize(ref.current, setSize);
      }
    };

    window.addEventListener('resize', debouncedHandleResize(handleResize));

    return (): void => {
      window.removeEventListener('resize', debouncedHandleResize(handleResize));
    };
  }, []);

  useEffect((): void => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;

      let cx = width * 0.726;
      let cy = height * 0.5;
      d.current = `m${cx},${cy}`;
      rects.current = [];

      const iterations = 13;
      const scale = width * 0.01815;

      let x = 0;
      let y = 1;
      let z = 1;
      let dx: number, dy: number, radius: number;

      for (let iterator = 2; iterator < iterations; iterator++) {
        radius = x * scale;
        dx = iterator % 4 < 2 ? radius : -radius;
        dy = (iterator + 1) % 4 < 2 ? radius : -radius;
        d.current = d.current + `a${radius},${radius} 0 0 0 ${dx},${dy}`;
        x = y;
        y = z;
        z = x + y;

        if (rects.current) {
          rects.current = [
            ...rects.current,
            <rect
              key={iterator}
              className="fibonacci__rect"
              x={dx < 0 ? cx + dx : cx}
              y={dy < 0 ? cy + dy : cy}
              width={Math.abs(dx)}
              height={Math.abs(dy)}
              style={{
                outlineColor: chartStyle.guideColor,
                stroke: chartStyle.guideColor,
              }}
            />,
          ];
        }

        cx += dx;
        cy += dy;
      }

      setPath(d.current);
      setRect(rects.current);
    }
  }, [size, chartStyle]);

  return (
    <div className="fibonacci" ref={ref}>
      <svg width={size.width} height={size.height}>
        {rect}
        <path
          className="fibonacci__path"
          d={path}
          style={{
            stroke: chartStyle.strokeColor,
          }}
        />
      </svg>
    </div>
  );
};

export default Fibonacci;
