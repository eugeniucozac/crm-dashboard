(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19],{342:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(66),c=t(44),l=t(38),o=t(3),u=t.n(o),p=t(4),i=t(20),d=t(14),m=t(15),w=t(17),h=t(16),b=t(13),E=t(130),f=t(126),v=t(28),g=t(22),j=t(21),y=function(e){Object(w.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=a.call.apply(a,[this].concat(s))).state={password:"",password2:""},e.onChange=function(a){e.setState(Object(i.a)({},a.target.name,a.target.value))},e.onSubmit=function(){var a=Object(p.a)(u.a.mark((function a(t){var r,s,n,c,l,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),r=e.props,s=r.changePassword,n=r.userId,c=e.state,l=c.password,o=c.password2,a.next=5,s(n,{password:l,password2:o});case 5:e.setState({password:"",password2:""});case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(m.a)(t,[{key:"componentWillUnmount",value:function(){this.props.resetErrors()}},{key:"render",value:function(){var e=this.state,a=e.password,t=e.password2,r=this.props,l=r.error,o=r.success;return s.a.createElement(E.a,{noValidate:!0,onSubmit:this.onSubmit},s.a.createElement(j.a,{type:"password",name:"password",value:a,label:"New Password",placeholder:"New Password",onChange:this.onChange,success:o&&"Password was changed",error:l&&l.data.password}),s.a.createElement(j.a,{type:"password",name:"password2",value:t,label:"Repeat New Password",placeholder:"Repeat New Password",onChange:this.onChange,error:l&&l.data.password2}),s.a.createElement(n.a,null,s.a.createElement(c.a,null,s.a.createElement(f.a,{variant:"primary",type:"submit",className:"w-25 float-right"},"Change"))))}}]),t}(r.Component),N=Object(b.b)((function(e){return{success:Object(g.b)(e),error:Object(g.a)(e),userId:Object(g.d)(e)}}),{changePassword:v.a,resetErrors:v.f})(y);a.default=function(){return s.a.createElement("section",{className:"main"},s.a.createElement(n.a,null,s.a.createElement(c.a,null,s.a.createElement(l.a,null)),s.a.createElement(c.a,{lg:"11",className:"container-left"},s.a.createElement(n.a,null,s.a.createElement(c.a,{lg:"6"},s.a.createElement("div",{className:"ms-panel"},s.a.createElement("div",{className:"ms-panel-header"},s.a.createElement("h6",null,"Change Password")),s.a.createElement("div",{className:"ms-panel-body"},s.a.createElement(N,null))))))))}}}]);
//# sourceMappingURL=19.5b33adac.chunk.js.map