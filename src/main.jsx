import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'

// 3 ประสาน
import { createStore } from "redux"; // สร้าง store
import { Provider } from "react-redux"; // ครอบ root component เพื่อให้คนอื่นเข้าถึง store
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/index.jsx";
// สร้าง store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
