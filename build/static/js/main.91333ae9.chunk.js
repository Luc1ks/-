(this.webpackJsonpglobal_faciet=this.webpackJsonpglobal_faciet||[]).push([[0],[,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(1),a=n.n(r),c=n(14),u=n(3),o=n(7),s=n(8),i=n(13),l=n(37),f=n.n(l),m=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"get",value:function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,o,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},r=s.length>2&&void 0!==s[2]?s[2]:{},u="?",u+=f.a.stringify(n),e.next=6,fetch(t+u,{method:"GET",headers:Object(c.a)({Authorization:"Bearer "+i.default.getAccessToken(),creditionals:"include"},r)});case 6:return o=e.sent,e.t0=c.a,e.t1=Object(c.a)({},o),e.t2={},e.next=12,o.json();case 12:return e.t3=e.sent,e.t4={body:e.t3},e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t4));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,o,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},r=s.length>2&&void 0!==s[2]?s[2]:{},u=s.length>3&&void 0!==s[3]?s[3]:{},e.next=5,fetch(t+"?".concat(f.a.stringify(r)),{method:"POST",headers:Object(c.a)({Authorization:"Bearer "+i.default.getAccessToken(),"Content-type":"application/json"},u),body:JSON.stringify(n)});case 5:return o=e.sent,e.t0=c.a,e.t1=Object(c.a)({},o),e.t2={},e.next=11,o.json();case 11:return e.t3=e.sent,e.t4={body:e.t3},e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t4));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},function(e,t,n){"use strict";n.r(t);t.default="https://totalifydev.tk"},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(8),c=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"getRefreshToken",value:function(){return localStorage.getItem("refreshToken")}},{key:"getAccessToken",value:function(){return localStorage.getItem("accessToken")}},{key:"setRefreshToken",value:function(e){return localStorage.setItem("refreshToken",e)}},{key:"setAccessToken",value:function(e){return localStorage.setItem("accessToken",e)}},{key:"clear",value:function(){localStorage.clear()}}]),e}();t.default=c},,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(3),u=n(7),o=n(8),s=n(6),i=s.default+"/api/auth/signup",l=s.default+"/api/auth/signin",f=(s.default,s.default+"/api/auth/refresh"),m=n(27),d=n.n(m),p=n(28),b=n(13),v=n(5),k=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,null,[{key:"singup",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c,u){var o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(i,{username:t,password:n,email:r,so2_nickname:c,so2_id:u});case 2:if(o=e.sent,s=o.body,console.log(s),!s.err){e.next=9;break}return e.abrupt("return",{err:s.err});case 9:return console.log(s.access_token),b.default.setAccessToken(s.access_token),e.abrupt("return",{refreshToken:s.refresh_token,access_token:s.access_token});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c){return e.apply(this,arguments)}}()},{key:"signin",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(l,{username:t,password:n});case 2:if(r=e.sent,c=r.body,console.log(c),!c.err){e.next=9;break}return e.abrupt("return",{err:c.err});case 9:return b.default.setAccessToken(c.access_token),e.abrupt("return",{refreshToken:c.refreshToken,accessToken:c.access_token});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"authorize",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.a.connect(p.a,{query:{token:b.default.getAccessToken()},secure:!0}),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"refreshAccessToken",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(f,{refresh_token:t});case 2:return n=e.sent,e.next=5,n.body;case 5:if(!(r=e.sent).err){e.next=10;break}return e.abrupt("return",{err:r.err});case 10:return e.abrupt("return",{access_token:r.access_token,refresh_token:r.refresh_token});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.default=k},,,,,,,,,,,function(e,t,n){"use strict";t.a="https://totalifydev.tk"},,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(3),u=n(7),o=n(8),s=n(17).default,i=n(13).default,l=function(){function e(){Object(u.a)(this,e)}return Object(o.a)(e,null,[{key:"refreshByErr",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("jwt expired"!==t.name){e.next=13;break}return e.next=3,s.refreshAccessToken(i.getRefreshToken());case 3:if(!(n=e.sent).err){e.next=9;break}return i.clear(),e.abrupt("return",!1);case 9:return i.setAccessToken(n.access_token),e.abrupt("return",n.access_token);case 11:e.next=14;break;case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.default=l},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/map1.581af8d4.png"},function(e,t,n){e.exports=n.p+"static/media/map2.221acc59.png"},function(e,t,n){e.exports=n.p+"static/media/map3.2129aafa.png"},,function(e,t,n){e.exports=n(129)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"friendListUrl",(function(){return a})),n.d(t,"addFriendUrl",(function(){return c})),n.d(t,"removeFriendUrl",(function(){return u}));var r=n(6),a=r.default+"/api/friends",c=r.default+"/api/friends/add",u=r.default+"/api/friends/remove"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(58),u=n.n(c),o=n(2),s=(n(69),n(18)),i=n(27),l=n.n(i),f=n(28),m=Object(r.createContext)({socket:l.a.connect(f.a)}),d=n(4),p=n(1),b=n.n(p),v=n(3);n(103);function k(e){var t=e.placeHodler,n=void 0===t?null:t,r=Object(s.a)(e,["placeHodler"]);return a.a.createElement("input",Object.assign({type:"text",className:"authInput",placeholder:n},r))}n(104);var h=n(17);var g=function(e){var t=e.setSocket,n=Object(r.useState)(!1),c=Object(o.a)(n,2),u=c[0],s=c[1],i=Object(r.useState)(""),l=Object(o.a)(i,2),f=l[0],m=l[1],d=Object(r.useState)(""),p=Object(o.a)(d,2),g=p[0],O=p[1],j=Object(r.useState)(""),y=Object(o.a)(j,2),E=y[0],x=y[1],w=Object(r.useState)(""),N=Object(o.a)(w,2),S=N[0],C=N[1],T=Object(r.useState)(""),I=Object(o.a)(T,2),_=I[0],A=I[1],D=Object(r.useState)(""),F=Object(o.a)(D,2),G=F[0],P=F[1],B=Object(r.useState)(!1),q=Object(o.a)(B,2),H=q[0],L=q[1];function M(){return(M=Object(v.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(f.length>2&&E.length>2&&g.length>2&&S.length>2&&_.length>2)||H){e.next=14;break}return L(!0),e.next=4,h.default.singup(E,g,f,_,S);case 4:if(!(n=e.sent).err){e.next=10;break}P(n.err),L(!1),e.next=12;break;case 10:return e.next=12,h.default.authorize().then((function(e){console.log(e,"signing up"),t(e)}));case 12:e.next=15;break;case 14:P("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u043e\u043b\u044f 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(v.a)(b.a.mark((function e(){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E.length>2&&g.length>2&&!1===H)){e.next=16;break}return L(!0),e.next=4,h.default.signin(E,g);case 4:if((n=e.sent).err){e.next=12;break}return e.next=8,h.default.authorize();case 8:r=e.sent,t(r),e.next=14;break;case 12:P(n.err),L(!1);case 14:e.next=17;break;case 16:P("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 \u0447\u0435\u043b\u0435\u043d\u0430 2 \u0441\u0438\u043c\u0432\u043e\u043b\u0430");case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return u?a.a.createElement("div",{className:"auth"},a.a.createElement(k,{placeHodler:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c",name:"email",onChange:function(e){return x(e.target.value)}}),a.a.createElement(k,{placeHodler:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",onChange:function(e){return O(e.target.value)}}),a.a.createElement("p",{className:"err"},G),a.a.createElement("button",{className:"signin ".concat(H),onClick:function(){return function(){return U.apply(this,arguments)}()}},"\u0412\u043e\u0439\u0442\u0438"),a.a.createElement("button",{className:"signup ".concat(H),onClick:function(){return s(!1)}},"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430")):a.a.createElement("div",{className:"auth"},a.a.createElement(k,{placeHodler:"Email",name:"new email",onChange:function(e){return m(e.target.value)}}),a.a.createElement(k,{placeHodler:"\u041d\u0438\u043a\u043d\u0435\u0439\u043c",name:"new nickname",onChange:function(e){return x(e.target.value)}}),a.a.createElement(k,{placeHodler:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"new password",onChange:function(e){return O(e.target.value)}}),a.a.createElement(k,{placeHodler:"SO2 \u043d\u0438\u043a\u043d\u0435\u0439\u043c",onChange:function(e){return A(e.target.value)}}),a.a.createElement(k,{placeHodler:"SO2 id",onChange:function(e){return C(e.target.value)}}),a.a.createElement("p",{className:"err"},G),a.a.createElement("button",{className:"signup ".concat(H),onClick:function(){return function(){return M.apply(this,arguments)}()}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),a.a.createElement("button",{className:"signin ".concat(H),onClick:function(){return s(!0)}},"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442"))};function O(e){var t=e.path,n=e.setSocket,c=e.children,u=Object(s.a)(e,["path","setSocket","children"]);return Object(r.useContext)(m).socket?a.a.createElement(d.b,Object.assign({path:t},u),c):a.a.createElement(g,{setSocket:n})}var j=n(13);n(111);function y(){return a.a.createElement("div",{className:"preloader"},a.a.createElement("div",{className:"dot first"}),a.a.createElement("div",{className:"dot second"}),a.a.createElement("div",{className:"dot last"}))}n(112);var E=n(7),x=n(8),w=n(6).default,N=w+"/api/user",S=n(36),C=n(5),T=function(){function e(){Object(E.a)(this,e)}return Object(x.a)(e,null,[{key:"GetOwnProfie",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(N);case 2:return t=e.sent,e.next=5,t.body;case 5:if(n=e.sent,console.log(n,"get profile"),!n.err){e.next=12;break}return console.error(n.err),e.abrupt("return",!1);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"GetProfileByUsername",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(N,{username:t});case 2:if(n=e.sent,r=n.body,console.log(r,"get profile by username"),!r.err){e.next=16;break}return e.next=8,S.default.refreshByErr(r.err);case 8:if(!e.sent){e.next=13;break}this.GetProfileByUsername(t),e.next=14;break;case 13:return e.abrupt("return",!1);case 14:e.next=17;break;case 16:return e.abrupt("return",r.user);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();n(113);function I(e){var t=e.profileData,n=void 0===t?null:t,c=Object(r.useState)({username:"",rating:0,bio:""}),u=Object(o.a)(c,2),s=u[0],i=u[1];return Object(r.useEffect)((function(){n?i(n):T.GetOwnProfie().then((function(e){e&&i(e)}))}),[n]),a.a.createElement("div",{className:"userData"},a.a.createElement("div",{className:"avatar"}),a.a.createElement("div",{className:"textData"},a.a.createElement("div",{className:"username"},s.username),a.a.createElement("div",{className:"rating"},s.rating)),a.a.createElement("div",{className:"bio"},s.bio))}n(114);var _=n(6),A=_.default+"/api/party/invite",D=_.default+"/api/party/join",F=_.default+"/api/party/reject",G=_.default+"/api/party/leave",P=_.default+"/api/party/",B=_.default+"/api/party/kick",q=function(){function e(){Object(E.a)(this,e)}return Object(x.a)(e,null,[{key:"sendInvite",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(A,{username:t});case 2:return n=e.sent,e.next=5,n.body;case 5:if(r=e.sent,console.log(r,"send invite"),!r.err){e.next=11;break}console.error(r.err),e.next=12;break;case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"acceptInvite",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,C.a.post(D,{id:t});case 3:return n=e.sent,e.next=6,n.body;case 6:if(r=e.sent,console.log(r,"accept invite"),!r.err){e.next=13;break}return console.error(r.err),e.abrupt("return",!1);case 13:return e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"rejectInvite",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,C.a.post(F,{id:t});case 3:return n=e.sent,e.next=6,n.body;case 6:if(r=e.sent,console.log(r,"reject invite"),!r.err){e.next=13;break}return console.error(r.err),e.abrupt("return",!1);case 13:return e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"leaveParty",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(G);case 2:return t=e.sent,e.next=5,t.body;case 5:if(n=e.sent,console.log(n,"leave party"),!n.err){e.next=12;break}return console.error(n.err),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"kick",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(B,{username:t});case 2:if(n=e.sent,console.log(n.body),!n.body.err){e.next=9;break}return console.error(n.body.err),e.abrupt("return",!1);case 9:return e.abrupt("return",n.body);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getParty",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(P);case 2:return t=e.sent,e.next=5,t.body;case 5:if(n=e.sent,console.log(n,"gett party"),!n.err){e.next=11;break}console.error(n.err),e.next=12;break;case 11:return e.abrupt("return",n.data);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();n(115);function H(e){var t=e.children,n=Object(s.a)(e,["children"]);return a.a.createElement("button",Object.assign({className:"btns cancel"},n),t)}function L(e){var t=e.children,n=Object(s.a)(e,["children"]);return a.a.createElement("button",Object.assign({className:"btns submit"},n),t)}function M(e){var t=Object.assign({},e);return a.a.createElement("button",Object.assign({className:"deleteBtn"},t),"X")}n(116);function U(e){var t=e.show,n=e.children;return a.a.createElement("div",{className:"overlay "+t},n)}function z(e){var t=e.partyData,n=void 0===t?null:t,c=e.profileData,u=void 0===c?null:c,s=Object(r.useContext)(m).socket,i=Object(r.useState)({players:[],owner:""}),l=Object(o.a)(i,2),f=l[0],d=l[1],p=Object(r.useState)({id:"",username:""}),b=Object(o.a)(p,2),v=b[0],k=b[1],h=Object(r.useState)(""),g=Object(o.a)(h,2),O=g[0],j=g[1],y=Object(r.useState)(!1),E=Object(o.a)(y,2),x=E[0],w=E[1];return Object(r.useEffect)((function(){return s.on("party",(function(e){console.log(e,"socket party"),d(e.data)})),n||q.getParty().then((function(e){console.log(e,"fetch party"),d(e)})),function(){s.off("party")}}),[s,n]),Object(r.useEffect)((function(){u||T.GetOwnProfie().then((function(e){e&&k(e)}))}),[u]),Object(r.useEffect)((function(){n&&d(n),u&&k(u)}),[n,u]),Object(r.useEffect)((function(){f.players.sort((function(e,t){return t.id-e.id}))}),[f]),a.a.createElement("div",{className:"party"},a.a.createElement(U,{show:x},a.a.createElement("div",{className:"invite"},a.a.createElement("input",{type:"target",onChange:function(e){return j(e.target.value)},value:O}),a.a.createElement("div",{className:"controls"},a.a.createElement(H,{onClick:function(){return w(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430"),a.a.createElement(L,{onClick:function(){return w(!1),console.log(O),q.sendInvite(O),void j("")}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))),f.players.map((function(e){return a.a.createElement("div",{key:e.username,className:"member"},e.username,v.id===f.owner&&v.username!==e.username?a.a.createElement(M,{onClick:function(){return t=e.username,void q.kick(t);var t}}):"",f.owner===e.id?a.a.createElement("div",{className:"crown"}):"")})),5!==f.players.length?a.a.createElement("div",{className:"addMember member",onClick:function(){return w(!0)}},"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430"):"",1!==f.players.length?a.a.createElement("div",{className:"cancel member",onClick:function(){q.leaveParty()}},"\u0412\u044b\u0439\u0442\u0438"):"")}n(117);var J=n(6).default,R=J+"/api/queue/join",Q=J+"/api/queue/leave",V=function(){function e(){Object(E.a)(this,e)}return Object(x.a)(e,null,[{key:"JoinQueue",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(R);case 2:return t=e.sent,e.next=5,t.body;case 5:if(n=e.sent,console.log(n,"join queue"),!n.err){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"LeaveQueue",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(Q);case 2:return t=e.sent,e.next=5,t.body;case 5:if(n=e.sent,console.log(n,"leave queue"),!n.err){e.next=11;break}return e.abrupt("return",!1);case 11:return e.abrupt("return",!0);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),W=1;function K(e){var t=e.partyData,n=void 0===t?null:t,c=Object(r.useContext)(m).socket,u=Object(r.useState)(!1),s=Object(o.a)(u,2),i=s[0],l=s[1],f=Object(r.useState)(""),d=Object(o.a)(f,2),p=d[0],b=d[1];function v(){b("shake"),setTimeout((function(){b("")}),500)}return Object(r.useEffect)((function(){return c.on("queue",(function(e){console.log(e,"search"),e.data?l(!0):l(!1)})),function(){c.off("queue")}}),[c]),Object(r.useEffect)((function(){n&&(n.status===W?l(!0):l(!1))}),[n]),a.a.createElement("div",{className:"search"},a.a.createElement("button",{className:(i?"red ":" ")+p,onClick:function(){i?V.LeaveQueue().then((function(e){return e?l(!1):v()})):V.JoinQueue().then((function(e){return e?l(!0):v()}))}},i?"\u041e\u0442\u043c\u0435\u043d\u0430":"\u0418\u0441\u043a\u0430\u0442\u044c"))}function X(){var e=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1];return{request:Object(r.useCallback)(function(){var e=Object(v.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&a(!0),e.next=3,t();case 3:return r=e.sent,a(!1),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),isLoading:n}}(),t=e.request,n=e.isLoading,c=Object(r.useState)({username:""}),u=Object(o.a)(c,2),s=u[0],i=u[1],l=Object(r.useState)({players:[]}),f=Object(o.a)(l,2),m=f[0],d=f[1];return Object(r.useEffect)((function(){t(T.GetOwnProfie,!0).then((function(e){i(e)})),t(q.getParty,!0).then((function(e){d(e)}))}),[t]),n?a.a.createElement(y,null):a.a.createElement("div",{className:"matchMaking"},a.a.createElement(I,{profileData:s}),a.a.createElement(K,{partyData:m}),a.a.createElement(z,{profileData:s,partyData:m}))}var $=n(22),Y=(n(118),n(130)),Z=[{url:"/",name:"MM"},{url:"/friends",name:"Friends"},{url:"/notifications",name:"nots"},{url:"/game/lobby",name:"Lobby"}];function ee(){var e=Object(d.g)();return a.a.createElement("div",{className:"navbar"},Z.map((function(t){return a.a.createElement($.b,{className:e.pathname===t.url?"navLink active":"navLink",to:t.url,key:Object(Y.a)()},t.name)})))}var te=n(16),ne=n(119),re=ne.addFriendUrl,ae=ne.removeFriendUrl,ce=ne.friendListUrl,ue=n(36).default,oe=function(){function e(){Object(E.a)(this,e)}return Object(x.a)(e,null,[{key:"addFriend",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(re,{username:t});case 2:if(n=e.sent,r=n.body,console.log(r,"add friend"),!r.err){e.next=16;break}return e.next=8,ue.refreshByErr(r.err);case 8:if(!e.sent){e.next=13;break}this.addFriend(t),e.next=14;break;case 13:return e.abrupt("return",!1);case 14:e.next=17;break;case 16:return e.abrupt("return",!0);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeFriend",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.post(ae,{id:t});case 2:if(n=e.sent,r=n.body,console.log(r,"remove friend"),!r.err){e.next=10;break}return console.error(r.err),e.abrupt("return",!1);case 10:return e.abrupt("return",!0);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFriends",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(ce);case 2:if(t=e.sent,n=t.body,console.log(n,"get friends"),!n.err){e.next=10;break}return console.error(n.err),e.abrupt("return",!1);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();n(120),n(121);function se(e){var t=e.data,n=e.destroy,r=void 0===n?function(){}:n;return a.a.createElement("div",{className:"friend"},a.a.createElement("div",{className:"data"},a.a.createElement("div",{className:"username"},t.username)),a.a.createElement("div",{className:"controls"},a.a.createElement(L,{onClick:function(){q.sendInvite(t.username)}},"\u041f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u0442\u044c"),a.a.createElement(M,{onClick:function(){return oe.removeFriend(t.id),void r()}})))}function ie(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(""),s=Object(o.a)(u,2),i=s[0],l=s[1],f=Object(r.useState)(!1),m=Object(o.a)(f,2),d=m[0],p=m[1];return Object(r.useEffect)((function(){oe.getFriends().then((function(e){e&&(console.log(e[0]),c(e))}))}),[]),a.a.createElement("div",{className:"friends"},a.a.createElement("div",{className:"controls"},a.a.createElement(L,{onClick:function(){return p(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),a.a.createElement(U,{show:d},a.a.createElement("div",{className:"addFriend"},a.a.createElement("input",{type:"target",onChange:function(e){return l(e.target.value)},value:i}),a.a.createElement("div",{className:"controls"},a.a.createElement(H,{onClick:function(){return p(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430"),a.a.createElement(L,{onClick:function(){return p(!1),oe.addFriend(i),void l("")}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))),n.map((function(e,t){return a.a.createElement(se,{key:e.username,data:e,destroy:function(){return function(e){c((function(t){var n=Object(te.a)(t);return n.splice(e),n}))}(t)}})})))}n(122);function le(e){var t=e.id,n=e.from,c=e.destroy,u=Object(r.useState)(""),s=Object(o.a)(u,2),i=s[0],l=s[1];return a.a.createElement("div",{className:"notification invite "+i},a.a.createElement("p",null,"\u0418\u043d\u0432\u0430\u0439\u0442 \u043e\u0442 ",n),a.a.createElement("div",{className:"controls"},a.a.createElement(H,{onClick:function(){return function(e){l("remove"),setTimeout((function(){c()}),340),q.rejectInvite(e)}(t)}},"\u041e\u0442\u043c\u0435\u043d\u0430"),a.a.createElement(L,{onClick:function(){return function(e){l("remove"),setTimeout((function(){c()}),340),q.acceptInvite(e)}(t)}},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c")))}function fe(e){var t=e.from,n=e.destroy,c=Object(r.useState)(""),u=Object(o.a)(c,2),s=u[0],i=u[1];return a.a.createElement("div",{className:"notification invite "+s},a.a.createElement("p",null,"\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435 \u0432 \u0434\u0440\u0443\u0437\u044c\u044f \u043e\u0442 ",t.username),a.a.createElement("div",{className:"controls"},a.a.createElement(H,{onClick:function(){return t.username,i("remove"),void setTimeout((function(){n()}),340)}},"\u041e\u0442\u043c\u0435\u043d\u0430"),a.a.createElement(L,{onClick:function(){return e=t.username,i("remove"),setTimeout((function(){n()}),340),void oe.addFriend(e);var e}},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c")))}n(123);function me(){var e=Object(r.useContext)(m).socket,t=Object(r.useState)([]),n=Object(o.a)(t,2),c=n[0],u=n[1];return Object(r.useEffect)((function(){var t=function(e){u((function(t){var n=Object(te.a)(t);return n.splice(e,1),n}))};return e&&e.on("notification",(function(e){switch(console.log(e),e.type){case"party/invite":u((function(n){return console.log(e.data.players.find((function(t){return t.id===e.data.owner}))),[].concat(Object(te.a)(n),[a.a.createElement(le,{id:e.data.id,from:e.data.players.find((function(t){return t.id===e.data.owner})).username,key:Object(Y.a)(),destroy:function(){return t(n.length)}})])}));break;case"friends/add":u((function(n){return[].concat(Object(te.a)(n),[a.a.createElement(fe,{from:e.data,key:Object(Y.a)(),destroy:function(){return t(n.length)}})])}))}})),function(){e&&e.off("notification")}}),[e]),a.a.createElement("div",{className:"notifications"},c)}var de=n(14),pe=_.default+"/api/notifications",be=function(){function e(){Object(E.a)(this,e)}return Object(x.a)(e,null,[{key:"get",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(pe);case 2:return t=e.sent,e.next=5,t.body;case 5:if(n=e.sent,console.log(n,"get notifications"),!n.err){e.next=12;break}return console.error(n.err),e.abrupt("return",!1);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}();n(124);function ve(){var e=Object(r.useState)({party:[],friends:[]}),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){be.get().then((function(e){e&&c(e)}))}),[]),a.a.createElement("div",{className:"notificationsView"},n.friends.map((function(e,t){return a.a.createElement(fe,{from:e.username,destroy:function(){return function(e){c((function(t){var n=Object(de.a)({},t);return n.friends.splice(e,1),n}))}(t)}})})),n.party.map((function(e,t){return a.a.createElement(le,{from:e.players.find((function(t){return t.id===e.owner})).username,id:e.id,destroy:function(){return function(e){c((function(t){var n=Object(de.a)({},t);return n.party.splice(e,1),n}))}(t)}})})))}function ke(){var e=Object(r.useContext)(m).socket,t=Object(r.useState)(null),n=Object(o.a)(t,2),c=n[0],u=n[1];return Object(r.useEffect)((function(){return e.on("redirect",(function(e){switch(e.type){case"game":u(a.a.createElement(d.a,{to:"/game/lobby"}))}})),function(){e.off("redirect")}}),[e]),c}n(125);var he=_.default+"/api/game/vote",ge=_.default+"/api/game/",Oe=_.default+"/api/game/messages",je=function(){function e(){Object(E.a)(this,e)}return Object(x.a)(e,null,[{key:"vote",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,C.a.post(he,{index:t});case 3:if(n=e.sent,!(r=n.body).err){e.next=10;break}return console.error(r.err),e.abrupt("return",!1);case 10:return e.abrupt("return",r.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"GetGame",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(ge);case 2:if(t=e.sent,!(n=t.body).err){e.next=9;break}return console.error(n.err),e.abrupt("return",!1);case 9:return e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getGameMsgs",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(Oe);case 2:if(t=e.sent,!(n=t.body).err){e.next=9;break}return console.error(n.err),e.abrupt("return",!1);case 9:return e.abrupt("return",n.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),ye=(n(126),n(60)),Ee=n.n(ye),xe=n(61),we=n.n(xe),Ne=n(62),Se=n.n(Ne),Ce=[{name:"map1",url:Ee.a},{name:"map2",url:we.a},{name:"map3",url:Se.a}];function Te(e){var t=e.profile,n=e.game,c=Object(r.useContext)(m).socket,u=Object(r.useState)([]),s=Object(o.a)(u,2),i=s[0],l=s[1],f=Object(r.useState)((new Date).getTime()-5e3),d=Object(o.a)(f,2),p=d[0],b=d[1],v=Object(r.useState)(30),k=Object(o.a)(v,2),h=k[0],g=k[1];return Object(r.useEffect)((function(){var e=setInterval((function(){if(n){var e=(new Date(n.voteStartAt).getTime()-(new Date).getTime())/1e3*-1;console.log(30-Math.round(e)),g(30-Math.round(e))}}),1e3);return function(){clearInterval(e)}}),[n]),Object(r.useEffect)((function(){return c.on("game/vote",(function(e){"vote"===e.type&&(console.log(e.data,"votes"),l(e.data))})),function(){c.off("game/vote")}}),[c]),a.a.createElement("div",{className:"voting"},Ce.map((function(e,n){var r=i.filter((function(e){return e.userVote.index===n&&1===e.userVote.state})),c=r.find((function(e){return e.userId===t.id}));return a.a.createElement("div",{className:c?"map selected":"map",onClick:function(){return function(e){(new Date).getTime()-p>3e3&&je.vote(e).then((function(e){e&&(console.log(e),l(e),b((new Date).getTime()))}))}(n)},style:{backgroundImage:"url(".concat(e.url,")")}},e.name,a.a.createElement("div",{className:"amount"},r.length))})),a.a.createElement("div",{className:"timer"},h," S"))}n(127);function Ie(e){var t=e.profile,n=e.setShow,c=e.show,u=Object(r.useRef)(),s=Object(r.useRef)(),i=Object(r.useState)(""),l=Object(o.a)(i,2),f=l[0],d=l[1],p=Object(r.useState)([]),b=Object(o.a)(p,2),v=b[0],k=b[1],h=Object(r.useContext)(m).socket,g=Object(r.useCallback)((function(){c&&s.current.scrollIntoView({behavior:"smooth"})}),[c]),O=Object(r.useCallback)((function(){f.length>1&&(h.emit("message",{type:"game",data:{content:f}}),d(""),u.current.textContent="",setTimeout((function(){g()}),300))}),[h,f,g]);return Object(r.useEffect)((function(){g()}),[g]),Object(r.useEffect)((function(){h.on("message",(function(e){console.log(e),k((function(t){var n=Object(te.a)(t);return n.push(e.data),n}))}))}),[h]),Object(r.useEffect)((function(){je.getGameMsgs().then((function(e){e&&k(e)}))}),[]),a.a.createElement(U,{show:c},a.a.createElement("div",{className:"chat"},a.a.createElement("div",{className:"exit",onClick:function(){return n(!1)}},"\u0412\u044b\u0439\u0442\u0438"),a.a.createElement("div",{className:"msgs"},v.map((function(e){return a.a.createElement("div",{className:e.author===t.username?"msg my":"msg"},a.a.createElement("div",{className:"from"},e.author),a.a.createElement("div",{className:"content"},e.content))})),a.a.createElement("div",{className:"end",ref:s})),a.a.createElement("div",{className:"controls"},a.a.createElement("div",{ref:u,contentEditable:!0,role:"textbox",onInput:function(e){return d(e.currentTarget.textContent)},onKeyDown:function(e){13===e.keyCode&&O()},className:"msgInput"}),a.a.createElement("div",{className:"send",onClick:function(){return O()}},"\u25ba"))))}n(128);function _e(e){var t=e.game;return a.a.createElement("div",{className:"teams"},a.a.createElement("div",{className:"team1"},t.team1.map((function(e){return a.a.createElement("div",{className:"player"},a.a.createElement("div",{className:"nickname"},e.gamesInfo.SO2.nickname),a.a.createElement("div",{className:"id"},e.gamesInfo.SO2.id))}))),a.a.createElement("div",{className:"team2"},t.team2.map((function(e){return a.a.createElement("div",{className:"player"},a.a.createElement("div",{className:"nickname"},e.gamesInfo.SO2.nickname),a.a.createElement("div",{className:"id"},e.gamesInfo.SO2.id))}))))}var Ae=0,De=2;function Fe(){var e=Object(r.useState)({id:-1}),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)({status:-1}),s=Object(o.a)(u,2),i=s[0],l=s[1],f=Object(r.useContext)(m).socket,d=Object(r.useState)(!1),p=Object(o.a)(d,2),b=p[0],v=p[1];return Object(r.useEffect)((function(){T.GetOwnProfie().then((function(e){e&&c(e)})),je.GetGame().then((function(e){e&&(l(e),console.log(e,"game"))}))}),[]),Object(r.useEffect)((function(){f.on("game/update",(function(e){e.data&&l(e.data)}))})),a.a.createElement("div",{className:"game"},i.status===Ae?a.a.createElement(Te,{profile:n,game:i}):"",i.status===De?a.a.createElement(_e,{game:i}):"",a.a.createElement("div",{className:"chatBtn",onClick:function(){return v(!0)}},"Chat"),a.a.createElement(Ie,{profile:n,setShow:v,show:b}))}var Ge=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(!0),s=Object(o.a)(u,2),i=s[0],l=s[1];return Object(r.useEffect)((function(){j.default.getAccessToken()?h.default.authorize().then((function(e){e.on("connect",(function(){return console.log("connected")})),e.on("disconnect",(function(){console.log("disconnected"),l(!1)})),e.on("auth",(function(){console.log("authed"),c(e),l(!1)})),e.on("unauth",(function(){console.log("unauth"),l(!1)}))})):l(!1)}),[]),i?a.a.createElement(y,null):n?a.a.createElement("div",{className:"App"},a.a.createElement(m.Provider,{value:{socket:n}},a.a.createElement($.a,null,a.a.createElement(me,null),a.a.createElement(d.d,null,a.a.createElement(O,{path:"/",setSocket:c,exact:!0},a.a.createElement(X,null)),a.a.createElement(O,{path:"/friends",setSocket:c,exact:!0},a.a.createElement(ie,null)),a.a.createElement(O,{path:"/notifications",setSocket:c,exact:!0},a.a.createElement(ve,null)),a.a.createElement(O,{path:"/game/lobby",setSocket:c,exact:!0},a.a.createElement(Fe,null)),a.a.createElement(d.b,{path:"/auth"},a.a.createElement(g,{setSocket:c}))),a.a.createElement(ee,null),a.a.createElement(ke,null)))):(console.log("not auhed"),a.a.createElement("div",{className:"App"},a.a.createElement(g,{setSocket:c})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[64,1,2]]]);
//# sourceMappingURL=main.91333ae9.chunk.js.map