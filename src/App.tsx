import { Route, Routes } from "react-router";
import Benchmark from "./pages/benchmark/Benchmark.tsx";
import Pokedex from "./pages/pokedex/Pokedex.tsx";
import { PGlite } from "@electric-sql/pglite";
import { live } from "@electric-sql/pglite/live";
import { PGliteProvider } from "@electric-sql/pglite-react";
import './App.css'


const db = await PGlite.create({
    extensions: { live }
});

function App() {
  return (
      <PGliteProvider db={db}>
          <Routes>
              <Route index element={<Benchmark />} />
              <Route path="/pokedex" element={<Pokedex />} />
              <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
      </PGliteProvider>
  )
}

export default App
