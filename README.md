# Slider

Slider is a JavaScript library for adding sliders to your applications / websites.

## Installation

### React

A React wrapper for the slider library.

```bash
npm install @slider/react
```

import the styles in your project, preferably in the root of your project.

```javascript
import "@slider/react/slider-react.css";
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

## Core

Core functions and servies for the `Slider` library.

You can use this package to create your own wrapper for your platform.

## Installation

```bash
npm install @slider/core
```

> More features like custom transitions and support for native html pages coming very soon!
