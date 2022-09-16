import React from "react";
import ReactDOM from "react-dom";
import Editor from "./editor";

import "./styles.css";

// https://codesandbox.io/s/react-quill-image-upload-forked-3fove6?file=/src/editor.js

function App() {
  return (
    <div className="App">
      <h1>quill-image-uploader example</h1>
      <h2>React example</h2>
      <Editor />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
