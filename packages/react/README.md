# Slider React

A React wrapper for the slider library.

## Installation

```bash
npm install @slider/react
```

## Usage

Wrap your elements with the Slider container, provide a transition and you're good to go!.

```javascript
import { SliderContainer } from "@slider/react";
() => {
  return (
    <>
      <SliderContainer transition="default">
        <div>Slide1</div>
        <div>Slide2</div>
        <div>Slide3</div>
      </SliderContainer>
    </>
  );
};
```
