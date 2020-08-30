"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeaderNoti = function (props) {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("li", { className: "notifications-menu" },
            react_1["default"].createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                react_1["default"].createElement("i", { className: "fa fa-flag-o" }),
                react_1["default"].createElement("span", { className: "label label-danger" }, "9")),
            react_1["default"].createElement("ul", { className: "dropdown-menu" },
                react_1["default"].createElement("li", { className: "header" }, "You have 10 notifications"),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement("ul", { className: "menu" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { href: "#" },
                                react_1["default"].createElement("i", { className: "fa fa-users text-aqua" }),
                                " 5 new members joined today")))),
                react_1["default"].createElement("li", { className: "footer" },
                    react_1["default"].createElement("a", { href: "#" }, "View all"))))));
};
exports["default"] = HeaderNoti;
