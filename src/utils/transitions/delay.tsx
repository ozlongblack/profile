import { ANIMATIONS } from 'consts';

const delay: Function = (
  ms: number = ANIMATIONS.transitionDuration,
): Promise<number> =>
  new Promise((resolve: Function): number => setTimeout(resolve, ms));

export default delay;
