"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeaderMess = function (props) {
    return (react_1["default"].createElement("li", { className: "messages-menu" },
        react_1["default"].createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
            react_1["default"].createElement("i", { className: "fa fa-envelope-o" }),
            react_1["default"].createElement("span", { className: "label label-success" }, "4")),
        react_1["default"].createElement("ul", { className: "dropdown-menu" },
            react_1["default"].createElement("li", { className: "header" }, "You have 4 messages"),
            react_1["default"].createElement("li", null,
                react_1["default"].createElement("ul", { className: "menu" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#" },
                            react_1["default"].createElement("div", { className: "pull-left" },
                                react_1["default"].createElement("img", { src: "../../dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" })),
                            react_1["default"].createElement("h4", null,
                                "Support Team",
                                react_1["default"].createElement("small", null,
                                    react_1["default"].createElement("i", { className: "fa fa-clock-o" }),
                                    " 5 mins")),
                            react_1["default"].createElement("p", null, "Why not buy a new awesome theme?"))))),
            react_1["default"].createElement("li", { className: "footer" },
                react_1["default"].createElement("a", { href: "#" }, "See All Messages")))));
};
exports["default"] = HeaderMess;
