(this["webpackJsonpwebtoon-management-app"]=this["webpackJsonpwebtoon-management-app"]||[]).push([[0],{186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),s=n.n(c),r=n(99),i=n.n(r),o=n(5),l=n(36);n(107),n(188);l.a.initializeApp({apiKey:"AIzaSyAzTUew7lGYDOBEmft26O1duJPiB8ib-80",authDomain:"web-management-app-f9d1d.firebaseapp.com",projectId:"web-management-app-f9d1d",storageBucket:"web-management-app-f9d1d.appspot.com",messagingSenderId:"889320041040",appId:"1:889320041040:web:3cad4a5e772be6da143f55"});var u=l.a,j=l.a.auth(),b=l.a.firestore(),d=n(7),O=n.n(d),f=n(25),m=n(22),h=n(14),p=n(30),x=[0,1,2,3,4],v=function(){return Object(a.jsx)("div",{id:"alt-navigation-mainscreen",children:Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"webtoon_site__pages",children:[Object(a.jsx)("div",{className:"webtoon_site__page",children:Object(a.jsx)("div",{className:"webttoon_site__page-inner",children:Object(a.jsx)(p.b,{to:"/naver",children:Object(a.jsx)("img",{src:"https://play-lh.googleusercontent.com/yEh_3Tn28fJWRW6q9GkiUjl6YKNHAllQLEeQ63gS4rF5hpobUbic0jq4bS6BfP80g1E",alt:"naver-webtoon",title:"naver-webtoon"})})})}),x.map((function(e,t){return Object(a.jsx)("div",{className:"webtoon_site__page",children:Object(a.jsx)("div",{className:"webttoon_site__page-inner",children:Object(a.jsx)("div",{className:"webtoon_site__page-empty",children:Object(a.jsx)("i",{className:"fas fa-ellipsis-h "})})})},t)}))]})})})},g=function(){return Object(a.jsx)("div",{className:"circular",children:Object(a.jsx)("div",{className:"inner"})})},w=function(e){var t=e.favorite,s=e.siteName,r=e.userObj,i=e.titleId,l=e.day,u=n(59),j=n(68),d=Object(c.useState)(""),f=Object(o.a)(d,2),m=f[0],p=f[1],x=Object(c.useState)(!1),v=Object(o.a)(x,2),g=v[0],w=v[1],N=Object(c.useState)(!1),_=Object(o.a)(N,2),k=_[0],y=_[1],S=Object(c.useCallback)(Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.doc("".concat(r.uid,"/").concat(s,"/").concat(l,"/").concat(i)).get();case 2:return e.next=4,e.sent.exists;case 4:t=e.sent,y(t);case 6:case"end":return e.stop()}}),e)}))),[l,s,r,i]),E=function(){var e=Object(h.a)(O.a.mark((function e(n){var a,c,i,o,l,u,j,d;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.target.parentElement.parentElement,c=n.target.title,i=a.firstChild,o=i.firstChild,l=o.alt.indexOf("/"),u=o.alt.substring(0,l),j=o.alt.substring(l+1),d={link:i.href,img:o.src,title:o.title,titleId:u,day:j},"pop"!==c){e.next=16;break}if(!window.confirm("Are you sure, you want to delete '".concat(d.title,"' from Your Profile ?"))){e.next=14;break}return e.next=13,b.doc("".concat(r.uid,"/").concat(s,"/").concat(d.day,"/").concat(d.titleId)).delete();case 13:t&&y((function(e){return!e}));case 14:e.next=25;break;case 16:if("push"!==c){e.next=24;break}if(!window.confirm("Are you sure, you want to Add '".concat(d.title,"' to Your Profile ?"))){e.next=22;break}return e.next=21,b.doc("".concat(r.uid,"/").concat(s,"/").concat(d.day,"/").concat(d.titleId)).set(d);case 21:t&&y((function(e){return!e}));case 22:e.next=25;break;case 24:console.log("target Name is undefined");case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=Object(c.useCallback)(Object(h.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("https://comic.naver.com/webtoon/list.nhn?titleId=".concat(i));case 2:return t=e.sent,e.next=5,j.load(t.data);case 5:n=e.sent,p(n("td.num:first").text()),"UP"===n("td.title:first").children("img").attr("alt")&&w(!0);case 8:case"end":return e.stop()}}),e)}))),[i,u,j]);return Object(c.useEffect)((function(){!1===t?I():S()}),[I,t,S]),Object(a.jsx)("span",{className:"favorite-area",children:t?Object(a.jsx)(a.Fragment,{children:k?Object(a.jsx)("i",{className:"fas fa-heart active",onClick:E,title:"pop"}):Object(a.jsx)("i",{className:"far fa-heart non-active",onClick:E,title:"push"})}):Object(a.jsxs)(a.Fragment,{children:[g&&Object(a.jsx)("span",{className:"update-badge",children:"UP"}),Object(a.jsx)("span",{className:"update-day",children:m}),Object(a.jsx)("i",{className:"far fa-trash-alt delete-btn",onClick:E,title:"pop"})]})})},N=function(e){var t=e.webtoonList,n=e.day,s=e.userObj,r=e.siteName,i=e.favorite,l=Object(c.useState)(!1),u=Object(o.a)(l,2),j=u[0],b=u[1],d=Object(c.useCallback)((function(){var e=new Date;n===["sun","mon","tue","wed","thu","fri","sat"][e.getDay()]&&b(!0)}),[n]);return Object(c.useEffect)((function(){d()}),[d]),Object(a.jsxs)("div",{className:"col"+(j?" today-col":""),children:[Object(a.jsxs)("h3",{className:"day",children:[" ",n," "]}),Object(a.jsx)("div",{className:"col_inner",children:Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)("div",{className:"thumb",children:[Object(a.jsx)("a",{href:e.link,className:"thumb__link",children:Object(a.jsx)("img",{src:e.img,title:e.title,alt:e.titleId+"/"+n})}),Object(a.jsx)("span",{className:"thumb__title",children:e.title}),Object(a.jsx)(w,{titleId:e.titleId,favorite:i,siteName:r,userObj:s,day:n})]})},e.titleId)}))})})]})},_=["naver"],k=["mon","tue","wed","thu","fri","sat","sun"],y=function(e){var t=e.userObj,n=Object(c.useState)(!1),s=Object(o.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)({}),u=Object(o.a)(l,2),j=u[0],d=u[1],p=Object(c.useCallback)((function(){_.forEach((function(e){k.forEach(function(){var n=Object(h.a)(O.a.mark((function n(a){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.collection(t.uid).doc(e).collection(a).onSnapshot((function(t){var n=t.docs.map((function(e){return e.data()}));d((function(t){return Object(m.a)(Object(m.a)({},t),{},Object(f.a)({},e,Object(m.a)(Object(m.a)({},t[e]),{},Object(f.a)({},a,n))))}))}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())})),i(!0)}),[t]);return Object(c.useEffect)((function(){return null!==t&&p(),function(){}}),[t,p]),Object(a.jsxs)("div",{className:"profile-mainscreen",children:[Object(a.jsx)("div",{className:"webtoon_site__nav",children:Object(a.jsx)(v,{})}),Object(a.jsx)("h2",{className:"webtoon_site__title",children:"My Webtoon"}),Object(a.jsx)("div",{className:"list_area daily_all",children:r?Object.keys(j).map((function(e){return Object(a.jsx)("div",{className:"devide_by_webtoon_site",children:k.map((function(n){return j[e][n]?Object(a.jsx)(N,{webtoonList:j[e][n],day:n,userObj:t,siteName:e,favorite:!1},k.indexOf(n)):void 0}))},e)})):Object(a.jsx)(g,{})})]})},S=n(101),E=function(e){var t=e.userObj,s=n(59),r=n(68),i=Object(c.useState)(!1),l=Object(o.a)(i,2),u=l[0],j=l[1],b=Object(c.useState)({mon:[],tue:[],wed:[],thu:[],fri:[],sat:[],sun:[]}),d=Object(o.a)(b,2),p=d[0],x=d[1],v=Object.keys(p),w=Object(c.useCallback)(Object(h.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("https://comic.naver.com/webtoon/weekday.nhn");case 2:return t=e.sent,e.next=5,r.load(t.data);case 5:(n=e.sent)("div.daily_all div.col div.col_inner ul li").each((function(e,t){var a=n(t).find("div.thumb a img").attr("title"),c=n(t).find("div.thumb a img").attr("src"),s=n(t).find("a.title").attr("href"),r=(s="https://comic.naver.com".concat(s)).slice(-3),i=s.indexOf("="),o=s.indexOf("&"),l={titleId:s.substring(i+1,o),title:a,img:c,link:s,day:r};x((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(f.a)({},r,[].concat(Object(S.a)(e[r]),[l])))}))})),j(!0);case 8:case"end":return e.stop()}}),e)}))),[s,r]);return Object(c.useEffect)((function(){return!1===u&&w(),function(){}}),[u,w]),Object(a.jsxs)("div",{id:"naver-mainscreen",children:[Object(a.jsx)("h2",{className:"webtoon_site__title",children:"Naver Webtoon"}),Object(a.jsx)("div",{className:"list_area daily_all",children:u?v.map((function(e){return Object(a.jsx)(N,{webtoonList:p[e],day:e,userObj:t,siteName:"naver",favorite:!0},e)})):Object(a.jsx)(g,{})})]})},I=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(o.a)(r,2),l=i[0],b=i[1],d=Object(c.useState)(!0),f=Object(o.a)(d,2),m=f[0],p=f[1],x=Object(c.useState)(""),v=Object(o.a)(x,2),g=v[0],w=v[1],N=Object(c.useState)(""),_=Object(o.a)(N,2),k=_[0],y=_[1],S=function(){var e=Object(h.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!m){e.next=7;break}return e.next=5,j.signInWithEmailAndPassword(n,l);case 5:e.next=9;break;case 7:return e.next=9,j.createUserWithEmailAndPassword(n,l);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),w(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,n=t.value;"email"===t.name?s(n):b(n)},I=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new u.auth.GoogleAuthProvider,e.prev=1,e.next=4,j.signInWithPopup(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),y(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{id:"auth-mainscreen",children:[Object(a.jsx)("span",{className:"app-title",children:"WEBTOON MANAGER"}),Object(a.jsxs)("form",{onSubmit:S,className:"login-form",children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"login-form__account",children:[Object(a.jsx)("span",{children:"Email "}),Object(a.jsx)("input",{className:"login-form__account-input",onChange:E,value:n,name:"email",type:"text",placeholder:"email",required:!0})]}),Object(a.jsxs)("div",{className:"login-form__account",children:[Object(a.jsx)("span",{children:"Password "}),Object(a.jsx)("input",{className:"login-form__account-input",onChange:E,value:l,name:"password",type:"password",placeholder:"password",required:!0})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:"login-form__submit-btn",type:"submit",value:m?"Sign In":"Create Account"})})]}),g&&Object(a.jsxs)("span",{className:"error-code",children:['"',g,'"']}),k&&Object(a.jsxs)("span",{className:"error-code",children:['"',k,'"']}),Object(a.jsxs)("div",{className:"other-login",children:[Object(a.jsx)("span",{onClick:function(){return p((function(e){return!e}))},className:"other-login-btn",children:Object(a.jsx)("button",{children:m?"Create Account":"Sign In"})}),Object(a.jsx)("span",{className:"other-login-btn social-login-btn",children:Object(a.jsx)("button",{onClick:I,name:"google",children:"Continue with Google"})})]})]})},C=n(6),A=function(){var e=Object(C.f)(),t=function(){var t=Object(h.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("nav",{id:"navigation-screen",children:[Object(a.jsx)("span",{className:"app-title",children:"WEBTOON MANAGER"}),Object(a.jsxs)("ul",{className:"navigation",children:[Object(a.jsx)("li",{className:"navigation__list",children:Object(a.jsx)(p.b,{to:"/",children:"My Profile"})}),Object(a.jsx)("li",{className:"navigation__list",children:Object(a.jsx)("button",{onClick:t,children:"Log out"})})]})]})},P=function(e){var t=e.isLoggedIn,n=e.userObj;return Object(a.jsxs)(p.a,{children:[t&&Object(a.jsx)(A,{}),Object(a.jsx)(C.c,{children:t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C.a,{exact:!0,path:"/",children:Object(a.jsx)(y,{userObj:n})}),Object(a.jsx)(C.a,{exact:!0,path:"/naver",children:Object(a.jsx)(E,{userObj:n})})]}):Object(a.jsx)(C.a,{exact:!0,path:"/",children:Object(a.jsx)(I,{})})})]})};var W=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),i=Object(o.a)(r,2),l=i[0],u=i[1],b=Object(c.useState)(null),d=Object(o.a)(b,2),O=d[0],f=d[1];return Object(c.useEffect)((function(){j.onAuthStateChanged((function(e){e?(u(!0),f(e)):u(!1),s(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(P,{isLoggedIn:l,userObj:O}):""})};n(186);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.76032397.chunk.js.map