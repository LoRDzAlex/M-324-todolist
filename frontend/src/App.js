import "./App.css"
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apptest from "./App-test";
import Designtest from "./Designtest";

export default function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Apptest/>} />
              <Route path="test" element={<Designtest/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
