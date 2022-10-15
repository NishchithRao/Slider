import { TouchEvent as ReactTouchEvent } from 'react';
import { getIndexNumber, moveToSlide } from '../utils/touch';

export type TransitonFn = (
  scrolledValue: number,
  totalWidth: number,
  elWidth: number,
  touchDistance: number
) => Array<{
  type: string;
  value: string;
  affectsOtherSlides?: boolean;
}>;

class SliderService {
  static container: HTMLDivElement | null;
  static store: number;
  static transitonFn: TransitonFn;

  constructor(container: HTMLDivElement | null, transitionFn: TransitonFn) {
    SliderService.container = container;
    SliderService.transitonFn = transitionFn;
  }

  public handleTouchEnd(
    ev: TouchEvent | ReactTouchEvent<HTMLDivElement>
  ): void {
    const index = getIndexNumber(ev);
    const touchDistance = SliderService.store - ev.changedTouches[0].clientX;
    const touchDistancePercent =
      (100 / (ev.currentTarget as HTMLDivElement).offsetWidth) *
      Math.abs(touchDistance);
    const isAllowed = touchDistance > 0 || index > 0;

    if (touchDistancePercent > 30 && isAllowed) {
      moveToSlide(
        SliderService.container,
        SliderService.transitonFn,
        touchDistance > 0 ? index + 1 : index - 1,
        0,
        true
      );
    } else {
      moveToSlide(
        SliderService.container,
        SliderService.transitonFn,
        index,
        0,
        true
      );
    }
  }

  public handleTouchMove(
    ev: TouchEvent | React.TouchEvent<HTMLDivElement>
  ): void {
    const currentTouchValue = ev.changedTouches[0].clientX;
    const index = getIndexNumber(ev);
    const touchDistance = SliderService.store - currentTouchValue;
    moveToSlide(
      SliderService.container,
      SliderService.transitonFn,
      index,
      touchDistance
    );
  }

  public handleTouchStart(
    ev: TouchEvent | React.TouchEvent<HTMLDivElement>
  ): void {
    SliderService.store = ev.changedTouches[0].clientX;
  }
}

export default SliderService;
