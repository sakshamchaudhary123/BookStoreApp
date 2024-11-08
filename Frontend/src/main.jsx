import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
    <div className="dark:bg-slate-700 dark:text-white light:bg-white">
      <App />
    </div>
    </AuthProvider>
  </BrowserRouter>
);
