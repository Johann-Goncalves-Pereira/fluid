/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    space: {
      // static
      0: "var(--space-static-0)",
      px: "var(--space-static-px)",
      // fluid
      "4xs": "var(--space-fluid-4xs)",
      "3xs": "var(--space-fluid-3xs)",
      "2xs": "var(--space-fluid-2xs)",
      xs: "var(--space-fluid-xs)",
      sm: "var(--space-fluid-sm)",
      md: "var(--space-fluid-md)",
      lg: "var(--space-fluid-lg)",
      xl: "var(--space-fluid-xl)",
      "2xl": "var(--space-fluid-2xl)",
      "3xl": "var(--space-fluid-3xl)",

      "4xs-3xs": "var(--space-fluid-4xs-3xs)",
      "3xs-2xs": "var(--space-fluid-3xs-2xs)",
      "2xs-xs": "var(--space-fluid-2xs-xs)",
      "xs-sm": "var(--space-fluid-xs-sm)",
      "sm-md": "var(--space-fluid-sm-md)",
      "md-lg": "var(--space-fluid-md-lg)",
      "lg-xl": "var(--space-fluid-lg-xl)",
      "xl-2xl": "var(--space-fluid-xl-2xl)",
      "2xl-3xl": "var(--space-fluid-2xl-3xl)",
    },
    fontSize: {
      0: "clamp(0.61rem, calc(0.64rem + -0.04vw), 0.63rem)",
      1: "clamp(0.76rem, calc(0.76rem + 0.02vw), 0.77rem)",
      2: "clamp(0.91rem, calc(0.89rem + 0.10vw), 0.96rem)",
      3: "clamp(1.09rem, calc(1.05rem + 0.21vw), 1.20rem)",
      4: "clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)",
      5: "clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem)",
      6: "clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem)",
      7: "clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem)",
      8: "clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem)",
      9: "clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem)",
    },
    extend: {},
  },
  plugins: [],
};
