import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
