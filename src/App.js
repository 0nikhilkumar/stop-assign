import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/main/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/form/Form";
import { useState } from "react";

function App() {

  const [Newdata, setNewData] = useState();
  
  return (
    <>
        <BrowserRouter>
          <div className="components">
            <Sidebar />
            <Home data={Newdata}/>
          </div>
          <Routes>
            <Route path="/form" exact element={<Form setNewData={setNewData} />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
