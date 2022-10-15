import { render } from "@testing-library/react";
import { SliderContainer } from "..";

describe("Slider Container", () => {
  it("should render", () => {
    const result = render(
      <SliderContainer>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </SliderContainer>
    );

    expect(result.container.innerHTML).toMatchSnapshot();
  });
});
