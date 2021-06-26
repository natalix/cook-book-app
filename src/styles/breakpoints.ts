const breakpoints = {
  _md: '768px',
  _lg: '992px',
  _xl: '1200px',
};

const media = (pixels: string) => `@media (min-width: ${pixels})`;
const { _md, _lg, _xl } = breakpoints;

export const md = media(_md);
export const lg = media(_lg);
export const xl = media(_xl);
