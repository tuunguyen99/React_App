"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeaderTask = function (props) {
    return (react_1["default"].createElement("li", { className: "tasks-menu" },
        react_1["default"].createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
            react_1["default"].createElement("i", { className: "fa fa-bell-o" }),
            react_1["default"].createElement("span", { className: "label label-warning" }, "10")),
        react_1["default"].createElement("ul", { className: "dropdown-menu" },
            react_1["default"].createElement("li", { className: "header" }, "You have 9 tasks"),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("ul", { className: "menu" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#" },
                            react_1["default"].createElement("h3", null,
                                "Design some buttons",
                                react_1["default"].createElement("small", { className: "pull-right" }, "20%")),
                            react_1["default"].createElement("div", { className: "progress xs" },
                                react_1["default"].createElement("div", { className: "progress-bar progress-bar-aqua", role: "progressbar" },
                                    react_1["default"].createElement("span", { className: "sr-only" }, "20% Complete"))))),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#" },
                            react_1["default"].createElement("h3", null,
                                "Drop database",
                                react_1["default"].createElement("small", { className: "pull-right" }, "100%")),
                            react_1["default"].createElement("div", { className: "progress xs" },
                                react_1["default"].createElement("div", { className: "progress-bar progress-bar-aqua", role: "progressbar" },
                                    react_1["default"].createElement("span", { className: "sr-only" }, "100% Complete"))))))),
            react_1["default"].createElement("li", { className: "footer" },
                react_1["default"].createElement("a", { href: "#" }, "View all tasks")))));
};
exports["default"] = HeaderTask;
