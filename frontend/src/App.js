import "./App.css"
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apptest from "./App-test";

export default function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Apptest/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
