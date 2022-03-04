(()=>{"use strict";var e={1:function(e,t,n){var o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,i,r=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(e){i={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}return a},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0}),t.CommandManager=void 0;var r=n(923),a=n(386),s=function(){function e(e){this.commands=e,this.wsPendingCommands=[]}return Object.defineProperty(e.prototype,"tenantToken",{get:function(){var e=this.commands.find((function(e){return"init"===e[0]})),t=r.getQueryProps(e);return o(t.args,1)[0]},enumerable:!1,configurable:!0}),e.isWsCommand=function(e){return r.enumHasOption(a.WsWidgetCommand,e)},e.prototype.parsePendingCommands=function(){var t=this;this.setUniqueCommands(),this.commands.forEach((function(n){var i=o(n),r=i[0],a=i.slice(1);e.isWsCommand(r)&&t.wsPendingCommands.push({args:a,command:r})})),this.commands=[]},e.prototype.runPendingCommands=function(){this.parsePendingCommands();for(var e=this.wsPendingCommands.length,t=0;t<e;t++){var n=this.wsPendingCommands.shift();window.STWidgetManager.apply(window,i([n.command],n.args))}},e.prototype.setUniqueCommands=function(){var e=[];this.commands=this.commands.filter((function(t){var n=o(t,1)[0];return!e.includes(n)&&(e.push(n),!0)}))},e}();t.CommandManager=s},790:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IframeBuilder=void 0;var o=n(923),i=function(){function e(e){this.tenantToken=e,this.iframeOrigin="https://webscheduler-widget.st.dev",this.initFailed=function(){console.error("Web-Scheduler initialization failed!")},this.init()}return e.prototype.setIframeStyles=function(){var e=this.frame.style;e.width="100%",e.height="100%"},e.prototype.setIframeContainerStyles=function(){var e=this.frameContainer.style;e.position="fixed",e.zIndex="9999999",e.width="100%",e.height="100%",e.left="0",e.top="0",e.backgroundColor="rgba(0, 0, 0, 0.3)",e.visibility="hidden"},e.prototype.init=function(){if(this.tenantToken){var e=document.createElement("div");this.frameContainer=e,this.frame=document.createElement("iframe");try{this.frame.src=this.iframeOrigin+"?token="+this.tenantToken,this.setIframeStyles(),this.setIframeContainerStyles(),this.frameContainer.appendChild(this.frame),o.executeAfterDomLoad((function(){document.body.insertBefore(e,document.body.firstChild)}))}catch(e){this.initFailed()}}else this.initFailed()},e}();t.IframeBuilder=i},253:function(e,t,n){var o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,i,r=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(e){i={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}return a};Object.defineProperty(t,"__esModule",{value:!0});var i=n(923);window.STWidgetManager=window.STWidgetManager||{};var r=n(1),a=n(790),s=n(386);!function(){var e=window.STWidgetManager.q;i.processCommands(e,s.WsWidgetCommand.Open,i.openFromUrlParams);var t=new r.CommandManager(e),n=new a.IframeBuilder(t.tenantToken),d=n.frame,m=n.iframeOrigin,c=n.frameContainer,l=new s.WsActions(c,d);window.addEventListener("message",(function(e){e.origin===m&&("ready"===e.data&&(window.STWidgetManager=function(){var e=o(arguments),t=e[0],n=e.slice(1);if(r.CommandManager.isWsCommand(t)){var i=s.wsCommandToActionName[t];l[i](n)}},t.runPendingCommands()),"close"===e.data&&window.STWidgetManager(s.WsWidgetCommand.Close))}))}()},923:function(e,t){var n=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,i,r=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(e){i={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.openFromUrlParams=t.processCommands=t.executeAfterDomLoad=t.getQueryProps=t.enumHasOption=void 0,t.enumHasOption=function(e,t){return Object.values(e).includes(t)},t.getQueryProps=function(e){var t=n(e);return{command:t[0],args:t.slice(1)}},t.executeAfterDomLoad=function(e){"complete"===document.readyState||"interactive"===document.readyState?e():window.addEventListener("DOMContentLoaded",(function(){e()}))},t.processCommands=function(e,n,o){return{result:o(e,n),next:t.processCommands}},t.openFromUrlParams=function(e,t){new URLSearchParams(location.search).has("ws")&&e.push([t])}},386:(e,t,n)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.WsActions=t.wsCommandToActionName=t.WsWidgetCommand=void 0;var i,r=n(923);!function(e){e.Open="ws-open",e.Close="ws-close"}(i=t.WsWidgetCommand||(t.WsWidgetCommand={})),t.wsCommandToActionName=((o={})[i.Open]="showModal",o[i.Close]="closeModal",o);var a=function(){function e(e,t){this.iframeContainer=e,this.frame=t,this.initialBodyStyles={},this.disableScroll=function(){var e=window.pageXOffset||document.documentElement.scrollLeft,t=window.pageYOffset||document.documentElement.scrollTop;window.ontouchmove=function(n){return window.scrollTo(e,t),n.stopPropagation(),n.preventDefault(),!1},window.onscroll=function(n){return window.scrollTo(e,t),n.stopPropagation(),n.preventDefault(),!1}},this.enableScroll=function(){window.ontouchmove=function(){return!0},window.onscroll=function(){return!0}},this.setWSQueryParam=function(){var e=window.location.search,t=new URLSearchParams(e);t.has("ws")||(t.set("ws","open"),window.history.pushState(null,null,"?"+t.toString()))},this.removeWSQueryParam=function(){var e=window.location.href.split("?"),t=new URLSearchParams(e[1]);if(t.has("ws")){t.delete("ws");var n=new URLSearchParams(t),o=e[0]+(n.toString()?"?"+n.toString():"");history.pushState(null,"",o)}},this.init()}return e.prototype.init=function(){var e=this.initialBodyStyles;r.executeAfterDomLoad((function(){e.overflow=document.body.style.overflow,e.height=document.body.style.height,e.width=document.body.style.width,e.padding=document.body.style.padding}))},e.prototype[t.wsCommandToActionName[i.Close]]=function(){this.enableScroll(),this.removeWSQueryParam();var e=this.iframeContainer,t=this.initialBodyStyles;e.style.visibility="hidden",document.body.style.overflow=t.overflow,document.body.style.height=t.height,document.body.style.width=t.width,document.body.style.padding=t.padding,this.frame.contentWindow.postMessage({type:"widgetClosed"},"*")},e.prototype[t.wsCommandToActionName[i.Open]]=function(){this.disableScroll(),this.setWSQueryParam(),this.iframeContainer.style.visibility="visible",document.body.style.overflow="hidden",document.body.style.height="100%",document.body.style.width="100%",document.body.style.padding="0",this.frame.contentWindow.postMessage({type:"widgetOpened"},"*")},e}();t.WsActions=a}},t={};!function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}(253)})();