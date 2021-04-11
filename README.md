# react-cursor-spotlight

![demo_gif](docs/demo.gif)

It is a react component that implements the cursor spotlight effect on mousemove.

[Demo](https://hmu332233.github.io/react-cursor-spotlight)

## Install
```bash
$ yarn add react-cursor-spotlight
// or
$ npm install --save react-cursor-spotlight
```

## Usage

**basic**

```jsx
import { CursorSpotlight } from 'react-cursor-spotlight';

<CursorSpotlight>
  <div>Contents</div>
</CursorSpotlight>
```

**custom spotlight**

```jsx
import { CursorSpotlight } from 'react-cursor-spotlight';

const spotlightStyle = {
  width: '50px',
  height: '50px',
  radius: '0%',
  backgroundColor: '#fff',
};

<CursorSpotlight spotlightStyle={spotlightStyle}>
  <div>Contents</div>
</CursorSpotlight>
```