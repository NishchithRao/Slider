import { SliderService, transitions } from '@slider/core/src';
import './container.css';

const sliderContainerSelector = '.slider';

document
  .querySelectorAll(sliderContainerSelector)
  .forEach((element: HTMLDivElement) => {
    const service = new SliderService(element, transitions.default);
    Array.from(element.children as HTMLCollectionOf<HTMLElement>).forEach(
      (child, _i) => {
        child.dataset.index = _i.toString();
        child.ontouchmove = service.handleTouchMove;
        child.ontouchend = service.handleTouchEnd;
        child.ontouchstart = service.handleTouchStart;
      }
    );
  });
