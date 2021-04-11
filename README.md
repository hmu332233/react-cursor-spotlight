# react-cursor-spotlight

It is a react component that implements the cursor spotlight effect on mousemove.

## Install
```bash
$ yarn add 
// or
$ npm install --save react-cursor-spotlight
```

## Usage

*basic*

```jsx
import { CursorSpotlight } from 'react-cursor-spotlight';

<CursorSpotlight>
  <div>Contents</div>
</CursorSpotlight>
```

*custom spotlight*

```jsx
import { CursorSpotlight } from 'react-cursor-spotlight';

const spotlightStyle = {

};

<CursorSpotlight spotlightStyle={spotlightStyle}>
  <div>Contents</div>
</CursorSpotlight>
```