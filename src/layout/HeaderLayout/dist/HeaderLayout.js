"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeaderMess_1 = require("./HeaderMess");
var HeaderTask_1 = require("./HeaderTask");
var HeaderLayout = function () {
    return (react_1["default"].createElement("header", { className: "main-header" },
        react_1["default"].createElement("a", { href: "index2.html", className: "logo" },
            react_1["default"].createElement("span", { className: "logo-mini" },
                react_1["default"].createElement("b", null, "A"),
                "LT"),
            react_1["default"].createElement("span", { className: "logo-lg" },
                react_1["default"].createElement("b", null, "Admin"),
                "LTE")),
        react_1["default"].createElement("nav", { className: "navbar navbar-static-top", role: "navigation" },
            react_1["default"].createElement("a", { href: "#", className: "sidebar-toggle", "data-toggle": "offcanvas", role: "button" },
                react_1["default"].createElement("span", { className: "sr-only" }, "Toggle navigation")),
            react_1["default"].createElement("div", { className: "navbar-custom-menu" },
                react_1["default"].createElement("ul", { className: "nav navbar-nav" },
                    react_1["default"].createElement(HeaderMess_1["default"], null),
                    react_1["default"].createElement(HeaderTask_1["default"], null),
                    react_1["default"].createElement("li", { className: "dropdown user user-menu" },
                        react_1["default"].createElement("a", { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown" },
                            react_1["default"].createElement("img", { src: "/dist/img/user2-160x160.jpg", className: "user-image", alt: "User Image" }),
                            react_1["default"].createElement("span", { className: "hidden-xs" }, "Alexander Pierce")),
                        react_1["default"].createElement("ul", { className: "dropdown-menu" },
                            react_1["default"].createElement("li", { className: "user-header" },
                                react_1["default"].createElement("img", { src: "%PUBLIC_URL%/dist/img/user2-160x160.jpg", className: "img-circle", alt: "User Image" }),
                                react_1["default"].createElement("p", null,
                                    "Alexander Pierce - Web Developer",
                                    react_1["default"].createElement("small", null, "Member since Nov. 2012"))),
                            react_1["default"].createElement("li", { className: "user-body" },
                                react_1["default"].createElement("div", { className: "col-xs-4 text-center" },
                                    react_1["default"].createElement("a", { href: "#" }, "Followers")),
                                react_1["default"].createElement("div", { className: "col-xs-4 text-center" },
                                    react_1["default"].createElement("a", { href: "#" }, "Sales")),
                                react_1["default"].createElement("div", { className: "col-xs-4 text-center" },
                                    react_1["default"].createElement("a", { href: "#" }, "Friends"))),
                            react_1["default"].createElement("li", { className: "user-footer" },
                                react_1["default"].createElement("div", { className: "pull-left" },
                                    react_1["default"].createElement("a", { href: "#", className: "btn btn-default btn-flat" }, "Profile")),
                                react_1["default"].createElement("div", { className: "pull-right" },
                                    react_1["default"].createElement("a", { href: "#", className: "btn btn-default btn-flat" }, "Sign out"))))),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("a", { href: "#", "data-toggle": "control-sidebar" },
                            react_1["default"].createElement("i", { className: "fa fa-gears" }))))))));
};
exports["default"] = HeaderLayout;
