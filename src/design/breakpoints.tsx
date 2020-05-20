import { css } from "styled-components";

export const xs = 0;
export const sm = 576;
export const md = 768;
export const lg = 992;
export const xl = 1200;

const mediaBreakpointUp = (size: any) => (styles: any) => css`
  @media (min-width: ${size}px) {
    ${styles}
  }
`;

export const breakpoints = {
  xs: `${xs}px`,
  sm: `${sm}px`,
  md: `${md}px`,
  lg: `${lg}px`,
  xl: `${xl}px`,
};

export const mediaBreakpointUpXs = (...args: any) => css(args);

export const mediaBreakpointUpSm = (...args: any) =>
  mediaBreakpointUp(sm)(css(args));
export const mediaBreakpointUpMd = (...args: any) =>
  mediaBreakpointUp(md)(css(args));
export const mediaBreakpointUpLg = (...args: any) =>
  mediaBreakpointUp(lg)(css(args));
export const mediaBreakpointUpXl = (...args: any) =>
  mediaBreakpointUp(xl)(css(args));