import React from "react";
import ReactPaginate from "react-paginate";
import jsonData from "./Duplicate.json";
import { useState } from "react";
import "./Allpage.css";

const Allpage = () => {
  const [datas, setdatas] = useState(jsonData.slice(0,45));
  const [page, setpage] = useState(0);

  const userperpage = 9;

  const pagevisted = page * userperpage;

  const displayUsers = datas

    .slice(pagevisted, pagevisted + userperpage)
    .map((user) => {
      return (
          <div className="col-lg-4 mt-3">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <h5 class="card-title">
                  <span>User id :</span>
                  {user.id}
                </h5>
                <p>
                  <span>Name : </span>
                  {user.name}
                </p>
                <p>
                  <span>Father_Name : </span>
                  {user.father_name}
                </p>
                <p>
                  <span>Email : </span>
                  {user.email}
                </p>
                <p>
                  <span>Desigination : </span>
                  {user.desigination}
                </p>
              </div>
              {/* <div className="icon">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-square-twitter"></i>
              </div> */}
            </div>
          </div>
      );
    });

  const pageCount = Math.ceil(datas.length / userperpage);

  const PageChange = ({ selected }) => {
    setpage(selected);
  };

  return (
    <div>
      <div className="container">
        <div className="row">{displayUsers}</div>
      </div>
      <ReactPaginate
        previousAriaLabel={"previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={PageChange}
        pageRangeDisplayed={5}
        containerClassName={"paginationBtttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeLinkClassName={"paginationActive"}
      />
    </div>
  );
};

export default Allpage;
