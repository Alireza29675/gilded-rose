const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

const breakpoints = {
  mobile: `(max-width: ${sizes.mobile}px)`,
  tablet: `(max-width: ${sizes.tablet}px)`,
  desktop: `(max-width: ${sizes.desktop}px)`,
};

export default breakpoints;