import React from "react";

const HeaderTask = (props: any) => {
  return (
    <li className="tasks-menu">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-bell-o"></i>
        <span className="label label-warning">10</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have 9 tasks</li>
        <li>
          <ul className="menu">
            <li>
              <a href="#">
                <h3>
                  Design some buttons
                  <small className="pull-right">20%</small>
                </h3>
                <div className="progress xs">
                  <div
                    className="progress-bar progress-bar-aqua"
                    role="progressbar"
                  >
                    <span className="sr-only">20% Complete</span>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>
                  Drop database
                  <small className="pull-right">100%</small>
                </h3>
                <div className="progress xs">
                  <div
                    className="progress-bar progress-bar-aqua"
                    role="progressbar"
                  >
                    <span className="sr-only">100% Complete</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="footer">
          <a href="#">View all tasks</a>
        </li>
      </ul>
    </li>
  );
}

export default HeaderTask;
