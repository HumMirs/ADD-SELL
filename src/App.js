import { Provider } from "react-redux";
import "./App.css";
import Main from "./components/main/Main";
import store from "./components/redux/Store";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>{" "}
    </Provider>
  );
}

export default App;
