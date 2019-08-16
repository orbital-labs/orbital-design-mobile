webpackJsonp([28],{318:function(n,a,t){n.exports={accordion:t(779),basic:t(786)}},760:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}(),e=t(780),o=function(n){return n&&n.__esModule?n:{default:n}}(e),p=function(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a.default=n,a}(t(0));var c=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.Component),s(a,[{key:"render",value:function(){return p.createElement(o.default,this.props)}}]),a}();a.default=c,c.Panel=e.Panel,c.defaultProps={prefixCls:"am-accordion"},n.exports=a.default},761:function(n,a,t){"use strict";t(23),t(785)},779:function(n,a,t){n.exports={content:[["p","Accordion"]],meta:{order:1,title:{"zh-CN":"\u624b\u98ce\u7434\u6a21\u5f0f","en-US":"Accordion Mode"},filename:"components/accordion/demo/accordion.md",id:"components-accordion-demo-accordion"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Accordion<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">AccordionExmple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> marginBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">accordion</span> <span class="token attr-name">openAnimation</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-accordion<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">1"</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">2"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token keyword">this</span> is panel content2 or other<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">3"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            text text text text text text text text text text text text text text text\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionExmple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=t(0),a=(t(2),o(t(760))),s=o(t(106)),e=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function o(n){return n&&n.__esModule?n:{default:n}}function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}t(761),t(105);var c=function(t){function o(){var n,a,t;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);for(var s=arguments.length,e=Array(s),c=0;c<s;c++)e[c]=arguments[c];return a=t=p(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(e))),t.onChange=function(n){console.log(n)},p(t,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),e(o,[{key:"render",value:function(){return n.createElement("div",{style:{marginTop:10,marginBottom:10}},n.createElement(a.default,{accordion:!0,openAnimation:{},className:"my-accordion",onChange:this.onChange},n.createElement(a.default.Panel,{header:"Title 1"},n.createElement(s.default,{className:"my-list"},n.createElement(s.default.Item,null,"content 1"),n.createElement(s.default.Item,null,"content 2"),n.createElement(s.default.Item,null,"content 3"))),n.createElement(a.default.Panel,{header:"Title 2",className:"pad"},"this is panel content2 or other"),n.createElement(a.default.Panel,{header:"Title 3",className:"pad"},"text text text text text text text text text text text text text text text")))}}]),o}();return n.createElement(c,null)},style:".my-accordion .pad .am-accordion-content-box {\n  padding: 10px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.my-accordion</span> <span class="token class">.pad</span> <span class="token class">.am-accordion-content-box</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},780:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"Panel",function(){return e});var s=t(781);a.default=s.a;var e=s.a.Panel},781:function(n,a,t){"use strict";var s=t(0),e=t.n(s),o=t(3),p=t.n(o),c=t(782),l=t(784),i=t(1),r=t.n(i),u=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function k(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function f(n){var a=n;return Array.isArray(a)||(a=a?[a]:[]),a}var d=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n)),s=t.props,e=s.activeKey,o=s.defaultActiveKey;return"activeKey"in t.props&&(o=e),t.state={openAnimation:t.props.openAnimation||Object(l.a)(t.props.prefixCls),activeKey:f(o)},t}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,s["Component"]),u(a,[{key:"componentWillReceiveProps",value:function(n){"activeKey"in n&&this.setState({activeKey:f(n.activeKey)}),"openAnimation"in n&&this.setState({openAnimation:n.openAnimation})}},{key:"onClickItem",value:function(n){var a=this.state.activeKey;if(this.props.accordion)a=a[0]===n?[]:[n];else{var t=(a=[].concat(function(n){if(Array.isArray(n)){for(var a=0,t=Array(n.length);a<n.length;a++)t[a]=n[a];return t}return Array.from(n)}(a))).indexOf(n);t>-1?a.splice(t,1):a.push(n)}this.setActiveKey(a)}},{key:"getItems",value:function(){var n=this,a=this.state.activeKey,t=this.props,o=t.prefixCls,p=t.accordion,c=t.destroyInactivePanel,l=[];return s.Children.forEach(this.props.children,function(t,s){if(t){var i=t.key||String(s),r=t.props,u=r.header,k=r.headerClass,f=r.disabled,d=!1;d=p?a[0]===i:a.indexOf(i)>-1;var m={key:i,header:u,headerClass:k,isActive:d,prefixCls:o,destroyInactivePanel:c,openAnimation:n.state.openAnimation,accordion:p,children:t.props.children,onItemClick:f?null:function(){return n.onClickItem(i)}};l.push(e.a.cloneElement(t,m))}}),l}},{key:"setActiveKey",value:function(n){"activeKey"in this.props||this.setState({activeKey:n}),this.props.onChange(this.props.accordion?n[0]:n)}},{key:"render",value:function(){var n,a=this.props,t=a.prefixCls,s=a.className,o=a.style,p=a.accordion,c=r()((k(n={},t,!0),k(n,s,!!s),n));return e.a.createElement("div",{className:c,style:o,role:p?"tablist":null},this.getItems())}}]),a}();d.propTypes={children:p.a.any,prefixCls:p.a.string,activeKey:p.a.oneOfType([p.a.string,p.a.arrayOf(p.a.string)]),defaultActiveKey:p.a.oneOfType([p.a.string,p.a.arrayOf(p.a.string)]),openAnimation:p.a.object,onChange:p.a.func,accordion:p.a.bool,className:p.a.string,style:p.a.object,destroyInactivePanel:p.a.bool},d.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},d.Panel=c.a,a.a=d},782:function(n,a,t){"use strict";var s=t(0),e=t.n(s),o=t(3),p=t.n(o),c=t(1),l=t.n(c),i=t(783),r=t(118),u=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function k(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function f(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var d=function(n){function a(){var n,t,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var e=arguments.length,o=Array(e),p=0;p<e;p++)o[p]=arguments[p];return t=s=f(this,(n=a.__proto__||Object.getPrototypeOf(a)).call.apply(n,[this].concat(o))),s.handleItemClick=function(){s.props.onItemClick&&s.props.onItemClick()},s.handleKeyPress=function(n){"Enter"!==n.key&&13!==n.keyCode&&13!==n.which||s.handleItemClick()},f(s,t)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,s["Component"]),u(a,[{key:"render",value:function(){var n,a=this.props,t=a.className,s=a.id,o=a.style,p=a.prefixCls,c=a.header,u=a.headerClass,f=a.children,d=a.isActive,m=a.showArrow,y=a.destroyInactivePanel,h=a.disabled,g=a.accordion,b=a.forceRender,v=l()(p+"-header",k({},u,u)),x=l()((k(n={},p+"-item",!0),k(n,p+"-item-active",d),k(n,p+"-item-disabled",h),n),t);return e.a.createElement("div",{className:x,style:o,id:s},e.a.createElement("div",{className:v,onClick:this.handleItemClick,role:g?"tab":"button",tabIndex:h?-1:0,"aria-expanded":""+d,onKeyPress:this.handleKeyPress},m&&e.a.createElement("i",{className:"arrow"}),c),e.a.createElement(r.a,{showProp:"isActive",exclusive:!0,component:"",animation:this.props.openAnimation},e.a.createElement(i.a,{prefixCls:p,isActive:d,destroyInactivePanel:y,forceRender:b,role:g?"tabpanel":null},f)))}}]),a}();d.propTypes={className:p.a.oneOfType([p.a.string,p.a.object]),id:p.a.string,children:p.a.any,openAnimation:p.a.object,prefixCls:p.a.string,header:p.a.oneOfType([p.a.string,p.a.number,p.a.node]),headerClass:p.a.string,showArrow:p.a.bool,isActive:p.a.bool,onItemClick:p.a.func,style:p.a.object,destroyInactivePanel:p.a.bool,disabled:p.a.bool,accordion:p.a.bool,forceRender:p.a.bool},d.defaultProps={showArrow:!0,isActive:!1,destroyInactivePanel:!1,onItemClick:function(){},headerClass:"",forceRender:!1},a.a=d},783:function(n,a,t){"use strict";var s=t(0),e=t.n(s),o=t(3),p=t.n(o),c=t(1),l=t.n(c),i=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function r(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}var u=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,s["Component"]),i(a,[{key:"shouldComponentUpdate",value:function(n){return this.props.forceRender||this.props.isActive||n.isActive}},{key:"render",value:function(){var n;if(this._isActived=this.props.forceRender||this._isActived||this.props.isActive,!this._isActived)return null;var a=this.props,t=a.prefixCls,s=a.isActive,o=a.children,p=a.destroyInactivePanel,c=a.forceRender,i=a.role,u=l()((r(n={},t+"-content",!0),r(n,t+"-content-active",s),r(n,t+"-content-inactive",!s),n)),k=c||s||!p?e.a.createElement("div",{className:t+"-content-box"},o):null;return e.a.createElement("div",{className:u,role:i},k)}}]),a}();u.propTypes={prefixCls:p.a.string,isActive:p.a.bool,children:p.a.any,destroyInactivePanel:p.a.bool,forceRender:p.a.bool,role:p.a.string},a.a=u},784:function(n,a,t){"use strict";var s=t(128);function e(n,a,t,e){var o=void 0;return Object(s.a)(n,t,{start:function(){a?(o=n.offsetHeight,n.style.height=0):n.style.height=n.offsetHeight+"px"},active:function(){n.style.height=(a?o:0)+"px"},end:function(){n.style.height="",e()}})}a.a=function(n){return{enter:function(a,t){return e(a,!0,n+"-anim",t)},leave:function(a,t){return e(a,!1,n+"-anim",t)}}}},785:function(n,a){},786:function(n,a,t){n.exports={content:[["p","Accordion"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/accordion/demo/basic.md",id:"components-accordion-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Accordion<span class="token punctuation">,</span> List <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">AccordionExmple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> marginBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">defaultActiveKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-accordion<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">1"</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>content <span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">2"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token keyword">this</span> is panel content2 or other<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion.Panel</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title</span> <span class="token attr-name">3"</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            text text text text text text text text text text text text text text text\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion.Panel</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionExmple</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=t(0),a=(t(2),o(t(760))),s=o(t(106)),e=function(){function n(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}return function(a,t,s){return t&&n(a.prototype,t),s&&n(a,s),a}}();function o(n){return n&&n.__esModule?n:{default:n}}function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}t(761),t(105);var c=function(t){function o(){var n,a,t;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);for(var s=arguments.length,e=Array(s),c=0;c<s;c++)e[c]=arguments[c];return a=t=p(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(e))),t.onChange=function(n){console.log(n)},p(t,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),e(o,[{key:"render",value:function(){return n.createElement("div",{style:{marginTop:10,marginBottom:10}},n.createElement(a.default,{defaultActiveKey:"0",className:"my-accordion",onChange:this.onChange},n.createElement(a.default.Panel,{header:"Title 1"},n.createElement(s.default,{className:"my-list"},n.createElement(s.default.Item,null,"content 1"),n.createElement(s.default.Item,null,"content 2"),n.createElement(s.default.Item,null,"content 3"))),n.createElement(a.default.Panel,{header:"Title 2",className:"pad"},"this is panel content2 or other"),n.createElement(a.default.Panel,{header:"Title 3",className:"pad"},"text text text text text text text text text text text text text text text")))}}]),o}();return n.createElement(c,null)},style:".my-accordion .pad .am-accordion-content-box {\n  padding: 10px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.my-accordion</span> <span class="token class">.pad</span> <span class="token class">.am-accordion-content-box</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});