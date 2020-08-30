"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Fetch_1 = require("./Fetch");
var Table = function () {
    var _a = react_1.useState(1), page = _a[0], setPage = _a[1];
    return (react_1["default"].createElement("div", { className: "row" },
        react_1["default"].createElement("div", { className: "col-xs-12" },
            react_1["default"].createElement("div", { className: "box" },
                react_1["default"].createElement("div", { className: "box-body table-responsive no-padding" },
                    react_1["default"].createElement("table", { className: "table table-hover" },
                        react_1["default"].createElement("thead", null,
                            react_1["default"].createElement("tr", null,
                                react_1["default"].createElement("th", null, "ID"),
                                react_1["default"].createElement("th", null, "User"),
                                react_1["default"].createElement("th", null, "Date"),
                                react_1["default"].createElement("th", null, "Status"),
                                react_1["default"].createElement("th", null, "Email"))),
                        react_1["default"].createElement(Fetch_1["default"], { page: page }))),
                react_1["default"].createElement("div", { className: "box-footer clearfix" },
                    react_1["default"].createElement("ul", { className: "pagination pagination-sm no-margin pull-right" },
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { onClick: function () { return setPage(1); } }, "1")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { onClick: function () { return setPage(2); } }, "2")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { onClick: function () { return setPage(3); } }, "3")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { onClick: function () { return setPage(4); } }, "4")),
                        react_1["default"].createElement("li", null,
                            react_1["default"].createElement("a", { onClick: function () { return setPage(5); } }, "5"))))))));
};
exports["default"] = Table;
