import { transitions } from "../transitions";
import { SliderService } from ".";

describe("Slider Service", () => {
  const container = document.createElement("div");
  const dummyTouchValues = {
    clientX: 0,
    clientY: 0,
    force: 0,
    pageX: 0,
    pageY: 0,
    radiusX: 0,
    radiusY: 0,
    screenX: 0,
    screenY: 0,
    identifier: 0,
    rotationAngle: 0,
    target: container,
  };

  it("should record touch distance on touch start", async () => {
    const service = new SliderService(container, () => [
      { type: "", value: "" },
    ]);
    const event = new TouchEvent("touchstart", {
      changedTouches: [{ ...dummyTouchValues, clientX: 12 }],
    });

    service.handleTouchStart(event);

    expect(SliderService.store).toBe(12);
  });

  it("should slide on touch move", async () => {
    const child1 = document.createElement("div");
    child1.style.width = "200px";
    container.appendChild(child1);
    const child2 = document.createElement("div");
    child2.style.width = "200px";
    container.appendChild(child2);

    const service = new SliderService(container, transitions.default);
    const touchMove = new TouchEvent("touchmove", {
      changedTouches: [{ ...dummyTouchValues, clientX: 30 }],
    });
    const touchStart = new TouchEvent("touchmove", {
      changedTouches: [{ ...dummyTouchValues, clientX: 12 }],
    });
    service.handleTouchStart(touchStart);
    service.handleTouchMove(touchMove);

    expect(child2.style.transform).toBe("translateX(-18px)");
    container.removeChild(child1);
    container.removeChild(child2);
  });

  it("should show next slide on touch end", async () => {
    const child1 = document.createElement("div");
    Object.defineProperties(child1, {
      offsetWidth: { value: 200 },
    });
    container.appendChild(child1);
    const child2 = document.createElement("div");
    Object.defineProperties(child2, {
      offsetWidth: { value: 200 },
    });
    container.appendChild(child2);

    const service = new SliderService(container, transitions.default);
    const touchStart = new TouchEvent("touchmove", {
      changedTouches: [{ ...dummyTouchValues, clientX: 180 }],
    });
    const touchEnd = new TouchEvent("touchend", {
      changedTouches: [{ ...dummyTouchValues, clientX: 12 }],
    } as any);

    Object.defineProperties(touchEnd, {
      currentTarget: { value: { offsetWidth: 200, dataset: { index: 0 } } },
    });
    child1.dispatchEvent(touchEnd);
    service.handleTouchStart(touchStart);
    service.handleTouchEnd(touchEnd);

    expect(child2.style.transform).toBe("translateX(-200px)");

    container.removeChild(child1);
    container.removeChild(child2);
  });

  it("should show previous slide on touch end", async () => {
    const child1 = document.createElement("div");
    Object.defineProperties(child1, {
      offsetWidth: { value: 200 },
    });
    container.appendChild(child1);
    const child2 = document.createElement("div");
    Object.defineProperties(child2, {
      offsetWidth: { value: 200 },
    });
    container.appendChild(child2);

    const service = new SliderService(container, transitions.default);
    const touchStart = new TouchEvent("touchmove", {
      changedTouches: [{ ...dummyTouchValues, clientX: 12 }],
    });
    const touchEnd = new TouchEvent("touchend", {
      changedTouches: [{ ...dummyTouchValues, clientX: 180 }],
    });

    Object.defineProperties(touchEnd, {
      currentTarget: { value: { offsetWidth: 200, dataset: { index: 1 } } },
    });
    child1.dispatchEvent(touchEnd);
    service.handleTouchStart(touchStart);
    service.handleTouchEnd(touchEnd);

    expect(child2.style.transform).toBe("translateX(0px)");

    container.removeChild(child1);
    container.removeChild(child2);
  });

  it("does not show next slide on touch end when slide percentage is less", async () => {
    const child1 = document.createElement("div");
    Object.defineProperties(child1, {
      offsetWidth: { value: 200 },
    });
    container.appendChild(child1);
    const child2 = document.createElement("div");
    Object.defineProperties(child2, {
      offsetWidth: { value: 200 },
    });
    container.appendChild(child2);

    const service = new SliderService(container, transitions.default);
    const touchStart = new TouchEvent("touchmove", {
      changedTouches: [{ ...dummyTouchValues, clientX: 10 }],
    });
    const touchEnd = new TouchEvent("touchend", {
      changedTouches: [{ ...dummyTouchValues, clientX: 12 }],
    } as any);

    Object.defineProperties(touchEnd, {
      currentTarget: { value: { offsetWidth: 200, dataset: { index: 0 } } },
    });
    child1.dispatchEvent(touchEnd);
    service.handleTouchStart(touchStart);
    service.handleTouchEnd(touchEnd);

    expect(child2.style.transform).toBe("translateX(0px)");

    container.removeChild(child1);
    container.removeChild(child2);
  });
});
