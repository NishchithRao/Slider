import { TransitonFn } from "../slider-service";

export const defaultTransition: TransitonFn = (scrollValue: number) => {
  return [{ type: "transform", value: `translateX(-${scrollValue}px)` }];
};

export const fadeTransition: TransitonFn = (
  scrollValue: number,
  _,
  elWidth,
  touchDistance
) => {
  const normalisedValue = Math.abs(1 - Math.abs(touchDistance * 1.3) / elWidth);
  return [
    {
      type: "transform",
      value: `translateX(-${scrollValue}px)`,
    },
    {
      type: "opacity",
      value: String(normalisedValue),
      affectsOtherSlides: true,
    },
  ];
};
