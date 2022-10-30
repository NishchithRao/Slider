# Slider

Slider is a JavaScript library for adding sliders to your applications / websites.

## React

A React wrapper for the slider library.


### Installation

```bash
npm install @slider/react
```

import the styles in your project, preferably in the root of your project.

```javascript
import "@slider/react/slider-react.css";
```

### Usage

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

## Slider Vanilla

A Native JS / HTML wrapper for the slider library.

### Installation

Add the built JS file to your html with the `script` tag

```html
<script src="packages/vanilla/dist/index.js"></script>
```

Add the container css to your html

```html
<link rel="stylesheet" href="packages/vanilla/dist/index.js" />
```

### Usage

Add the `slider` class to your root element and you're good to go!

```html
<div class="slider">
    <div>Slide1</div>
    <div>Slide2</div>
    <div>Slide3</div>
</div>
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
