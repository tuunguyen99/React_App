"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Form_1 = require("./Form");
var Login = function (props) {
    var history = react_router_dom_1.useHistory();
    var _a = react_1.useState(""), result = _a[0], setResult = _a[1];
    var _b = react_1.useState(true), change = _b[0], setChange = _b[1];
    react_1.useEffect(function () {
        var hidden = document.getElementById("alert-login");
        if (result == "false") {
            if (hidden) {
                hidden.style.backgroundColor = "red";
                hidden.style.color = "white";
                hidden.style.display = "block";
                hidden.innerHTML = "Bạn nhập sai rồi";
            }
        }
        else {
            if (result == "short") {
                if (hidden) {
                    hidden.style.backgroundColor = "red";
                    hidden.style.color = "white";
                    hidden.style.display = "block";
                    hidden.innerHTML = "Vui lòng nhập đủ";
                }
            }
            else {
                if (hidden) {
                    hidden.style.display = "none";
                }
                if (result == "true") {
                    history.push("/blank");
                }
            }
        }
        var time = setTimeout(function () {
            if (hidden) {
                hidden.style.display = "none";
            }
        }, 1500);
        return function () {
            clearTimeout(time);
        };
    }, [change]);
    function handleTodoFormSubmit(formValues) {
        console.log("Form submit: ", formValues);
        // add new todo to current todo list
        if (formValues.user === "admin" && formValues.pass === "admin") {
            console.log("true");
            setResult("true");
        }
        else {
            if (formValues.user === "" || formValues.pass === "") {
                setResult("short");
            }
            else {
                console.log("false");
                setResult("false");
            }
        }
        setChange(!change);
    }
    return (react_1["default"].createElement("div", { className: "login-box" },
        react_1["default"].createElement("div", { className: "login-logo" },
            react_1["default"].createElement("a", { href: "../../index2.html" },
                react_1["default"].createElement("b", null, "Admin"),
                "LTE")),
        react_1["default"].createElement("div", { className: "login-box-body" },
            react_1["default"].createElement("p", { className: "login-box-msg" }, "Sign in to start your session"),
            react_1["default"].createElement(Form_1["default"], { onSubmit: handleTodoFormSubmit }),
            react_1["default"].createElement("div", { className: "alert alert-primary", role: "alert", id: "alert-login" }, "B\u1EA1n nh\u1EADp sai r\u1ED3i"),
            react_1["default"].createElement("div", { className: "social-auth-links text-center" },
                react_1["default"].createElement("p", null, "- OR -"),
                react_1["default"].createElement("a", { href: "#", className: "btn btn-block btn-social btn-facebook btn-flat" },
                    react_1["default"].createElement("i", { className: "fa fa-facebook" }),
                    " Sign in using Facebook"),
                react_1["default"].createElement("a", { href: "#", className: "btn btn-block btn-social btn-google btn-flat" },
                    react_1["default"].createElement("i", { className: "fa fa-google-plus" }),
                    " Sign in using Google+")),
            react_1["default"].createElement("a", { href: "#" }, "I forgot my password"),
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("a", { href: "register.html", className: "text-center" }, "Register a new membership"))));
};
exports["default"] = Login;
