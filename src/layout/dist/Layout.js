"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ContainerLayout_1 = require("./ContainerLayout");
var FooterLayout_1 = require("./FooterLayout");
var HeaderLayout_1 = require("./HeaderLayout/HeaderLayout");
var SideBar_1 = require("./SideBar");
//import './scss/layout.scss';
var Layout = function () {
    return (react_1["default"].createElement("div", { id: "dashboard-container" },
        react_1["default"].createElement(HeaderLayout_1["default"], null),
        react_1["default"].createElement(SideBar_1["default"], null),
        react_1["default"].createElement(ContainerLayout_1["default"], null),
        react_1["default"].createElement(FooterLayout_1["default"], null)));
};
exports["default"] = Layout;
