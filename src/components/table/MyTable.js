import React from "react";
import MyTableHeader from "./MyTableHeader";
import MyTableBody from "./MyTableBody";
import DetailedTableBody from "./details/DetailedTableBody";

const MyTable = ({ id, headers, data }) => (
  <div className="container-fluid pt-4 px-4">
    <div className="row g-4">
      <div className="col-12">
        <div className="testimonial-item text-center">
          <div className="responsive">
            <table
              className="table table-hover table-bordered"
              id={id}
              sx="text-align:center"
            >
              <MyTableHeader headers={headers} />

              {id === "details" ? (
                <DetailedTableBody data={data} />
              ) : (
                <MyTableBody data={data} />
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MyTable;
