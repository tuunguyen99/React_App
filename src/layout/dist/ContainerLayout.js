"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Table_1 = require("./Fetch/Table");
var ContainerLayout = function () {
    return (react_1["default"].createElement("div", { className: "content-wrapper" },
        react_1["default"].createElement("section", { className: "content-header" },
            react_1["default"].createElement("h1", null,
                "Simple Table",
                react_1["default"].createElement("small", null, "it all starts here")),
            react_1["default"].createElement("ol", { className: "breadcrumb" },
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" },
                        react_1["default"].createElement("i", { className: "fa fa-dashboard" }),
                        " Home")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("a", { href: "#" }, "Examples")),
                react_1["default"].createElement("li", { className: "active" }, "Simple Table"))),
        react_1["default"].createElement("section", { className: "content" },
            react_1["default"].createElement("div", { className: "box" },
                react_1["default"].createElement(Table_1["default"], null)))));
};
exports["default"] = ContainerLayout;
