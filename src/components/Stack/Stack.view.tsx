import React, { ReactNode } from 'react';
import { Summary, Tool } from 'components';

const Stack = (): ReactNode => {
  return (
    <div className="stack">
      <Summary />
      <Tool />
    </div>
  );
};

export default Stack;
