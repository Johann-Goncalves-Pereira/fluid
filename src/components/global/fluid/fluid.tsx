import {
  component$,
  useClientEffect$,
  useStylesScoped$,
} from "@builder.io/qwik";

import styles from "./fluid.scss?inline";

// @ts-ignore
//? https://github.com/jordienr/whatamesh
import { Gradient } from "./gradient";

export const Fluid = component$(() => {
  useStylesScoped$(styles);

  useClientEffect$(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  });

  return <canvas id="gradient-canvas"></canvas>;
});
