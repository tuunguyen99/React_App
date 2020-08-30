"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var Form = function (props) {
    function handleValueChange(e) {
        var _a;
        setValue(__assign(__assign({}, value), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    }
    function handleSubmit(e) {
        // Prevent reloading browser
        e.preventDefault();
        if (!onSubmit)
            return;
        var formValues = {
            user: value.name,
            pass: value.pass
        };
        onSubmit(formValues);
        console.log(e.target.name);
        // Reset form
        setValue({ name: "", pass: "" });
    }
    var onSubmit = props.onSubmit;
    var _a = react_1.useState({ name: "", pass: "" }), value = _a[0], setValue = _a[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("div", { className: "form-group has-feedback" },
                react_1["default"].createElement("input", { type: "text", value: value.name, onChange: handleValueChange, name: "name", className: "form-control", placeholder: "User" }),
                react_1["default"].createElement("span", { className: "glyphicon glyphicon-user form-control-feedback" })),
            react_1["default"].createElement("div", { className: "form-group has-feedback" },
                react_1["default"].createElement("input", { type: "password", value: value.pass, onChange: handleValueChange, name: "pass", className: "form-control", placeholder: "Password" }),
                react_1["default"].createElement("span", { className: "glyphicon glyphicon-lock form-control-feedback" })),
            react_1["default"].createElement("div", { className: "row" },
                react_1["default"].createElement("div", { className: "col-xs-8" },
                    react_1["default"].createElement("div", { className: "checkbox" },
                        react_1["default"].createElement("div", { className: "checkbox icheck" },
                            react_1["default"].createElement("label", null,
                                react_1["default"].createElement("input", { type: "checkbox" }),
                                " Remember Me")))),
                react_1["default"].createElement("div", { className: "col-xs-4" },
                    react_1["default"].createElement("button", { type: "submit", className: "btn btn-primary btn-block btn-flat" }, "Sign In"))))));
};
exports["default"] = Form;
