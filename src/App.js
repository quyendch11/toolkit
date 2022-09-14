import List from "./components/list";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Edit from "./components/edit";
import Add from "./components/add";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
