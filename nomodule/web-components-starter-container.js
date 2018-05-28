System.register(["./utilities.js","./web-components-starter-boolean-radio.js","./web-components-starter-input.js","./web-components-starter-select.js","./chunk-bb24755f.js","./template.js","./template2.js","./template3.js"],function(t,e){"use strict";var n,o,s,a,r,i,c,u;return{setters:[function(e){n=e.loadComponent},function(e){o=e.default},function(e){s=e.default},function(e){a=e.default},function(e){r=e.a,i=e.b,c=e.c,u=e.d},function(){},function(){},function(){}],execute:function(){o(),a(),s();var e=function(e){function n(){r(this,n);var e=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));e.service=e.service.bind(e),e.customPreventDefault=e.customPreventDefault.bind(e);var t=document.createElement("div");return t.innerHTML='\n  <style>\n    :host {\n      display: block;\n    }\n\n    h1 {\n      padding-bottom: 1rem;\n    }\n  </style>\n\n  <h1>Web Components Starter!</h1>\n  <form>\n    <web-components-starter-select\n      tabindex="1"\n      type="selectOptionOne"\n      options=\'[{\n        "text": "Select One",\n        "value": ""\n      },{\n        "text": "Option One",\n        "value": "optionOne"\n      },{\n        "text": "Option Two",\n        "value": "optionTwo"\n      },{\n        "text": "Option Three",\n        "value": "optionThree"\n      }]\'\n    >\n      <span slot="label">Choose an option</span>\n    </web-components-starter-select>\n\n    <web-components-starter-input tabindex="2" type="inputOne">\n      <span slot="label">An input</span>\n    </web-components-starter-input>\n\n    <web-components-starter-boolean-radio tabindex="3">\n      <span slot="label">A choice</span>\n    </web-components-starter-boolean-radio>\n\n    <button tabindex="4" type="submit">Submit</button>\n  </form>\n',e.attachShadow({mode:"open"}).appendChild(t).querySelector("button").addEventListener("click",e.handleButtonClick.bind(e)),e}return c(n,e),i(n,[{key:"service",value:function(e){var t=e.host,n=e.payload;return console.log("sending to "+t+": ",n),fetch("https://"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){if(e.ok)return e.json()}).then(function(e){console.log("result: ",e)})}},{key:"customPreventDefault",value:function(){var e=document.createEvent("CustomEvent");e.initCustomEvent("custom",!0,!0,{}),e.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})},e.preventDefault()}},{key:"handleButtonClick",value:function(e){e&&(e.preventDefault(),this.customPreventDefault(),this.service({host:"example.com",payload:{selectOptionOne:this.shadowRoot.querySelector('web-components-starter-select[type="selectOptionOne"]').value,inputOne:parseInt(this.shadowRoot.querySelector('web-components-starter-input[type="inputOne"]').value),booleanOne:1===Number(this.shadowRoot.querySelector("web-components-starter-boolean-radio").value)}}).catch(function(e){console.log("error:",e)}))}}]),n}(HTMLElement);t("default",n({customElements:customElements,tagName:"web-components-starter-container",element:e}))}}});
