(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(e,n,t){"use strict";t.r(n);var r=t("mXGw"),a=t.n(r),o=t("xARA"),i=t.n(o),c=(t("hi3g"),t("lYjL"),t("lAJ5"),t("D/wG"),t("WB5j"),t("W0B4")),u=t.n(c),l=t("UutA"),s=t("AEdO");function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(){var e=p(["\ndisplay:block;\nfont-size:18px;\nfont-weight: 700;\n\n"]);return d=function(){return e},e}function f(){var e=p(["\nborder-style: solid;\nborder-width: 2px\nborder-color: black;\npadding: 10px;\n&>*{margin-top:10px}\n"]);return f=function(){return e},e}function p(e,n){return n||(n=e.slice(0)),e.raw=n,e}var b=l.a.form(f()),v=l.a.label(d()),C=function(e){var n,t;function r(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return h(m(n=e.call.apply(e,[this].concat(r))||this),"state",{name:"",number:""}),h(m(n),"handleChange",(function(e){var t,r=e.target,a=r.name,o=r.value;n.setState(((t={})[a]=o,t))})),h(m(n),"handleSubmit",(function(e){e.preventDefault();var t=n.state,r=t.name,a=t.number;if(r){var o={id:Object(s.v4)(),name:r,number:a};n.props.handleCheckContact(o),n.setState((function(){return{name:"",number:""}}))}})),n}return t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,r.prototype.render=function(){var e=this.state,n=e.name,t=e.number;return a.a.createElement(b,{onSubmit:this.handleSubmit},a.a.createElement(v,{htmlFor:Object(s.v4)()},"Name",a.a.createElement("input",{type:"text",placeholder:"Enter Name",name:"name",value:n,onChange:this.handleChange})),a.a.createElement(v,{htmlFor:Object(s.v4)()},"Number",a.a.createElement("input",{type:"text",placeholder:"Enter phone number",name:"number",value:t,onChange:this.handleChange})),a.a.createElement("button",{type:"submit"},"Add contact"))},r}(r.Component);function g(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n&:focus{outline-style: solid;\noutline-color: blue;}\n"]);return g=function(){return e},e}C.propTypes={handleChange:u.a.func.isRequired,handleCheckContact:u.a.func.isRequired};var y=l.a.input(g());function E(e){var n=e.handleChange,t=e.filter;return a.a.createElement(y,{type:"text",placeholder:"Enter Name for serch",name:"filter",value:t,onChange:n})}E.propTypes={handleChange:u.a.func.isRequired,filter:u.a.string.isRequired};var w=E;t("lmye");function k(){var e=x(["\ndisplay: block;\n&:not(:last-child){margin-bottom:16px}\n"]);return k=function(){return e},e}function R(){var e=x(["\ncursor:pointer;\n&:hover{ background: blue}\n"]);return R=function(){return e},e}function j(){var e=x(["\nmargin-right:6px;\n"]);return j=function(){return e},e}function x(e,n){return n||(n=e.slice(0)),e.raw=n,e}var O=l.a.span(j()),S=l.a.button(R()),A=l.a.li(k());function D(e){var n=e.handleDeleteContact,t=e.contacts;return a.a.createElement("ul",{className:"contactList"},t.map((function(e){return a.a.createElement(A,{key:Object(s.v4)()},a.a.createElement(O,null,e.name," : ",e.number),a.a.createElement(S,{type:"button",onClick:function(){return n(e.id)}},"Delete"))})))}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}D.propTypes={contacts:u.a.arrayOf(u.a.shape({id:u.a.string.isRequired,name:u.a.string.isRequired,number:u.a.string})),handleDeleteContact:u.a.func,filter:u.a.string},D.defaultProps={contacts:[{number:"empty"}]};var q=function(e){var n,t;function r(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return L(_(n=e.call.apply(e,[this].concat(r))||this),"state",{contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Rita Simpson",number:"459-12-56"},{id:"id-6",name:"Harry Kline",number:"443-89-12"}],filter:""}),L(_(n),"handleChange",(function(e){var t,r=e.target,a=r.name,o=r.value;n.setState(((t={})[a]=o,t))})),L(_(n),"handleDeleteContact",(function(e){var t=n.state.contacts.filter((function(n){return n.id!==e}));n.setState((function(){return{contacts:t}}))})),L(_(n),"handleCheckContact",(function(e){n.state.contacts.some((function(n){return n.name.toLocaleLowerCase()===e.name.toLowerCase()}))?alert(elem.name+" is already in сontacts"):n.setState((function(n){return{contacts:[].concat(n.contacts,[e])}}))})),L(_(n),"handleFilterContact",(function(){var e=n.state,t=e.filter,r=e.contacts;return t?r.filter((function(e){if(e.name.substr(0,t.length).toLowerCase()===t.toLowerCase())return e.name})):r})),n}return t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,r.prototype.render=function(){var e=this.state.filter;return a.a.createElement("div",null,a.a.createElement("h1",null,"Phonebook"),a.a.createElement(C,{handleChange:this.handleChange,handleCheckContact:this.handleCheckContact}),a.a.createElement("h2",null,"Contacts"),a.a.createElement(w,{handleChange:this.handleChange,filter:e}),a.a.createElement(D,{contacts:this.handleFilterContact(),handleDeleteContact:this.handleDeleteContact}))},r}(r.Component);i.a.render(a.a.createElement(q,null),document.getElementById("root"))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.e84af7c1612b857dbc48.js.map