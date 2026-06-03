// React Theme — extracted from https://ltx.io
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '24': string;
    '28': string;
    '32': string;
    '36': string;
    '40': string;
    '56': string;
    '75.2': string;
    '55.04': string;
    '28.8': string;
    '25.6': string;
    '21.92': string;
    '20.8': string;
 *   };
 *   space: {
    '1': string;
    '35': string;
    '38': string;
    '48': string;
    '64': string;
    '72': string;
    '80': string;
    '192': string;
    '208': string;
    '245': string;
    '312': string;
    '367': string;
    '392': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    md: string;
    lg: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#ff72b2",
    "secondary": "#3860be",
    "accent": "#468254",
    "background": "#0b0b0b",
    "foreground": "#000000",
    "neutral50": "#333333",
    "neutral100": "#f9f9f9",
    "neutral200": "#000000",
    "neutral300": "#999999",
    "neutral400": "#555555",
    "neutral500": "#1f1f24",
    "neutral600": "#0b0b0b",
    "neutral700": "#dddddd",
    "neutral800": "#7d87a0",
    "neutral900": "#f4f4f4"
  },
  "fonts": {
    "body": "'Arial', sans-serif"
  },
  "fontSizes": {
    "24": "24px",
    "28": "28px",
    "32": "32px",
    "36": "36px",
    "40": "40px",
    "56": "56px",
    "75.2": "75.2px",
    "55.04": "55.04px",
    "28.8": "28.8px",
    "25.6": "25.6px",
    "21.92": "21.92px",
    "20.8": "20.8px"
  },
  "space": {
    "1": "1px",
    "35": "35px",
    "38": "38px",
    "48": "48px",
    "64": "64px",
    "72": "72px",
    "80": "80px",
    "192": "192px",
    "208": "208px",
    "245": "245px",
    "312": "312px",
    "367": "367px",
    "392": "392px"
  },
  "radii": {
    "xs": "2px",
    "md": "8px",
    "xl": "20px",
    "full": "800px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px",
    "md": "rgb(199, 197, 199) 0px 0px 12px 2px",
    "lg": "rgba(0, 0, 0, 0.2) 0px 0px 18px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#ff72b2",
      "light": "hsl(333, 100%, 87%)",
      "dark": "hsl(333, 100%, 57%)"
    },
    "secondary": {
      "main": "#3860be",
      "light": "hsl(222, 54%, 63%)",
      "dark": "hsl(222, 54%, 33%)"
    },
    "background": {
      "default": "#0b0b0b",
      "paper": "#000000"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#333333"
    }
  },
  "typography": {
    "fontFamily": "'Times', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "43.2px"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px",
    "rgb(199, 197, 199) -3px -3px 5px -2px",
    "rgb(199, 197, 199) 0px 0px 12px 2px",
    "rgba(0, 0, 0, 0.2) 0px 0px 18px 0px"
  ]
};

export default theme;
