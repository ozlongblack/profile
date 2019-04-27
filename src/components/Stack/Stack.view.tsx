import React from 'react';
import { Summary, Tool } from 'components';

const Stack = (): JSX.Element => {
  return (
    <div className="stack">
      <Summary />
      <Tool />
    </div>
  );
};

export default Stack;
