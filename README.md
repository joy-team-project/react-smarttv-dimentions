# react-smarttv-dimentions
**Description**

Keep the same aspect ratio on different devices 1280:720, scale fontsize for SmartTV (WebOS, Tizen...), using Typescript + React + HOC

**Installation**

```
npm i https://github.com/joy-team-project/react-smarttv-dimentions
```

**Using**

Add Provider

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { DimentionProvider } from "react-smarttv-dimentions";
...
ReactDOM.render(
  <DimentionProvider>
    <App />
  </DimentionProvider>,
  document.getElementById("root")
);
```

Add HOC

```javascript
import React from "react";
import {
  IDimentionContext,
  withDimentionContext
} from "react-smarttv-dimentions";

interface IState {}

interface IProps {
  dimentionContext?: IDimentionContext;
}

export class AppContainer extends React.Component<IProps, IState> {
  //...
  componentDidMount() {
    //...
    window.addEventListener("resize", this.resizeDocument);
  }

  componentWillUnmount() {
    //...
    window.removeEventListener("resize", this.resizeDocument);
  }

  private resizeDocument = () => {
    this.props.dimentionContext?.setAppDimention?.();
  };

  render(): React.ReactNode {
    const {width,height} = this.props.dimentionContext.dimention;
    return <div/>;
  }
}

export default withDimentionContext(AppContainer);
```

