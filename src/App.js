import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditorView from "./pages/EditorView";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <EditorView />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
