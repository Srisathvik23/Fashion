import React from "react";
import "./App.css";
import { BrowserRouter as Main } from "react-router-dom";
import ApplicationRoutes from "../src/routes/index";

function App() {
  return (
    <>
      <Main>
        <ApplicationRoutes />
      </Main>
    </>
  );
}

export default App;
