(this["webpackJsonpmesto-react-auth"]=this["webpackJsonpmesto-react-auth"]||[]).push([[0],{31:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(20),s=n.n(o),i=n(9),r=(n(31),n(25)),l=n(3),u=n(4),p=n.p+"static/media/logo.03b78ada.svg",d=n(0);var b=function(e){return Object(d.jsxs)("header",{className:"header page__section",children:[Object(d.jsx)("img",{className:"logo header__logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041f\u0440\u043e\u0435\u043a\u0442\u0430 \u041c\u0435\u0441\u0442\u043e"}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"header__user",children:[Object(d.jsx)("p",{className:"header__email",children:e.email}),Object(d.jsx)(i.b,{to:"/sign-in",onClick:e.handleLogout,className:"header__link header__link_logged-in button hover",children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(i.b,{to:"/sign-up",className:"header__link button hover",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(i.b,{to:"/sign-in",className:"header__link button hover",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})},j=c.a.createContext();var h=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,o=e.onCardDelete,s=c.a.useContext(j),i=t.owner._id===s._id,r="place__delete-button hover button_type_delete ".concat(i?"place__delete-button_visible":"place__delete-button_hidden"),l=t.likes.some((function(e){return e._id===s._id})),u="".concat(l?"place__like place__like_active":"place__like");return Object(d.jsxs)("li",{className:"place",children:[Object(d.jsx)("img",{className:"place__photo",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(d.jsx)("button",{type:"button",className:r,onClick:function(){o(t)}}),Object(d.jsxs)("div",{className:"place__info",children:[Object(d.jsx)("h3",{className:"place__title",children:t.name}),Object(d.jsxs)("div",{className:"place__likes-container",children:[Object(d.jsx)("button",{className:u,type:"button",onClick:function(){a(t)}}),Object(d.jsx)("p",{className:"place__likes-count",children:t.likes.length})]})]})]})};var m=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,o=e.handleCardClick,s=e.onCardLike,i=e.onCardDelete,r=e.cards,l=c.a.useContext(j);return Object(d.jsxs)("main",{className:"content page__content",children:[Object(d.jsxs)("section",{className:"profile page__section",children:[Object(d.jsx)("div",{className:"profile__avatar",onClick:a,style:{backgroundImage:"url(".concat(l.avatar,")")}}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:l.name}),Object(d.jsx)("p",{className:"profile__bio",children:l.about}),Object(d.jsx)("button",{className:"profile__edit-button button button_type_edit hover",type:"button",onClick:t})]}),Object(d.jsx)("button",{className:"button button_type_add hover",name:"add-button",type:"button",onClick:n})]}),Object(d.jsx)("section",{className:"places page__section",children:Object(d.jsx)("ul",{className:"places__list",children:r.map((function(e){return Object(d.jsx)(h,{card:e,onCardClick:o,onCardLike:s,onCardDelete:i},e._id)}))})})]})};var _=function(){return Object(d.jsx)("footer",{className:"footer page__section",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 \u041c\u0430\u043a\u0441\u0438\u043c \u0422\u0440\u043e\u043f\u043d\u0438\u043a\u043e\u0432"})})};var f=function(e){return Object(d.jsx)("div",{onClick:e.closeByOverlayClick,className:e.isOpen?"popup popup_type_".concat(e.name," popup_opened"):"popup popup_type_".concat(e.name),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{className:" popup__close button button_type_close hover ",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f"}),Object(d.jsx)("h2",{className:"popup__title",children:e.title}),Object(d.jsxs)("form",{onSubmit:e.onSubmit,action:"#",className:"form popup__form form_type_".concat(e.name),name:"".concat(e.name,"-form"),children:[e.children,Object(d.jsx)("button",{type:"submit",className:" popup__save button form__submit button_type_save ",children:e.submitButtonText})]})]})})};var O=function(e){return Object(d.jsx)("div",{onClick:e.closeByOverlayClick,className:e.card?"popup popup_photo place-full-photo popup_opened":"popup popup_photo place-full-photo",children:Object(d.jsxs)("div",{className:"popup__photo-container",children:[Object(d.jsx)("button",{className:"popup__close button button_type_close hover",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:e.onClose}),Object(d.jsx)("img",{src:e.card?e.card.link:"#",alt:e.card?e.card.name:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430",className:"place-full-photo__image"}),Object(d.jsx)("h3",{className:"place-full-photo__caption",children:e.card?e.card.name:""})]})})},v=n(23),g=n(24),x=n(2),y=n(16),C=Object(y.a)("baseUrl"),k=Object(y.a)("headers"),N=Object(y.a)("handleResponse"),S=new(function(){function e(t){Object(v.a)(this,e),Object.defineProperty(this,C,{writable:!0,value:void 0}),Object.defineProperty(this,k,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}),Object(x.a)(this,C)[C]=t.baseUrl,Object(x.a)(this,k)[k]=t.headers}return Object(g.a)(e,[{key:"getInitialCards",value:function(){return fetch(Object(x.a)(this,C)[C]+"/cards",{headers:Object(x.a)(this,k)[k]}).then(Object(x.a)(this,N)[N])}},{key:"getUserData",value:function(){return fetch(Object(x.a)(this,C)[C]+"/users/me",{headers:Object(x.a)(this,k)[k]}).then(Object(x.a)(this,N)[N])}},{key:"saveUserData",value:function(e){return fetch(Object(x.a)(this,C)[C]+"/users/me",{method:"PATCH",headers:Object(x.a)(this,k)[k],body:JSON.stringify(e)}).then(Object(x.a)(this,N)[N])}},{key:"addNewCard",value:function(e){return fetch(Object(x.a)(this,C)[C]+"/cards",{method:"POST",headers:Object(x.a)(this,k)[k],body:JSON.stringify(e)}).then(Object(x.a)(this,N)[N])}},{key:"deleteCard",value:function(e){return fetch(Object(x.a)(this,C)[C]+"/cards/".concat(e),{method:"DELETE",headers:Object(x.a)(this,k)[k]}).then(Object(x.a)(this,N)[N])}},{key:"changeLikeCardStatus",value:function(e,t){return fetch(Object(x.a)(this,C)[C]+"/cards/likes/".concat(e),{method:t?"PUT":"DELETE",headers:Object(x.a)(this,k)[k]}).then(Object(x.a)(this,N)[N])}},{key:"likeCard",value:function(e){return fetch(Object(x.a)(this,C)[C]+"/cards/likes/".concat(e),{method:"PUT",headers:Object(x.a)(this,k)[k]}).then(Object(x.a)(this,N)[N])}},{key:"dislikeCard",value:function(e){return fetch(Object(x.a)(this,C)[C]+"/cards/likes/".concat(e),{method:"DELETE",headers:Object(x.a)(this,k)[k]}).then(Object(x.a)(this,N)[N])}},{key:"updateAvatar",value:function(e){return fetch(Object(x.a)(this,C)[C]+"/users/me/avatar",{method:"PATCH",headers:Object(x.a)(this,k)[k],body:JSON.stringify(e)}).then(Object(x.a)(this,N)[N])}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-27",headers:{authorization:"37580e29-ca43-4e60-bfc4-9731d6167691","Content-Type":"application/json"}});var w=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,o=e.closeByOverlayClick,s=c.a.useContext(j);c.a.useEffect((function(){p(s.name),_(s.about)}),[t,s]);var i=c.a.useState("\u0416\u0430\u043a \u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),r=Object(l.a)(i,2),u=r[0],p=r[1],b=c.a.useState("\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"),h=Object(l.a)(b,2),m=h[0],_=h[1];return Object(d.jsxs)(f,{closeByOverlayClick:o,onClose:n,isOpen:t,name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({name:u,about:m})},children:[Object(d.jsx)("input",{value:u,onChange:function(e){p(e.target.value)},id:"profile-name-input",type:"text",name:"name",className:"form__input",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(d.jsx)("span",{className:"profile-name-input-error form__input-error"}),Object(d.jsx)("input",{value:m,onChange:function(e){_(e.target.value)},id:"profile-bio-input",type:"text",name:"about",className:"form__input",placeholder:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u0431\u0438\u043e",minLength:"2",maxLength:"200",required:!0}),Object(d.jsx)("span",{className:"profile-bio-input-error form__input-error"})]})};var E=function(e){var t=e.onClose,n=e.isOpen,a=e.onUpdateAvatar,o=e.closeByOverlayClick,s=c.a.useRef("");return c.a.useEffect((function(){s.current.value=""}),[n]),Object(d.jsxs)(f,{closeByOverlayClick:o,onClose:t,isOpen:n,name:"avatar-update",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value})},children:[Object(d.jsx)("input",{id:"avatar-update-input",type:"url",name:"avatar",className:"form__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:s}),Object(d.jsx)("span",{className:"avatar-update-input-error form__input-error"})]})};var L=function(e){var t=e.onClose,n=e.isOpen,a=e.onAddPlace,o=e.closeByOverlayClick,s=c.a.useState(""),i=Object(l.a)(s,2),r=i[0],u=i[1],p=c.a.useState(""),b=Object(l.a)(p,2),j=b[0],h=b[1];return c.a.useEffect((function(){u(""),h("")}),[n]),Object(d.jsxs)(f,{closeByOverlayClick:o,onClose:t,isOpen:n,name:"place-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({name:r,link:j})},children:[Object(d.jsx)("input",{id:"place-name-input",type:"text",name:"name",className:"form__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,value:r,onChange:function(e){u(e.target.value)}}),Object(d.jsx)("span",{className:"place-name-input-error form__input-error"}),Object(d.jsx)("input",{id:"place-link-input",type:"url",name:"link",className:"form__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:j,onChange:function(e){h(e.target.value)}}),Object(d.jsx)("span",{className:"place-link-input-error form__input-error"})]})},B=n(12),T=n(10),P=function(e){var t=e.handleRegister,n=c.a.useState({email:"",password:""}),a=Object(l.a)(n,2),o=a[0],s=a[1],r=function(e){var t=e.target,n=t.name,a=t.value;s(Object(T.a)(Object(T.a)({},o),{},Object(B.a)({},n,a)))};return Object(d.jsxs)("main",{className:"registration",children:[Object(d.jsx)("h2",{className:"registration__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=o.email,a=o.password;t(n,a)},className:"form",children:[Object(d.jsx)("input",{type:"email",id:"email",name:"email",className:"form__email form__input form__input_type_register",placeholder:"Email",required:!0,onChange:r,value:o.email}),Object(d.jsx)("input",{type:"password",id:"password",name:"password",className:"form__password form__input form__input_type_register",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",onChange:r,value:o.password}),Object(d.jsx)("button",{className:"registration__submit form__submit button button_type_save button_type_registration-submit",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsxs)("p",{className:"registration__redirect-text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(d.jsx)(i.b,{to:"/sign-in",className:"registration__redirect-link hover",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},D=function(e){var t=e.handleLogin,n=c.a.useState({email:"",password:""}),a=Object(l.a)(n,2),o=a[0],s=a[1],i=function(e){var t=e.target,n=t.name,a=t.value;s(Object(T.a)(Object(T.a)({},o),{},Object(B.a)({},n,a)))};return Object(d.jsxs)("main",{className:"login",children:[Object(d.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=o.email,a=o.password;t(n,a)},className:"form",children:[Object(d.jsx)("input",{type:"email",id:"email",name:"email",className:"form__email form__input form__input_type_login",placeholder:"Email",required:!0,value:o.email,onChange:i}),Object(d.jsx)("input",{type:"password",id:"password",name:"password",className:"form__password form__input form__input_type_login",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,minLength:"8",value:o.password,onChange:i}),Object(d.jsx)("button",{className:"login__submit form__submit button button_type_save button_type_login-submit",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},U=n.p+"static/media/reg-success.1b6082f8.svg",A=n.p+"static/media/reg-error.df8eddf6.svg",I=function(e){return Object(d.jsx)("div",{onClick:e.closeByOverlayClick,className:e.isOpen?"popup popup_type_".concat(e.name," popup_opened"):"popup popup_type_".concat(e.name),children:Object(d.jsxs)("div",{className:"popup__container popup__container_type_tooltip",children:[Object(d.jsx)("button",{className:" popup__close button button_type_close hover ",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f"}),Object(d.jsx)("img",{className:"popup__registration-image-status",src:e.status?U:A,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"}),Object(d.jsx)("h2",{className:"popup__title popup__title_type_tooltip",children:e.title})]})})},q=n(26),J=["component"],F=function(e){var t=e.component,n=Object(q.a)(e,J);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(T.a)({},n)):Object(d.jsx)(u.a,{to:"./sign-in"})}})},R="https://auth.nomoreparties.co",z=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var H=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=c.a.useState({status:!1,title:""}),s=Object(l.a)(o,2),i=s[0],p=s[1],h=c.a.useState(),v=Object(l.a)(h,2),g=v[0],x=v[1],y=Object(u.g)(),C=c.a.useState({name:"",about:"",_id:""}),k=Object(l.a)(C,2),N=k[0],B=k[1],T=c.a.useState([]),U=Object(l.a)(T,2),A=U[0],q=U[1],J=c.a.useState(!1),H=Object(l.a)(J,2),G=H[0],M=H[1],K=c.a.useState(!1),Q=Object(l.a)(K,2),V=Q[0],W=Q[1],X=c.a.useState(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=c.a.useState(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=c.a.useState(null),oe=Object(l.a)(ce,2),se=oe[0],ie=oe[1];c.a.useEffect((function(){Promise.all([S.getUserData(),S.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];B(n),q(a)})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){ue()}),[]),c.a.useEffect((function(){n&&y.push("/")}),[n]),c.a.useEffect((function(){var e=function(e){"Escape"===e.key&&re()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]);var re=function(){M(!1),W(!1),$(!1),ie(null),ae(!1)},le=function(e){e.target===e.currentTarget&&re()},ue=function(){var e=localStorage.getItem("token");e&&function(e){return fetch("".concat(R,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(z)}(e).then((function(e){e&&(x(e.data.email),a(!0))})).catch((function(e){console.log(e)}))};return Object(d.jsx)(j.Provider,{value:N,children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(b,{email:g,handleLogout:function(){localStorage.removeItem("token"),x(""),a(!1)}}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(F,{exact:!0,path:"/",loggedIn:n,component:m,onEditProfile:function(){M(!0)},onAddPlace:function(){W(!0)},onEditAvatar:function(){$(!0)},handleCardClick:function(e){ie(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===N._id}));S.changeLikeCardStatus(e._id,!t).then((function(t){q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){e.owner._id===N._id&&S.deleteCard(e._id).then((function(){return q((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))},cards:A}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(P,{handleRegister:function(e,t){(function(e,t){return fetch("".concat(R,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(z)})(e,t).then((function(){y.push("/sign-in"),p({status:!0,title:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})})).catch((function(){p({status:!1,title:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})})).finally((function(){ae(!0)}))}})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(D,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(R,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(z)})(e,t).then((function(t){t.token&&(localStorage.setItem("token",t.token),x(e),a(!0),y.push("/"))})).catch((function(e){console.log(e)}))}})}),Object(d.jsx)(u.b,{path:"/",children:n?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/sign-in"})})]}),Object(d.jsx)(_,{}),Object(d.jsx)(w,{closeByOverlayClick:le,onClose:re,isOpen:G,onUpdateUser:function(e){S.saveUserData(e).then((function(e){B(e),re()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(E,{closeByOverlayClick:le,isOpen:Z,onClose:re,onUpdateAvatar:function(e){S.updateAvatar(e).then((function(e){B(e),re()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(L,{closeByOverlayClick:le,isOpen:V,onClose:re,onAddPlace:function(e){S.addNewCard(e).then((function(e){q([e].concat(Object(r.a)(A))),re()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(f,{closeByOverlayClick:le,onClose:re,name:"confirmation",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitButtonText:"\u0414\u0430"}),Object(d.jsx)(O,{closeByOverlayClick:le,card:se,onClose:re}),Object(d.jsx)(I,{closeByOverlayClick:le,name:"tooltip",isOpen:ne,onClose:re,status:i.status,title:i.title})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{basename:"/",children:Object(d.jsx)(H,{})})}),document.getElementById("root")),G()}},[[41,1,2]]]);
//# sourceMappingURL=main.2043a062.chunk.js.map