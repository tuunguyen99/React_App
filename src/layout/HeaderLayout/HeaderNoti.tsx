import React from "react";

const HeaderNoti = (props: any)  => {
  return (
    <div>
      <li className="notifications-menu">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
          <i className="fa fa-flag-o"></i>
          <span className="label label-danger">9</span>
        </a>
        <ul className="dropdown-menu">
          <li className="header">You have 10 notifications</li>
          <li>
            <ul className="menu">
              <li>
                <a href="#">
                  <i className="fa fa-users text-aqua"></i> 5 new members joined
                  today
                </a>
              </li>
            </ul>
          </li>
          <li className="footer">
            <a href="#">View all</a>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default HeaderNoti;
