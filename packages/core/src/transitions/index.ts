import type { TransitonFn } from "../slider-service";
import { defaultTransition, fadeTransition } from "./default";

export const transitions: { [key: string]: TransitonFn } = {
  default: defaultTransition,
  fade: fadeTransition,
};
