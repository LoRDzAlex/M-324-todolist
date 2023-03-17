import "./App.css"
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Task from "./Task/Task";
import Designtest from "./Designtest";
import Car from "./Car/Car";

export default function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Task/>}/>
              <Route path="test" element={<Designtest/>}/>
              <Route path={"car"} element={<Car/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
