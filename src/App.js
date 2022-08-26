import React from "react";
import "./App.css";
import Loginhome from "./components/formik/Loginhome";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Allpage from "./components/pagination/Allpage";
import Routespage from "./routes/Routespage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Routespage />}></Route>
          <Route path="/formik" element={<Loginhome />}></Route>
          <Route path="/pagination" element={<Allpage />}></Route>

        </Routes>
      </BrowserRouter>

      {/* <Loginhome /> */}
    </div>
  );
}

export default App;
