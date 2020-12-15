// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const bpu = {
  xs: 0,
  xsm: 321,
  sm: 576,
  md: 728,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1600,
  hd: 1900,
  xhd: 2040,
}

// Following break points based off this project
// https://github.com/evgenyrodionov/flexboxgrid2
const breakpoints = {
  xs: "0px",
  xsm: "321px",
  sm: "576px",
  md: "728px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
  xxxl: "1600px",
  hd: "1900px",
  xhd: "2040px",
}

export const bp = {
  xs: `(min-width: ${breakpoints.xs})`,
  xsm: `(min-width: ${breakpoints.xsm})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  xxl: `(min-width: ${breakpoints.xxl})`,
  xxxl: `(min-width: ${breakpoints.xxxl})`,
  hd: `(min-width: ${breakpoints.hd})`,
  xhd: `(min-width: ${breakpoints.hd})`,
}
