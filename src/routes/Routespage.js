import React from "react";
import { Link } from "react-router-dom";

const Routespage = () => {
  return (
    <div>
      <h1>LAST WEEK WHAT I DO</h1>
        <li>
          <Link to='/formik'>FORMIK</Link>
        </li>
        <br/>
        <li>
          <Link to='/pagination'>PAGINATION</Link>
        </li>
    </div>
  );
};

export default Routespage;
