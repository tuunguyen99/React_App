import React, { useEffect, useState } from "react";
import Fetch from "./Fetch";

const Table = () => {
  const [page, setPage] = useState(1);
  
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="box">
          <div className="box-body table-responsive no-padding">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Email</th>
                </tr>
              </thead>
              
                <Fetch page={page}/>
              
            </table>
          </div>

          <div className="box-footer clearfix">
            <ul className="pagination pagination-sm no-margin pull-right">
              <li>
                <a onClick={() => setPage(1)}>1</a>
              </li>
              <li>
                <a onClick={() => setPage(2)}>2</a>
              </li>
              <li>
                <a onClick={() => setPage(3)}>3</a>
              </li>
              <li>
                <a onClick={() => setPage(4)}>4</a>
              </li>
              <li>
                <a onClick={() => setPage(5)}>5</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
