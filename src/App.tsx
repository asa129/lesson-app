import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Top } from "./components/pages/Top";
import { Users } from "./components/pages/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/home" element={<Top />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
