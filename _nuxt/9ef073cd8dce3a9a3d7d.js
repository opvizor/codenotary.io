(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2],{475:function(t,e,o){var content=o(482);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(2).default)("5a892cc4",content,!0,{sourceMap:!1})},477:function(t,e,o){"use strict";o.r(e);var n={name:"PageSectionHeader",props:{title:{type:String,default:""},block:{type:Boolean,default:!1}},computed:{classes:function(){return{"-block":this.block}}}},r=(o(481),o(0)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"section-header",class:this.classes},[this._t("title",[e("h2",[this._v(this._s(this.title))])]),this._v(" "),e("div",{staticClass:"lead"},[this._t("default")],2)],2)}),[],!1,null,null,null);e.default=component.exports},481:function(t,e,o){"use strict";var n=o(475);o.n(n).a},482:function(t,e,o){(e=o(1)(!1)).push([t.i,".section-header{text-align:center;max-width:760px;margin:0 auto 6rem}.section-header h1,.section-header h2,.section-header h3{margin-top:0;font-weight:700;color:#244484}.section-header.-block{max-width:none}",""]),t.exports=e},489:function(t,e,o){"use strict";o.r(e);var n={name:"JoinZtcModal",components:{JoinZtcForm:o(542).default},props:{value:{type:Boolean,default:!1}}},r=o(0),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("i-modal",{staticClass:"ztc-modal",attrs:{size:"lg",value:t.value},on:{input:function(e){return t.$emit("input",e)}}},[o("template",{slot:"header"},[t._v("Join the Consortium")]),t._v(" "),o("join-ztc-form")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{JoinZtcForm:o(542).default})},500:function(t,e,o){var content=o(569);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(2).default)("3ac0a378",content,!0,{sourceMap:!1})},501:function(t,e,o){var content=o(571);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(2).default)("ce196864",content,!0,{sourceMap:!1})},502:function(t,e,o){var content=o(573);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(2).default)("764395fa",content,!0,{sourceMap:!1})},503:function(t,e,o){var content=o(575);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(2).default)("f9f3ac4c",content,!0,{sourceMap:!1})},504:function(t,e,o){var content=o(577);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(2).default)("074c85ba",content,!0,{sourceMap:!1})},505:function(t,e,o){var content=o(579);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(2).default)("3fb7a636",content,!0,{sourceMap:!1})},506:function(t,e,o){var content=o(581);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(2).default)("5106afda",content,!0,{sourceMap:!1})},526:function(t,e,o){"use strict";o.r(e);var n={name:"ZtcHeader",data:function(){return{joinZtcModalVisible:!1}},components:{JoinZtcModal:o(489).default}},r=(o(568),o(0)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("i-header",{attrs:{id:"ztc-header"}},[o("join-ztc-modal",{model:{value:t.joinZtcModalVisible,callback:function(e){t.joinZtcModalVisible=e},expression:"joinZtcModalVisible"}}),t._v(" "),o("img",{staticClass:"ztc-logo",attrs:{src:"/images/ztc/logo.png",alt:"Zero-Trust Consortium"}}),t._v(" "),o("h1",{staticClass:"d6"},[o("span",{staticClass:"_text-primary"},[t._v("Zero-Trust")]),t._v(" Consortium\n    ")]),t._v(" "),o("p",{staticClass:"description lead"},[t._v("\n        A very fast consortium blockchain for the software industry\n        with no transaction fees\n    ")]),t._v(" "),o("p",{staticClass:"action"},[o("i-button",{attrs:{size:"lg",variant:"primary"},on:{click:function(e){t.joinZtcModalVisible=!0}}},[t._v("Join the consortium")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{JoinZtcModal:o(489).default})},527:function(t,e,o){"use strict";o.r(e);var n={},r=(o(570),o(0)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-section",{attrs:{id:"ztc-about-section"}},[o("i-container",[o("i-row",[o("i-column",[o("page-section-header",{attrs:{title:"What is the Zero-Trust Consortium?",block:""}},[t._v("\n                    We are a consortium blockchain proudly and reliably processing hundreds of thousands of transactions daily. Our mission is to provide a trustable, independent, always-on, permissioned blockchain for the software industry with the following attributes:\n                ")])],1)],1),t._v(" "),o("i-row",[o("i-column",{attrs:{lg:"6"}},[o("ul",{staticClass:"list -unstyled"},[o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Decentralized governance and ownership")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Low latency")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Optimized for throughput")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Zero transactional costs")],1)])]),t._v(" "),o("i-column",{attrs:{lg:"6"}},[o("ul",{staticClass:"list -unstyled"},[o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Infinite hash storage")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" No associated crypto-currency")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Globally distributed transparency")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Always on")],1)])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageSectionHeader:o(477).default,PageSection:o(185).default})},528:function(t,e,o){"use strict";o.r(e);var n={},r=(o(572),o(0)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-section",{attrs:{id:"ztc-technology-platform-section"}},[o("i-container",[o("i-row",[o("i-column",[o("page-section-header",{attrs:{title:"The Technology Platform",block:""}},[t._v("\n                    We operate a "),o("a",{attrs:{href:"https://www.parity.io/ethereum/"}},[t._v("Parity Ethereum")]),t._v(" multi-purpose blockchain. It enables our consortium members to develop and operate their own distributed applications without the cost and complex aspects of running their own operations.\n                    Parity is a derivative of Ethereum. It combines the advantages of the public Ethereum chain with key benefits of consortium-based chains.\n                ")])],1)],1),t._v(" "),o("i-row",[o("i-column",{attrs:{lg:"6"}},[o("ul",{staticClass:"list -unstyled"},[o("li",[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/technology-platform/tech-1.png",alt:"ZTC Technology Platform"}})]),t._v(" "),o("li",[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/technology-platform/tech-3.png",alt:"ZTC Technology Platform"}})]),t._v(" "),o("li",[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/technology-platform/tech-4.png",alt:"ZTC Technology Platform"}})])])]),t._v(" "),o("i-column",{attrs:{lg:"6"}},[o("ul",{staticClass:"list -unstyled"},[o("li",[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/technology-platform/tech-2.png",alt:"ZTC Technology Platform"}})]),t._v(" "),o("li",[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/technology-platform/tech-5.png",alt:"ZTC Technology Platform"}})]),t._v(" "),o("li",[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/technology-platform/tech-6.png",alt:"ZTC Technology Platform"}})])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageSectionHeader:o(477).default,PageSection:o(185).default})},529:function(t,e,o){"use strict";o.r(e);var n={},r=(o(574),o(0)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("page-section",{attrs:{id:"ztc-monitoring-section"}},[e("i-container",[e("i-row",[e("i-column",[e("page-section-header",{attrs:{title:"Monitoring the Network",block:""}},[this._v("\n                    The ZTC has implemented a monitoring infrastructure using "),e("a",{attrs:{href:"http://www.opvizor.com/"}},[this._v("Opvizor Performance Analyzer")]),this._v(" to ensure nodes and their configurations at runtime, as well as mining activities of the blockchain and the blocks themselve\n                ")])],1)],1),this._v(" "),e("i-row",[e("i-column",{staticClass:"_text-center"},[e("img",{staticClass:"image -responsive",attrs:{id:"ztc-monitoring-image",src:"/images/ztc/monitoring.png",alt:"Monitoring"}})])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageSectionHeader:o(477).default,PageSection:o(185).default})},530:function(t,e,o){"use strict";o.r(e);var n={},r=(o(576),o(0)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-section",{attrs:{id:"ztc-consortium-blockchain-section"}},[o("i-container",[o("i-row",[o("i-column",[o("page-section-header",{attrs:{title:"The Consortium Blockchain",block:""}},[t._v("\n                    The Zero-Trust Consortium does not use the public Etherum Blockchain because of the current limitations in scalability due to high latency and very high costs involved to store data and run distributed applications.\n                ")]),t._v(" "),o("p",[t._v("\n                    The Zero-Trust Consortium runs a worldwide, distributed Ethereum blockchain using the Parity project. Built for mission-critical use service providers, and exchanges that need fast synchronization and maximum uptime.\n                ")]),t._v(" "),o("p",[t._v("\n                    Parity Ethereum provides the core infrastructure essential for speedy and reliable services.\n                ")]),t._v(" "),o("ul",{staticClass:"list -unstyled"},[o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Clean, modular codebase for easy customisation")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Advanced CLI-based client")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Minimal memory and storage footprint")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Synchronize in hours, not days with Warp Sync")],1),t._v(" "),o("li",[o("fa",{attrs:{icon:"check-square"}}),t._v(" Modular for light integration into your service or product")],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageSectionHeader:o(477).default,PageSection:o(185).default})},531:function(t,e,o){"use strict";o.r(e);var n={},r=(o(578),o(0)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-section",{attrs:{id:"ztc-members-section"}},[o("i-container",[o("i-row",[o("i-column",[o("page-section-header",{attrs:{title:"Founding Members",block:""}})],1)],1),t._v(" "),o("i-row",{staticClass:"ztc-members-list"},[o("i-column",{attrs:{sm:"4",md:"3"}},[o("nuxt-link",{attrs:{to:{name:"about"}}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/vchain.png",alt:"vChain"}})])],1),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.acronis.com/en-us/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/acronis.png",alt:"Acronis"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://chainstack.com/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/chainstack.png",alt:"Chainstack"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"http://www.ta.capital/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/tacapital.png",alt:"TA Capital"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.opvizor.com/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/opvizor.png",alt:"Opvizor"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.dzlabs.ch/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/dzlabs.png",alt:"DZlabs"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.c99.at/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/c99.png",alt:"C99"}})])])],1),t._v(" "),o("i-row",[o("i-column",[o("page-section-header",{staticClass:"_margin-top-5",attrs:{title:"Non-Founding Members",block:""}})],1)],1),t._v(" "),o("i-row",{staticClass:"ztc-members-list"},[o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.dogado.de/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/dogado.png",alt:"Dogado"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.tinaba.bancaprofilo.it/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/tinaba.png",alt:"tinaba"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.greentube.com/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive -vertical",attrs:{src:"/images/ztc/members/greentube.png",alt:"green tube"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.cloud-r.eu/en",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/cloudr.png",alt:"cloud-R"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.uni-leipzig.de/en/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/unileipzig.png",alt:"Uni Leipzig"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.webscience.it/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/webscience.png",alt:"webscience"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"http://www.barrco-llc.com/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/barrco.png",alt:"barrco"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.wu.ac.at/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive -vertical",attrs:{src:"/images/ztc/members/wienuniversity.png",alt:"Wien University"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://www.esoftthings.com/en/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive -vertical",attrs:{src:"/images/ztc/members/esoftthings.jpg",alt:"eSoftThings"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"https://talixo.com/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive",attrs:{src:"/images/ztc/members/talixo.png",alt:"talixo"}})])]),t._v(" "),o("i-column",{attrs:{sm:"4",md:"3"}},[o("a",{attrs:{href:"http://chemiumcorp.com/",rel:"nofollow"}},[o("img",{staticClass:"image -responsive -vertical",attrs:{src:"/images/ztc/members/chemiumcorp.png",alt:"Chemium Corp"}})])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageSectionHeader:o(477).default,PageSection:o(185).default})},532:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{joinZtcModalVisible:!1}},components:{JoinZtcModal:o(489).default}},r=(o(580),o(0)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page-section",{attrs:{id:"ztc-join-section"}},[o("join-ztc-modal",{model:{value:t.joinZtcModalVisible,callback:function(e){t.joinZtcModalVisible=e},expression:"joinZtcModalVisible"}}),t._v(" "),o("i-container",[o("i-row",[o("i-column",[o("page-section-header",{staticClass:"_margin-bottom-2",attrs:{title:"Join the Zero-Trust Consortium",block:""}}),t._v(" "),o("i-button",{attrs:{size:"lg",variant:"light"},on:{click:function(e){t.joinZtcModalVisible=!0}}},[t._v("Join the Consortium")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{JoinZtcModal:o(489).default,PageSectionHeader:o(477).default,PageSection:o(185).default})},542:function(t,e,o){"use strict";o.r(e);o(21),o(10),o(165),o(237),o(186);var n={name:"ContactForm",mounted:function(){!function(){if(-1!==window.location.search.search("excludeform"))return!1;for(var t=function(element,t,e){if(element.addEventListener)element.addEventListener(t,e);else{var o=element["on"+t];element["on"+t]=function(){o.apply(this,arguments),e.apply(this,arguments)}}},e=document.getElementById("_form_2_"),o=e.querySelectorAll("input, select, textarea"),n=[],r=!1,c=function(t){var e=new RegExp("[?&]"+t+"=([^&#]*)","i").exec(window.location.href);return null!=e&&decodeURIComponent(e[1])},i=0;i<o.length;i++){var l=new RegExp("field\\[(\\d+)\\]").exec(o[i].name);o[i].dataset.name=null!=l?window.cfields[l[1]]:o[i].name;var m=c(o[i].dataset.name);if(m){if("false"===o[i].dataset.autofill)continue;"radio"==o[i].type||"checkbox"==o[i].type?o[i].value==m&&(o[i].checked=!0):o[i].value=m}}var d=function(t,text){var e=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),c={};return"radio"!=t.type&&"checkbox"!=t.type?(e.className="_error",o.className="_error-arrow",r.className="_error-inner",r.innerHTML=text,e.appendChild(o),e.appendChild(r),t.parentNode.appendChild(e)):(e.className="_error-inner _no_arrow",e.innerHTML=text,t.parentNode.insertBefore(e,t),c.no_arrow=!0),c.tip=e,c.elem=t,n.push(c),c},f=function(t){var rect=t.elem.getBoundingClientRect(),e=document.documentElement,o=rect.top-((window.pageYOffset||e.scrollTop)-(e.clientTop||0));t.tip.className=o<40?t.tip.className.replace(/ ?(_above|_below) ?/g,"")+" _below":t.tip.className.replace(/ ?(_above|_below) ?/g,"")+" _above"},h=function(){for(var i=0;i<n.length;i++)n[i].no_arrow||f(n[i])},v=function(t,o){var r=null,c=t.value,l=!0;if(o&&function(t){for(var i=0;i<n.length;i++)if(n[i].elem===t)return n[i].tip.parentNode.removeChild(n[i].tip),void n.splice(i,1)}(t),"checkbox"!=t.type&&(t.className=t.className.replace(/ ?_has_error ?/g,"")),null!==t.getAttribute("required"))if("radio"==t.type||"checkbox"==t.type&&/any/.test(t.className)){if(!((m=e.elements[t.name])instanceof NodeList||m instanceof HTMLCollection)||m.length<=1)l=t.checked;else{l=!1;for(var i=0;i<m.length;i++)m[i].checked&&(l=!0)}l||(r=d(t,"Please select an option."))}else if("checkbox"==t.type){var m=e.elements[t.name],h=!1,v=[];for(l=!0,i=0;i<m.length;i++)if(null!==m[i].getAttribute("required")){if(!h&&m[i]!==t)return!0;h=!0,m[i].className=m[i].className.replace(/ ?_has_error ?/g,""),m[i].checked||(l=!1,m[i].className=m[i].className+" _has_error",v.push("Checking %s is required".replace("%s",m[i].value)))}l||(r=d(t,v.join("<br/>")))}else if("SELECT"==t.tagName){var _=!0;if(t.multiple){for(_=!1,i=0;i<t.options.length;i++)if(t.options[i].selected){_=!0;break}}else for(i=0;i<t.options.length;i++)t.options[i].selected&&!t.options[i].value&&(_=!1);_||(t.className=t.className+" _has_error",l=!1,r=d(t,"Please select an option."))}else null!=c&&""!==c||(t.className=t.className+" _has_error",l=!1,r=d(t,"This field is required."));return l&&"email"==t.name&&(c.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)||(t.className=t.className+" _has_error",l=!1,r=d(t,"Enter a valid email address."))),l&&/date_field/.test(t.className)&&(c.match(/^\d\d\d\d-\d\d-\d\d$/)||(t.className=t.className+" _has_error",l=!1,r=d(t,"Enter a valid date."))),r&&f(r),l},_=function(t){return null!==t.getAttribute("required")||"email"===t.name&&""!==t.value},w=function(c){e.querySelector("._form_error");var l=!0;if(!r){r=!0;for(var i=0,m=o.length;i<m;i++){var input=o[i];_(input)&&("text"==input.type?(t(input,"blur",(function(){this.value=this.value.trim(),v(this,!0)})),t(input,"input",(function(){v(this,!0)}))):"radio"==input.type||"checkbox"==input.type?function(o){for(var n=e.elements[o.name],i=0;i<n.length;i++)t(n[i],"click",(function(){v(o,!0)}))}(input):"SELECT"==input.tagName?t(input,"change",(function(){v(this,!0)})):"textarea"==input.type&&t(input,"input",(function(){v(this,!0)})))}}for(function(){for(var i=0;i<n.length;i++)n[i].tip.parentNode.removeChild(n[i].tip);n=[]}(),i=0,m=o.length;i<m;i++){var d=o[i];_(d)&&("select"!==d.tagName.toLowerCase()&&(d.value=d.value.trim()),v(d)||(l=!1))}return!l&&c&&c.preventDefault(),h(),l};t(window,"resize",h),t(window,"scroll",h),window.recaptcha_callback=function(){var t=document.getElementsByClassName("g-recaptcha");for(var i in t){var e="recaptcha_"+i;t[i].id=e;var o=document.getElementById(e);if(null!=o){var n=o.getAttribute("data-sitekey"),r=o.getAttribute("data-stoken");grecaptcha.render(e,{sitekey:n,stoken:r})}}},_load_script("//www.google.com/recaptcha/api.js?onload=recaptcha_callback&render=explicit"),window._old_serialize=null,"undefined"!=typeof serialize&&(window._old_serialize=window.serialize),_load_script("//d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js",(function(){window._form_serialize=window.serialize,window._old_serialize&&(window.serialize=window._old_serialize)})),t(e,"submit",(function(t){if(t.preventDefault(),w()){document.querySelector("#_form_2_submit").disabled=!0;var o=_form_serialize(document.getElementById("_form_2_")),n=e.querySelector("._form_error");n&&n.parentNode.removeChild(n),_load_script("https://vchain.activehosted.com/proc.php?"+o+"&jsonp=true")}return!1}))}()}},r=o(0),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"_form _form_2 _inline-form  _dark",attrs:{id:"_form_2_",method:"POST",action:"https://vchain.activehosted.com/proc.php",novalidate:""}},[o("input",{attrs:{type:"hidden",name:"u",value:"2"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"f",value:"2"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"s"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"c",value:"0"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"m",value:"0"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"act",value:"sub"}}),t._v(" "),o("input",{attrs:{type:"hidden",name:"v",value:"2"}}),t._v(" "),o("div",{staticClass:"_form-content"},[o("i-form-group",{staticClass:"_x97690377"},[o("i-form-label",{staticClass:"_form-label"},[t._v("\n                Full Name*\n            ")]),t._v(" "),o("i-input",{attrs:{type:"text",name:"fullname",placeholder:"Type your name"}})],1),t._v(" "),o("i-form-group",{staticClass:"_x53693015"},[o("i-form-label",{staticClass:"_form-label"},[t._v("\n                Email*\n            ")]),t._v(" "),o("i-input",{attrs:{type:"text",name:"email",placeholder:"Type your email",required:""}})],1),t._v(" "),o("i-form-group",{staticClass:"_x65882383"},[o("i-form-label",{staticClass:"_form-label"},[t._v("\n                Phone\n            ")]),t._v(" "),o("i-input",{attrs:{type:"text",name:"phone",placeholder:"Type your phone number"}})],1),t._v(" "),o("i-form-group",{staticClass:"_field1"},[o("i-form-label",{staticClass:"_form-label"},[t._v("\n                Message\n            ")]),t._v(" "),o("i-textarea",{attrs:{name:"field[1]",placeholder:""}})],1),t._v(" "),o("i-form-group",[o("i-form-label",[t._v("\n                Please verify your request*\n            ")]),t._v(" "),o("div",{staticClass:"g-recaptcha",attrs:{"data-sitekey":"6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go"}})],1),t._v(" "),o("i-form-group",[o("i-button",{attrs:{id:"_form_2_submit",variant:"primary",block:"",type:"submit"}},[t._v("\n                Submit\n            ")])],1),t._v(" "),o("div",{staticClass:"_clear-element"})],1),t._v(" "),o("div",{staticClass:"lead _form-thank-you _text-center",staticStyle:{display:"none"}})])}),[],!1,null,null,null);e.default=component.exports},568:function(t,e,o){"use strict";var n=o(500);o.n(n).a},569:function(t,e,o){(e=o(1)(!1)).push([t.i,"#ztc-header{background-color:#fff;background-image:url(/images/ztc/header.jpg);background-position:100% 0;background-size:75% auto;text-align:left}#ztc-header img{height:140px;width:auto;display:block;margin:0 0 1.5rem}#ztc-header h1{font-weight:700}#ztc-header .description{margin:2rem 0;max-width:35rem}@media screen and (max-width:767px){#ztc-header{background-image:none;text-align:center}#ztc-header img{margin-left:auto;margin-right:auto}}@media screen and (min-width:2280px){#ztc-header{background-size:1560px auto}}",""]),t.exports=e},570:function(t,e,o){"use strict";var n=o(501);o.n(n).a},571:function(t,e,o){(e=o(1)(!1)).push([t.i,"#ztc-about-section{text-align:left;background-color:#f8f9fa}#ztc-about-section h2{text-align:center}#ztc-about-section .section-header{text-align:left;margin-bottom:3rem}#ztc-about-section .list{font-size:1.2rem;margin-bottom:0}#ztc-about-section .list .svg-inline--fa{margin-right:.5rem;color:#5fb072}",""]),t.exports=e},572:function(t,e,o){"use strict";var n=o(502);o.n(n).a},573:function(t,e,o){(e=o(1)(!1)).push([t.i,"#ztc-technology-platform-section{text-align:center;background-color:#fff}#ztc-technology-platform-section .list{font-size:1.2rem}#ztc-technology-platform-section .list .svg-inline--fa{margin-right:.5rem;color:#5fb072}",""]),t.exports=e},574:function(t,e,o){"use strict";var n=o(503);o.n(n).a},575:function(t,e,o){(e=o(1)(!1)).push([t.i,"#ztc-monitoring-image{max-width:800px}",""]),t.exports=e},576:function(t,e,o){"use strict";var n=o(504);o.n(n).a},577:function(t,e,o){(e=o(1)(!1)).push([t.i,"#ztc-consortium-blockchain-section{text-align:left;background-color:#f8f9fa}#ztc-consortium-blockchain-section h2{text-align:center}#ztc-consortium-blockchain-section .section-header{text-align:left;margin-bottom:1rem}#ztc-consortium-blockchain-section .list{font-size:1.2rem;margin-bottom:0;padding-left:1.2rem}#ztc-consortium-blockchain-section .list .svg-inline--fa{margin-right:.5rem;color:#5fb072}",""]),t.exports=e},578:function(t,e,o){"use strict";var n=o(505);o.n(n).a},579:function(t,e,o){(e=o(1)(!1)).push([t.i,"#ztc-members-section{background-color:#fff}.ztc-members-list,.ztc-members-list .column{display:flex;justify-content:center}.ztc-members-list .column{align-items:center}.ztc-members-list .image{max-width:100%;width:150px;height:auto;margin:0 auto 1rem}.ztc-members-list .image.-vertical{width:100px}",""]),t.exports=e},580:function(t,e,o){"use strict";var n=o(506);o.n(n).a},581:function(t,e,o){(e=o(1)(!1)).push([t.i,"#ztc-join-section{text-align:center;background-color:#244484}#ztc-join-section h2{color:#fff}",""]),t.exports=e},615:function(t,e,o){"use strict";o.r(e);var n=o(526),r=o(527),c=o(528),l=o(529),m=o(530),d=o(531),f=o(532),h={components:{ZtcHeader:n.default,ZtcAboutSection:r.default,ZtcTechnologyPlatformSection:c.default,ZtcMonitoringSection:l.default,ZtcConsortiumBlockchainSection:m.default,ZtcMembersSection:d.default,ZtcJoinSection:f.default}},v=o(0),component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("ztc-header"),this._v(" "),e("ztc-about-section"),this._v(" "),e("ztc-technology-platform-section"),this._v(" "),e("hr"),this._v(" "),e("ztc-monitoring-section"),this._v(" "),e("ztc-consortium-blockchain-section"),this._v(" "),e("ztc-members-section"),this._v(" "),e("ztc-join-section")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ZtcHeader:o(526).default,ZtcAboutSection:o(527).default,ZtcTechnologyPlatformSection:o(528).default,ZtcMonitoringSection:o(529).default,ZtcConsortiumBlockchainSection:o(530).default,ZtcMembersSection:o(531).default,ZtcJoinSection:o(532).default})}}]);