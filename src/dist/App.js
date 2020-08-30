"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("./layout/Layout");
var Login_1 = require("./login/Login");
var react_router_dom_1 = require("react-router-dom");
var App = function () {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_router_dom_1.Switch, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Login_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/blank", component: Layout_1["default"] }))));
};
exports["default"] = App;
