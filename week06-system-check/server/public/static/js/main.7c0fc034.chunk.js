(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(9),r=n.n(o),c=(n(15),n(2)),i=n(3),s=n(5),u=n(4),m=n(6),p=n(1),d=(n(8),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h1",null,"System Check")))}}]),t}(a.Component)),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).copyFile=function(){var e=Object(p.a)(Object(p.a)(n));fetch("/script-pusher/copy-file").then(function(e){return e.json()}).then(function(t){console.log("parsed json",t.allData),e.setState({allData:t.allData})}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})},n.state={allData:"unknown"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("fieldset",null,l.a.createElement("div",{className:"elf-form-field"},l.a.createElement("legend",null,"Services"),l.a.createElement("input",{type:"radio",name:"app-choice","data-endpoint":"0",value:"CpuInfo",id:"elf-radio-cpu",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"elf-radio-cpu"},"CpuInfo"),l.a.createElement("input",{type:"radio",name:"app-choice","data-endpoint":"0",value:"VersionCheck",id:"elf-radio-version",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"elf-radio-version"},"Version Info")),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Run System Script")))));return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement("main",null,l.a.createElement("section",null,e),l.a.createElement("section",null,l.a.createElement("pre",null,this.state.allData)),l.a.createElement("button",{onClick:this.runFoo},"Run Foo")),l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 by Sean Newman")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){}},[[10,2,1]]]);
//# sourceMappingURL=main.7c0fc034.chunk.js.map