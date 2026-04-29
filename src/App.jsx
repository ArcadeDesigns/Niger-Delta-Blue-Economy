import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./index.css";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <div>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}
