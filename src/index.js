import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // Import global CSS here if you have any

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
