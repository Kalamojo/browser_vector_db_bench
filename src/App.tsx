import { Route, Routes } from "react-router";
import Benchmark from "./pages/benchmark/Benchmark.tsx";
import Pokedex from "./pages/pokedex/Pokedex.tsx";
import './App.css'

function App() {
  return (
      <Routes>
          <Route index element={<Benchmark />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
  )
}

export default App
