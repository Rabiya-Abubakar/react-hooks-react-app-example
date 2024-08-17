import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

function App() {
  return (
    <div className="App">
      {/* Updated the h1 element to display "Now" */}
      <h1>Now</h1>

      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>

      {/* Ensure only one ExampleComponent is present */}
      <ExampleComponent />

      {/* Added the TestComponent below ExampleComponent */}
      <TestComponent />
    </div>
  );
}

export default App;
