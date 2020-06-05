(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{223:function(e,t,a){e.exports=a(427)},228:function(e,t,a){},427:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(93),i=a.n(c),l=(a(228),a(7)),o=a(4),s=a(6),u=a(21),m=a(94),d=a.n(m),h=Object(s.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){a.getFirebase,d.a.auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){var t=e.signOut,a=e.profile;return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:t},"Log Out")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",className:"btn btn-floating pink lighten-1"},a.initials)))})),p=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signin"},"Log In")))},f=Object(s.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(h,{profile:a}):r.a.createElement(p,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo left"},"MarioPlan"),n))})),E=a(28),b=a(29),g=a(32),v=a(31),N=a(54),j=a.n(N),O=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},j()(e.time.toDate()).fromNow()))}))))))},y=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Created By: ",t.authorFirstName," ",t.authorLastname),r.a.createElement("p",{className:"grey-text"},j()(t.createdAt.toDate().toString()).calendar())))},C=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(l.b,{to:"/project/".concat(e.id),key:e.id},r.a.createElement(y,{project:e}))})))},S=a(19),w=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(C,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(O,{notifications:n})))):r.a.createElement(o.a,{to:"/signin"})}}]),a}(r.a.Component),R=Object(S.d)(Object(s.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(u.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w),k=Object(S.d)(Object(s.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(u.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.auth,a=e.project;return t.uid?a?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},a.title),r.a.createElement("p",null,a.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",a.authorFirstName," ",a.authorLastName),r.a.createElement("div",null,j()(a.createdAt.toDate().toString()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project....")):r.a.createElement(o.a,{to:"/signin"})})),x=a(30),F=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),I=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){n.getFirebase,d.a.auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(F),P=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.signUp(e.state)},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(o.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"text-text center"},a?r.a.createElement("p",null,a):null))))}}]),a}(n.Component),U=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e((a=t,function(e,t,n){n.getFirebase;var r=(0,n.getFirestore)();d.a.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){return r.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})})).then((function(){e({type:"SIGNUP_SUCCESS"})})).catch((function(t){e({type:"SIGNUP_ERROR",err:t})}))}));var a}}}))(P),A=a(17),_=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(b.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(o.a,{to:"/signin"})}}]),a}(n.Component),L=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(A.a)(Object(A.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(_),G=a(143),T=a(144);function z(){var e=Object(G.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return z=function(){return e},e}function D(){var e=Object(G.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return D=function(){return e},e}var B=function(){return r.a.createElement(J,null,r.a.createElement(W,null))},J=T.a.div(D()),W=T.a.div(z());function M(e){var t=e.children,a=Object(s.c)((function(e){return e.firebase.auth}));return Object(u.isLoaded)(a)?t:r.a.createElement(B,null)}var Z=function(){return r.a.createElement(l.a,null,r.a.createElement(M,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/project/:id",component:k}),r.a.createElement(o.b,{path:"/signin",component:I}),r.a.createElement(o.b,{path:"/signup",component:U}),r.a.createElement(o.b,{path:"/create",component:L}),r.a.createElement(o.b,{exact:!0,path:"/",component:R})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q={authError:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(A.a)(Object(A.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(A.a)(Object(A.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("Signout Success"),Object(A.a)({},e);case"SIGNUP_SUCCESS":return console.log("Signup Success"),Object(A.a)(Object(A.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("Signup Error"),Object(A.a)(Object(A.a)({},e),{},{authError:t.err.message});default:return e}},Q={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},$=a(55),H=Object(S.c)({auth:K,project:V,firestore:$.firestoreReducer,firebase:u.firebaseReducer}),X=a(222),Y=a(43),ee=a.n(Y);a(425),a(426);ee.a.initializeApp({apiKey:"AIzaSyDe8ZTjiZsaggv14C0jqGifVE4m87GUM5Q",authDomain:"marioplan-8b34e.firebaseapp.com",databaseURL:"https://marioplan-8b34e.firebaseio.com",projectId:"marioplan-8b34e",storageBucket:"marioplan-8b34e.appspot.com",messagingSenderId:"312417872634",appId:"1:312417872634:web:9df6c4d7792f40e6c9b743",measurementId:"G-P63R62M5BB"}),ee.a.firestore();var te=ee.a,ae=Object(S.e)(H,Object(S.d)(Object(S.a)(X.a.withExtraArgument({getFirestore:$.getFirestore,getFirebase:u.getFirebase})),Object($.reduxFirestore)(ee.a,te))),ne={firebase:ee.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:ae.dispatch,createFirestoreInstance:$.createFirestoreInstance};i.a.render(r.a.createElement(s.a,{store:ae},r.a.createElement(u.ReactReduxFirebaseProvider,ne,r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[223,1,2]]]);
//# sourceMappingURL=main.312fe1c9.chunk.js.map