import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddPalet from "./pages/AddPalet";






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddPalet />} />
      </Routes>

    </div>
  );
}

export default App;
