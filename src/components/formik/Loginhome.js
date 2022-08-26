import React from "react";

import "./Login.css";
import Singnupform from "./Singnupform";

const Loginhome = () => {
  return (
    <div>
      <h3>Formik validation form</h3>
      <div
        className="container contain"
        
      >
        <div className="row">
          <div className="col-lg-8 mt-5">
            <img
              src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="image"
              title="image"
              className="photos"
            ></img>
          </div>
          <div className="col-lg-4 mt-5">
            <Singnupform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginhome;
