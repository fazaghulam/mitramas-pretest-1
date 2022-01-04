import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Sidebar isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      <Dashboard setIsOpen={() => setIsOpen(true)} />
    </div>
  );
}

export default App;
