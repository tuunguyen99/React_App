(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{21:function(e,a,l){e.exports=l(33)},26:function(e,a,l){},33:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),r=l(18),c=l.n(r),m=(l(26),l(6)),s=l(12),i=l.n(s),o=l(19),E=function(e){var a=e.page,l=Object(t.useState)([]),r=Object(m.a)(l,2),c=r[0],s=r[1],E=Object(t.useState)("https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users"),u=Object(m.a)(E,2),f=u[0],p=(u[1],Object(t.useState)([])),h=Object(m.a)(p,2),d=h[0],N=h[1];return Object(t.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var a,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(f);case 3:return a=e.sent,e.next=6,a.json();case 6:l=e.sent,s(l),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Failed to fetch post list: ",e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),Object(t.useEffect)((function(){N(c.slice(20*(a-1),20*a))}),[a,c]),n.a.createElement("tbody",null,d?d.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.id),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.createdAt.slice(0,10)),n.a.createElement("td",null,e.status?"on":"off"),n.a.createElement("td",null,e.email))})):n.a.createElement("p",null,"Loading"))},u=function(){var e=Object(t.useState)(1),a=Object(m.a)(e,2),l=a[0],r=a[1];return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"box-body table-responsive no-padding"},n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"ID"),n.a.createElement("th",null,"User"),n.a.createElement("th",null,"Date"),n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Email"))),n.a.createElement(E,{page:l}))),n.a.createElement("div",{className:"box-footer clearfix"},n.a.createElement("ul",{className:"pagination pagination-sm no-margin pull-right"},n.a.createElement("li",null,n.a.createElement("a",{onClick:function(){return r(1)}},"1")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(){return r(2)}},"2")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(){return r(3)}},"3")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(){return r(4)}},"4")),n.a.createElement("li",null,n.a.createElement("a",{onClick:function(){return r(5)}},"5")))))))},f=function(){return n.a.createElement("div",{className:"content-wrapper"},n.a.createElement("section",{className:"content-header"},n.a.createElement("h1",null,"Simple Table",n.a.createElement("small",null,"it all starts here")),n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-dashboard"})," Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Examples")),n.a.createElement("li",{className:"active"},"Simple Table"))),n.a.createElement("section",{className:"content"},n.a.createElement("div",{className:"box"},n.a.createElement(u,null))))},p=function(){return n.a.createElement("footer",{className:"main-footer"},n.a.createElement("div",{className:"pull-right hidden-xs"},n.a.createElement("b",null,"Version")," 2.4.18"),n.a.createElement("strong",null,"Copyright \xa9 2014-2019 ",n.a.createElement("a",{href:"https://adminlte.io"},"AdminLTE"),".")," ","All rights reserved.")},h=function(e){return n.a.createElement("li",{className:"messages-menu"},n.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},n.a.createElement("i",{className:"fa fa-envelope-o"}),n.a.createElement("span",{className:"label label-success"},"4")),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",{className:"header"},"You have 4 messages"),n.a.createElement("li",null,n.a.createElement("ul",{className:"menu"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("div",{className:"pull-left"},n.a.createElement("img",{src:"../../dist/img/user2-160x160.jpg",className:"img-circle",alt:"User Image"})),n.a.createElement("h4",null,"Support Team",n.a.createElement("small",null,n.a.createElement("i",{className:"fa fa-clock-o"})," 5 mins")),n.a.createElement("p",null,"Why not buy a new awesome theme?"))))),n.a.createElement("li",{className:"footer"},n.a.createElement("a",{href:"#"},"See All Messages"))))},d=function(e){return n.a.createElement("li",{className:"tasks-menu"},n.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},n.a.createElement("i",{className:"fa fa-bell-o"}),n.a.createElement("span",{className:"label label-warning"},"10")),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",{className:"header"},"You have 9 tasks"),n.a.createElement("li",null,n.a.createElement("ul",{className:"menu"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("h3",null,"Design some buttons",n.a.createElement("small",{className:"pull-right"},"20%")),n.a.createElement("div",{className:"progress xs"},n.a.createElement("div",{className:"progress-bar progress-bar-aqua",role:"progressbar"},n.a.createElement("span",{className:"sr-only"},"20% Complete"))))),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},n.a.createElement("h3",null,"Drop database",n.a.createElement("small",{className:"pull-right"},"100%")),n.a.createElement("div",{className:"progress xs"},n.a.createElement("div",{className:"progress-bar progress-bar-aqua",role:"progressbar"},n.a.createElement("span",{className:"sr-only"},"100% Complete"))))))),n.a.createElement("li",{className:"footer"},n.a.createElement("a",{href:"#"},"View all tasks"))))},N=function(){return n.a.createElement("header",{className:"main-header"},n.a.createElement("a",{href:"index2.html",className:"logo"},n.a.createElement("span",{className:"logo-mini"},n.a.createElement("b",null,"A"),"LT"),n.a.createElement("span",{className:"logo-lg"},n.a.createElement("b",null,"Admin"),"LTE")),n.a.createElement("nav",{className:"navbar navbar-static-top",role:"navigation"},n.a.createElement("a",{href:"#",className:"sidebar-toggle","data-toggle":"offcanvas",role:"button"},n.a.createElement("span",{className:"sr-only"},"Toggle navigation")),n.a.createElement("div",{className:"navbar-custom-menu"},n.a.createElement("ul",{className:"nav navbar-nav"},n.a.createElement(h,null),n.a.createElement(d,null),n.a.createElement("li",{className:"dropdown user user-menu"},n.a.createElement("a",{href:"#",className:"dropdown-toggle","data-toggle":"dropdown"},n.a.createElement("img",{src:"%PUBLIC_URL%/dist/img/user2-160x160.jpg",className:"user-image",alt:"User Image"}),n.a.createElement("span",{className:"hidden-xs"},"Alexander Pierce")),n.a.createElement("ul",{className:"dropdown-menu"},n.a.createElement("li",{className:"user-header"},n.a.createElement("img",{src:"%PUBLIC_URL%/dist/img/user2-160x160.jpg",className:"img-circle",alt:"User Image"}),n.a.createElement("p",null,"Alexander Pierce - Web Developer",n.a.createElement("small",null,"Member since Nov. 2012"))),n.a.createElement("li",{className:"user-body"},n.a.createElement("div",{className:"col-xs-4 text-center"},n.a.createElement("a",{href:"#"},"Followers")),n.a.createElement("div",{className:"col-xs-4 text-center"},n.a.createElement("a",{href:"#"},"Sales")),n.a.createElement("div",{className:"col-xs-4 text-center"},n.a.createElement("a",{href:"#"},"Friends"))),n.a.createElement("li",{className:"user-footer"},n.a.createElement("div",{className:"pull-left"},n.a.createElement("a",{href:"#",className:"btn btn-default btn-flat"},"Profile")),n.a.createElement("div",{className:"pull-right"},n.a.createElement("a",{href:"#",className:"btn btn-default btn-flat"},"Sign out"))))),n.a.createElement("li",null,n.a.createElement("a",{href:"#","data-toggle":"control-sidebar"},n.a.createElement("i",{className:"fa fa-gears"})))))))},g=function(){return n.a.createElement("div",{className:"main-sidebar",id:"side-bar"}," "," ",n.a.createElement("section",{className:"sidebar"}," "," ",n.a.createElement("div",{className:"user-panel"},n.a.createElement("div",{className:"pull-left image"},n.a.createElement("img",{src:"%PUBLIC_URL%/dist/img/user2-160x160.jpg",className:"img-circle",alt:"User Image"}))," ",n.a.createElement("div",{className:"pull-left info"},n.a.createElement("p",null," Alexander Pierce ")," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle text-success"}," ")," Online"))," ")," "," ",n.a.createElement("form",{action:"#",method:"get",className:"sidebar-form"},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",name:"q",className:"form-control",placeholder:"Search..."}),n.a.createElement("span",{className:"input-group-btn"},n.a.createElement("button",{type:"submit",name:"search",id:"search-btn",className:"btn btn-flat"}," ",n.a.createElement("i",{className:"fa fa-search"}," ")))," ")," ")," "," "," ",n.a.createElement("ul",{className:"sidebar-menu"},n.a.createElement("li",{className:"header"}," MAIN NAVIGATION ")," ",n.a.createElement("li",{className:"active treeview"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-dashboard"}," ")," ",n.a.createElement("span",null,"Dashboard ")," ",n.a.createElement("i",{className:"fa fa-angle-left pull-right"}," ")," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",{className:"active"}," ",n.a.createElement("a",{href:"/"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Dashboard v1")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"index2.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Dashboard v2")," ")," ")," ")," ",n.a.createElement("li",{className:"treeview"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-files-o"}," ")," ",n.a.createElement("span",null," Layout Options ")," ",n.a.createElement("span",{className:"label label-primary pull-right"}," 4 ")," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/layout/top-nav.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Top Navigation")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/layout/boxed.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Boxed")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/layout/fixed.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Fixed")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/layout/collapsed-sidebar.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Collapsed Sidebar")," ")," ")," ")," ",n.a.createElement("li",null,n.a.createElement("a",{href:"widgets.html"},n.a.createElement("i",{className:"fa fa-th"}," ")," ",n.a.createElement("span",null," Widgets ")," ",n.a.createElement("small",{className:"label pull-right bg-green"}," new ")," ")," ")," ",n.a.createElement("li",{className:"treeview"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-pie-chart"}," ")," ",n.a.createElement("span",null," Charts ")," ",n.a.createElement("i",{className:"fa fa-angle-left pull-right"}," ")," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/charts/chartjs.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," ChartJS")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/charts/morris.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Morris")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/charts/flot.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Flot")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/charts/inline.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Inline charts")," ")," ")," ")," ",n.a.createElement("li",{className:"treeview"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-laptop"}," ")," ",n.a.createElement("span",null," UI Elements ")," ",n.a.createElement("i",{className:"fa fa-angle-left pull-right"}," ")," ")," ",n.a.createElement("ul",{className:"treeview-menu menu-close",style:{display:"block"}})," ")," ",n.a.createElement("li",{className:"treeview"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-edit"}," ")," ",n.a.createElement("span",null,"Forms"),n.a.createElement("i",{className:"fa fa-angle-left pull-right"}," ")," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/forms/general.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," General Elements")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/forms/advanced.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Advanced Elements")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/forms/editors.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Editors")," ")," ")," ")," ",n.a.createElement("li",{className:"treeview"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-table"}," ")," ",n.a.createElement("span",null,"Tables"),n.a.createElement("i",{className:"fa fa-angle-left pull-right"}," ")," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/tables/simple.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Simple tables")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/tables/data.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Data tables")," ")," ")," ")," ",n.a.createElement("li",null,n.a.createElement("a",{href:"pages/calendar.html"},n.a.createElement("i",{className:"fa fa-calendar"}," ")," ",n.a.createElement("span",null,"Calendar"),n.a.createElement("small",{className:"label pull-right bg-red"}," 3 ")," ")," ")," ",n.a.createElement("li",null,n.a.createElement("a",{href:"pages/mailbox/mailbox.html"},n.a.createElement("i",{className:"fa fa-envelope"}," ")," ",n.a.createElement("span",null,"Mailbox"),n.a.createElement("small",{className:"label pull-right bg-yellow"}," 12 ")," ")," ")," ",n.a.createElement("li",{className:"treeview"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-folder"}," ")," ",n.a.createElement("span",null,"Examples"),n.a.createElement("i",{className:"fa fa-angle-left pull-right"}," ")," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/examples/invoice.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Invoice")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/examples/profile.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Profile")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/examples/login.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Login")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/examples/register.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Register")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/examples/lockscreen.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Lockscreen")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/examples/404.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," 404 Error")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/examples/500.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," 500 Error")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"pages/examples/blank.html"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Blank Page")," ")," ")," ")," ",n.a.createElement("li",{className:"treeview"},n.a.createElement("a",{href:"#"},n.a.createElement("i",{className:"fa fa-share"}," ")," ",n.a.createElement("span",null,"Multilevel"),n.a.createElement("i",{className:"fa fa-angle-left pull-right"}," ")," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",null," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Level One")," ")," ",n.a.createElement("li",null,n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Level One"," ",n.a.createElement("i",{className:"fa fa-angle-left pull-right"})," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",null," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Level Two")," ")," ",n.a.createElement("li",null,n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Level Two"," ",n.a.createElement("i",{className:"fa fa-angle-left pull-right"})," ")," ",n.a.createElement("ul",{className:"treeview-menu"},n.a.createElement("li",null," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Level Three")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Level Three")," ")," ")," ")," ")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o"}," ")," Level One")," ")," ")," ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"documentation/index.html"}," ",n.a.createElement("i",{className:"fa fa-book"}," ")," ",n.a.createElement("span",null,"Documentation")," ")),n.a.createElement("li",{className:"header"}," LABELS ")," ",n.a.createElement("li",null," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o text-red"}," ")," ",n.a.createElement("span",null,"Important")," ")),n.a.createElement("li",null," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o text-yellow"}," ")," ",n.a.createElement("span",null,"Warning")," ")),n.a.createElement("li",null," ",n.a.createElement("a",{href:"#"}," ",n.a.createElement("i",{className:"fa fa-circle-o text-aqua"}," ")," ",n.a.createElement("span",null,"Information")," ")))," ")," "," ")},b=function(){return n.a.createElement("div",{id:"dashboard-container"},n.a.createElement(N,null),n.a.createElement(g,null),n.a.createElement(f,null),n.a.createElement(p,null))},v=l(1),x=l(9),w=l(13),y=function(e){function a(e){i(Object(w.a)(Object(w.a)({},s),{},Object(x.a)({},e.target.name,e.target.value)))}var l=e.onSubmit,r=Object(t.useState)({name:"",pass:""}),c=Object(m.a)(r,2),s=c[0],i=c[1];return n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),l){var a={user:s.name,pass:s.pass};l(a),console.log(e.target.name),i({name:"",pass:""})}}},n.a.createElement("div",{className:"form-group has-feedback"},n.a.createElement("input",{type:"text",value:s.name,onChange:a,name:"name",className:"form-control",placeholder:"User"}),n.a.createElement("span",{className:"glyphicon glyphicon-user form-control-feedback"})),n.a.createElement("div",{className:"form-group has-feedback"},n.a.createElement("input",{type:"password",value:s.pass,onChange:a,name:"pass",className:"form-control",placeholder:"Password"}),n.a.createElement("span",{className:"glyphicon glyphicon-lock form-control-feedback"})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-8"},n.a.createElement("div",{className:"checkbox"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox"})," Remember Me"))),n.a.createElement("div",{className:"col-xs-4"},n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block btn-flat"},"Sign In")))))},k=function(e){var a=Object(v.f)(),l=Object(t.useState)(""),r=Object(m.a)(l,2),c=r[0],s=r[1],i=Object(t.useState)(!0),o=Object(m.a)(i,2),E=o[0],u=o[1];return Object(t.useEffect)((function(){var e=document.getElementById("alert-login");"false"==c?e&&(e.style.backgroundColor="red",e.style.color="white",e.style.display="block",e.innerHTML="Sai t\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u"):"short"==c?e&&(e.style.backgroundColor="red",e.style.color="white",e.style.display="block",e.innerHTML="Vui l\xf2ng nh\u1eadp \u0111\u1ee7"):(e&&(e.style.display="none"),"true"==c&&a.push("/blank"));var l=setTimeout((function(){e&&(e.style.display="none")}),1500);return function(){clearTimeout(l)}}),[E]),n.a.createElement("div",{className:"login-box"},n.a.createElement("div",{className:"login-logo"},n.a.createElement("a",{href:"../../index2.html"},n.a.createElement("b",null,"Admin"),"LTE")),n.a.createElement("div",{className:"login-box-body"},n.a.createElement("p",{className:"login-box-msg"},"Sign in to start your session"),n.a.createElement(y,{onSubmit:function(e){console.log("Form submit: ",e),"admin"===e.user&&"admin"===e.pass?(console.log("true"),s("true")):""===e.user||""===e.pass?(s("short"),""===e.user&&e.pass):(console.log("false"),s("false")),u(!E)}}),n.a.createElement("div",{className:"social-auth-links text-center"},n.a.createElement("p",null,"- OR -"),n.a.createElement("a",{href:"#",className:"btn btn-block btn-social btn-facebook btn-flat"},n.a.createElement("i",{className:"fa fa-facebook"})," Sign in using Facebook"),n.a.createElement("a",{href:"#",className:"btn btn-block btn-social btn-google btn-flat"},n.a.createElement("i",{className:"fa fa-google-plus"})," Sign in using Google+")),n.a.createElement("a",{href:"#"},"I forgot my password"),n.a.createElement("br",null),n.a.createElement("a",{href:"register.html",className:"text-center"},"Register a new membership")),n.a.createElement("div",{className:"alert alert-primary",role:"alert",id:"alert-login"}))},O=l(11),S=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Sorry, Page Not Found :(("))},j=function(){return n.a.createElement(O.a,null,n.a.createElement(v.c,null,n.a.createElement(v.a,{path:"/",exact:!0,component:k}),n.a.createElement(v.a,{path:"/blank",exact:!0,component:b}),n.a.createElement(v.a,{component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(t.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.5786069d.chunk.js.map