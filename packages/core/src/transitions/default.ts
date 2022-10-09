import { TransitonFn } from "../slider-service";

export const defaultTransition: TransitonFn = (scrollValue: number) => {
  const finalValue = scrollValue < 0 ? scrollValue : -1 * scrollValue;
  return [{ type: "transform", value: `translateX(${finalValue}px)` }];
};

export const fadeTransition: TransitonFn = (
  scrollValue: number,
  _,
  elWidth,
  touchDistance
) => {
  const finalValue = scrollValue < 0 ? scrollValue : -1 * scrollValue;
  const normalisedValue = Math.abs(1 - Math.abs(touchDistance * 1.3) / elWidth);
  return [
    {
      type: "transform",
      value: `translateX(-${finalValue}px)`,
    },
    {
      type: "opacity",
      value: String(normalisedValue),
      affectsOtherSlides: true,
    },
  ];
};
