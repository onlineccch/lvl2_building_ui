import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {Provider} from './components/ui/provider.jsx'
import {ThemeProvider} from 'next-themes'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);
