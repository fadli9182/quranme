import { Routes, Route } from "react-router-dom";
import "./App.css";
import AlBaqarah from "./component/AlBaqarah";
import AlFatihah from "./component/AlFatihah";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AlFatihah />} />
        <Route path="/2" element={<AlBaqarah />} />
      </Routes>
    </>
  );
}

export default App;
