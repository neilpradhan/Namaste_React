import React from "react";
import ReactDOM from "react-dom";

const jsxHeading = <h1 className="head">Namaste React</h1>;

console.log(jsxHeading);

const elem  = <span> React Element </span>

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Neil Pradhan
  </h1>
);

const HeadingComponent = () => (
    <div id="container">
      <Title/>
      <h1 className="heading">Namaste React</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent/>);
