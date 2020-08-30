"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FooterLayout = function () {
    return (react_1["default"].createElement("footer", { className: "main-footer" },
        react_1["default"].createElement("div", { className: "pull-right hidden-xs" },
            react_1["default"].createElement("b", null, "Version"),
            " 2.4.18"),
        react_1["default"].createElement("strong", null,
            "Copyright \u00A9 2014-2019 ",
            react_1["default"].createElement("a", { href: "https://adminlte.io" }, "AdminLTE"),
            "."),
        " ",
        "All rights reserved."));
};
exports["default"] = FooterLayout;
