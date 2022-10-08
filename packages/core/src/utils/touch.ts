import { TransitonFn } from "../slider-service/SliderService";

/**
 * gets the scrolled value of the the current of the element swiped
 * @param ref The swiped element
 * @param index The index of the elment to be shown
 * @returns The total scrolled value
 */
export const getElPosition = (ref: HTMLDivElement | null, index: number) => {
  const children = Array.from(
    ref?.children as HTMLCollectionOf<HTMLDivElement>
  );
  let scrolledValue = 0;

  if (children) {
    children.every((el, i) => {
      if (i < index) {
        scrolledValue += el.offsetWidth;
        return true;
      }
      return false;
    });
  }

  return scrolledValue;
};

/**
 * Slides to an element
 * @param ref the element which is swiped
 * @param getStyle The transition style that will be applied
 * @param index index of the slide that needs to be swiped to
 * @param touchValue the touch distance swiped
 */
export const moveToSlide = (
  ref: HTMLDivElement | null,
  getStyle: TransitonFn,
  index: number,
  touchValue: number = 0,
  resetStyle?: boolean
) => {
  if (ref) {
    const children = Array.from(
      (ref.children as HTMLCollectionOf<HTMLDivElement>) || []
    );
    const finalIndex =
      index <= 0 ? 0 : index >= children.length ? index - 1 : index;

    const totalWidth = getElPosition(ref, children.length - 1);

    children.forEach((child, _i) => {
      const scrolledValue = getElPosition(ref, finalIndex) + touchValue;
      getStyle(
        scrolledValue,
        totalWidth,
        child.offsetWidth,
        touchValue
      ).forEach(({ type, value, affectsOtherSlides }) => {
        if (affectsOtherSlides) {
          if (!resetStyle) children[index].style[type] = value;
          child.style[type] = "";
        } else {
          child.style[type] = value;
        }
      });
    });
  }
};

/**
 *
 * @param ev Touch event
 * @returns the index of the element
 */
export const getIndexNumber = (
  ev: TouchEvent | React.TouchEvent<HTMLDivElement>
) => parseInt((ev?.currentTarget as HTMLDivElement)?.dataset.index || "0");
