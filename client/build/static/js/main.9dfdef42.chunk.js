(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(22),i=a.n(s),o=(a(67),a(2)),r=a(10),c=a(14),l=a(16),d=a(15),u=(a.p,a(68),a(41)),m=a.n(u),j=a(24),h=a(26),b=a(42),p=a(19),g=a(28),v=a.n(g),x="https://berlincito.herokuapp.com",O=new function e(){var t=this;Object(r.a)(this,e),this.signup=function(e,a,n){return t.service.post(x+"/api/auth/signup",{username:e,password:a,email:n}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},this.login=function(e,a){return console.log("Logging in"),t.service.post(x+"/api/auth/login",{username:e,password:a}).then((function(e){return console.log(e.data),e.data})).catch((function(e){return e}))},this.logout=function(){return console.log("Logging out"),t.service.post(x+"/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e}))},this.loggedin=function(){return console.log("checking login"),t.service.get(x+"/api/auth/loggedin").then((function(e){return console.log(e.data),e.data}))},this.service=v.a.create({baseURL:x,withCredentials:!0})},f=a(0),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).logoutUser=function(){O.logout().then((function(){e.props.getUser(null,!1)}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.userData,n=t.userIsLoggedIn;return n?Object(f.jsx)("div",{className:m.a.Navbar,"data-testid":"Navbar",children:Object(f.jsx)(j.a,{expand:"sm",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(h.a,{href:"/",children:"Berlincito"}),Object(f.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(f.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(f.jsxs)(p.a,{className:"me-auto",children:[Object(f.jsx)(p.a.Link,{href:"Blog",children:"Blog"}),Object(f.jsx)(p.a.Link,{href:"Events",children:"Eventos"}),Object(f.jsx)(p.a.Link,{href:"Places",children:"Lugares"})]}),Object(f.jsxs)(p.a,{className:"ml-auto",children:[n&&Object(f.jsxs)("li",{children:["Welcome, ",a.name]}),Object(f.jsx)("button",{onClick:function(){return e.logoutUser()},children:"Logout"})]})]})]})})}):Object(f.jsx)("div",{className:m.a.Navbar,"data-testid":"Navbar",children:Object(f.jsx)(j.a,{expand:"sm",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(h.a,{href:"/",children:"Berlincito"}),Object(f.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(f.jsxs)(j.a.Collapse,{id:"responsive-navbar-nav",children:[Object(f.jsxs)(p.a,{className:"me-auto",children:[Object(f.jsx)(p.a.Link,{href:"Blog",children:"Blog"}),Object(f.jsx)(p.a.Link,{href:"Events",children:"Eventos"}),Object(f.jsx)(p.a.Link,{href:"Places",children:"Lugares"})]}),Object(f.jsx)(p.a,{className:"ml-auto",children:Object(f.jsx)(p.a.Link,{href:"Login",children:"Log in"})})]})]})})})}}]),a}(n.Component),N=a(34),L=a.n(N),C=a(8),k=a(43),w=a.n(k),_="https://berlincito.herokuapp.com",S=new function e(){var t=this;Object(r.a)(this,e),this.postEvent=function(e,a,n,s,i){return t.service.post(_+"/api/event",{title:e,description:n,organizer:a,date:s,address:i}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},this.getEvents=function(){return t.service.get(_+"/api/events").then((function(e){return e.data})).catch((function(e){return e.response.data}))},console.log("https://berlincito.herokuapp.com"),this.service=v.a.create({baseURL:_,withCredentials:!0})},q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={title:"",organizer:"",description:"",address:"",date:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.title,s=a.organizer,i=a.description,o=a.address,r=a.date;S.postEvent(n,s,i,r,o).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;console.log(n),console.log(s),e.setState(Object(C.a)({},n,s))},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:w.a.addEvent,"data-testid":"AddEvent",children:Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(f.jsx)("h3",{className:w.a.addEvent,children:"Agregar Evento"}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{children:"Titulo"}),Object(f.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleChange})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{children:"Organizador"}),Object(f.jsx)("input",{type:"text",name:"organizer",value:this.state.organizer,onChange:this.handleChange})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{children:"Descripci\xf3n"}),Object(f.jsx)("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{children:"Direcci\xf3n"}),Object(f.jsx)("input",{type:"text",name:"address",value:this.state.address,onChange:this.handleChange})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("label",{children:"Fecha"}),Object(f.jsx)("input",{type:"text",name:"date",value:this.state.date,onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Agregar Evento"})]})})})}}]),a}(n.Component),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={listOfEvents:[]},e.getAllEvents=function(){S.getEvents().then((function(t){console.log(t),void 0!==t?e.setState({listOfEvents:t}):console.log(t)})).catch((function(e){console.log("an error happened"),console.log(e)}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getAllEvents()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:L.a.Events,"data-testid":"Events",children:[Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row row-md",children:this.state.listOfEvents.map((function(e){return Object(f.jsxs)("div",{className:L.a.eventContainer,children:[Object(f.jsx)("h3",{className:L.a.eventTitle,children:e.title}),Object(f.jsxs)("p",{children:["Organizado por: ",e.organizer]}),Object(f.jsx)("p",{children:e.description}),Object(f.jsxs)("p",{children:["Donde: ",e.address]}),Object(f.jsxs)("p",{children:["Cuando: ",e.date]})]},e._id)}))})}),Object(f.jsx)("div",{className:"row row-md-6 justify-content-center",children:Object(f.jsx)("div",{className:"col col-md-4",children:Object(f.jsx)(q,{getData:function(){return e.getAllEvents()}})})})]})}}]),a}(n.Component);E.defaultProps={};var A=E,B=a(56),P=a.n(B),T=function(){return Object(f.jsx)("div",{className:P.a.Places,"data-testid":"Places",children:Object(f.jsx)("p",{children:"Coming soon!"})})};T.defaultProps={};var U=T,F=a(57),z=a.n(F),D=a(58),I=a.n(D),J=function(){return Object(f.jsx)("div",{className:I.a.ContentContainer,"data-testid":"ContentContainer",children:Object(f.jsx)("div",{className:"container mt-5",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col-lg-8",children:Object(f.jsxs)("article",{children:[Object(f.jsxs)("header",{className:"mb-4",children:[Object(f.jsx)("h1",{className:"fw-bolder mb-1",children:"Berlincito is live!"}),Object(f.jsx)("div",{className:"text-muted fst-italic mb-2",children:"Posted on January 1, 2021 by Nelly"}),Object(f.jsx)("a",{className:"badge bg-secondary text-decoration-none link-light",href:"#!",children:"Housekeeping"}),Object(f.jsx)("a",{className:"badge bg-secondary text-decoration-none link-light",href:"#!",children:"English"})]}),Object(f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"})]})})})})})};J.defaultProps={};var R=J,W=a(59),H=a.n(W),M=function(){return Object(f.jsxs)("div",{className:H.a.Sidebar,"data-testid":"Sidebar",children:[Object(f.jsx)("h5",{children:"Tambi\xe9n te puede interesar"}),Object(f.jsxs)("ol",{className:"justify-content-md-start",children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Berlincito"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Latino Food Street"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Eventos"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",children:"Lugares"})})]})]})};M.defaultProps={};var K=M,Q=a(102),G=a(103),V=function(){return Object(f.jsx)("div",{className:z.a.Blog,"data-testid":"Blog",children:Object(f.jsxs)(b.a,{className:"d-flex justify-content-md-center",children:[Object(f.jsx)(Q.a,{className:"col col-md-8",children:Object(f.jsx)(G.a,{children:Object(f.jsx)(R,{})})}),Object(f.jsx)(Q.a,{className:"col col-md-4 offset-8 position-fixed",children:Object(f.jsx)(K,{})})]})})};V.defaultProps={};var X=V,Y=a(60),Z=a.n(Y),$=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,s=a.password;console.log(n),console.log(s),O.login(n,s).then((function(t){console.log(t),e.setState({name:"",password:""}),e.props.getUser(t,!0)})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(C.a)({},n,s))},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:Z.a.Login,"data-testid":"Login",children:Object(f.jsx)("div",{className:"row justify-content-md-center",children:Object(f.jsx)("div",{className:"col col-md-4 p-4 m-1",children:Object(f.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(f.jsx)("h3",{children:"Log in"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Name"}),Object(f.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Password"}),Object(f.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(f.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(f.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"}),Object(f.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(f.jsx)("a",{href:"#",children:"password?"})]}),Object(f.jsx)("a",{href:"/signup",children:"Not a member yet? Sign up here."})]})})})})}}]),a}(n.Component),ee=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",password:"",email:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(C.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,s=a.password,i=a.email;O.signup(n,s,i).then((function(t){console.log(t),e.setState({message:t.message,name:"",password:"",email:""}),e.props.getUser(t,!0)}))},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"container justify-content-center",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Signup"}),Object(f.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(f.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(f.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange}),Object(f.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(f.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(f.jsx)("button",{type:"submit",children:"Signup"}),this.state.message&&Object(f.jsx)("h3",{children:this.state.message})]})]})})}}]),a}(n.Component),te=a(27),ae=a.n(te),ne=a.p+"static/media/blog.22a1353e.png",se=a.p+"static/media/events.e47040da.png",ie=a.p+"static/media/places.0cdc577d.png",oe=a(105),re=a(104),ce=function(){return Object(f.jsx)("div",{className:ae.a.LandingPage,"data-testid":"LandingPage",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col col-sm-4",children:Object(f.jsxs)(oe.a,{className:ae.a.landingCard,children:[Object(f.jsx)(oe.a.Img,{variant:"top",src:ne}),Object(f.jsxs)(oe.a.Body,{children:[Object(f.jsx)(oe.a.Title,{children:"Blog"}),Object(f.jsx)(oe.a.Text,{children:"Toda la informaci\xf3n para iniciar tu vida en Berl\xedn y no morir en el intento."}),Object(f.jsx)(re.a,{variant:"primary",href:"/blog",children:"Acceder"})]})]})}),Object(f.jsx)("div",{className:"col col-sm-4",children:Object(f.jsxs)(oe.a,{className:ae.a.landingCard,children:[Object(f.jsx)(oe.a.Img,{variant:"top",src:se}),Object(f.jsxs)(oe.a.Body,{children:[Object(f.jsx)(oe.a.Title,{children:"Eventos"}),Object(f.jsx)(oe.a.Text,{children:"Ent\xe9rate de todos los eventos latinos en Berl\xedn y sus alrededores."}),Object(f.jsx)(re.a,{variant:"primary",href:"/events",children:"Acceder"})]})]})}),Object(f.jsx)("div",{className:"col col-sm-4",children:Object(f.jsxs)(oe.a,{className:ae.a.landingCard,children:[Object(f.jsx)(oe.a.Img,{variant:"top",src:ie}),Object(f.jsxs)(oe.a.Body,{children:[Object(f.jsx)(oe.a.Title,{children:"Lugares"}),Object(f.jsx)(oe.a.Text,{children:"Encuentra los mejores lugares latinos en Berl\xedn."}),Object(f.jsx)(re.a,{variant:"primary",href:"/places",children:"Acceder"})]})]})})]})})};ce.defaultProps={};var le=ce,de=a(61),ue=a.n(de),me=a.p+"static/media/berlinSkyline.8220dce3.png",je=function(){return Object(f.jsx)("div",{className:ue.a.FooterBerlincito,"data-testid":"FooterBerlincito",children:Object(f.jsx)("img",{src:me,alt:"Berlin skyline vector graphic"})})};je.defaultProps={};var he=je,be=a(7),pe=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoggedIn:!1,user:null},e.getTheUser=function(t,a){e.setState({user:t,isLoggedIn:a})},e.fetchUser=function(){null===e.state.user&&O.loggedin().then((function(t){console.log("User logged in"),e.setState({user:t,isLoggedIn:!0})})).catch((function(t){console.log("No user logged in"),e.setState({user:null,isLoggedIn:!1})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(y,{userData:this.state.user,userIsLoggedIn:this.state.isLoggedIn,getUser:this.getTheUser}),Object(f.jsxs)(be.c,{children:[Object(f.jsx)(be.a,{exact:!0,path:"/",component:le}),Object(f.jsx)(be.a,{exact:!0,path:"/blog",component:X}),Object(f.jsx)(be.a,{exact:!0,path:"/events",component:A}),Object(f.jsx)(be.a,{exact:!0,path:"/places",component:U}),Object(f.jsx)(be.a,{exact:!0,path:"/login",render:function(t){return Object(f.jsx)($,Object(o.a)(Object(o.a)({},t),{},{getUser:e.getTheUser}))}}),Object(f.jsx)(be.a,{exact:!0,path:"/signup",render:function(t){return Object(f.jsx)(ee,Object(o.a)(Object(o.a)({},t),{},{getUser:e.getTheUser}))}})]}),Object(f.jsx)(he,{})]})}}]),a}(n.Component),ge=a(39),ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,106)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),s(e),i(e),o(e)}))};a(99);i.a.render(Object(f.jsx)(ge.a,{children:Object(f.jsx)(pe,{})}),document.getElementById("root")),ve()},27:function(e,t,a){e.exports={LandingPage:"LandingPage_LandingPage__29u9g",landingCard:"LandingPage_landingCard__3tnHb"}},34:function(e,t,a){e.exports={Events:"Events_Events__1NNai",eventContainer:"Events_eventContainer__O3iyf",eventTitle:"Events_eventTitle__1h2Tk"}},41:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__1IxrI"}},43:function(e,t,a){e.exports={addEvent:"AddEvent_addEvent__zPmhh",btn:"AddEvent_btn__1OQUt"}},56:function(e,t,a){e.exports={Places:"Places_Places__2WDlf"}},57:function(e,t,a){e.exports={Blog:"Blog_Blog__3BWLL"}},58:function(e,t,a){e.exports={ContentContainer:"ContentContainer_ContentContainer__1wq93"}},59:function(e,t,a){e.exports={Sidebar:"Sidebar_Sidebar__2ajNT"}},60:function(e,t,a){e.exports={Login:"Login_Login__1ujut"}},61:function(e,t,a){e.exports={FooterBerlincito:"FooterBerlincito_FooterBerlincito__2Keg0"}},67:function(e,t,a){},68:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.9dfdef42.chunk.js.map