(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var l,i=r(a("PJYZ")),n=r(a("VbXa")),s=r(a("8OQS")),d=r(a("pVnL")),c=r(a("q1tI")),o=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,l=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),l&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=m(t);return p[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,S=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,l=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:l,srcSet:r,sizes:i}),a&&c.default.createElement("source",{media:l,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function z(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,l=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(l?'media="'+l+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var V=function(e,t){var a=(void 0===l&&"undefined"!=typeof window&&window.IntersectionObserver&&(l=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),l);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",l=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",o=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+c+n+s+a+r+t+i+l+d+o+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,l=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=c.default.createElement(x,(0,d.default)({ref:t,src:a},i,{ariaHidden:n}));return r.length>1?c.default.createElement("picture",null,l(r),s):s})),x=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,l=e.src,i=e.style,n=e.onLoad,o=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:l},h,{onLoad:n,onError:o,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));x.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=V(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,l=e.style,i=void 0===l?{}:l,n=e.imgStyle,s=void 0===n?{}:n,o=e.placeholderStyle,f=void 0===o?{}:o,m=e.placeholderClassName,p=e.fluid,g=e.fixed,E=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,N=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:V?1:0,transition:O?"opacity "+v+"ms":"none"},s),T="boolean"==typeof E?"lightgray":E,H={transitionDelay:v+"ms"},k=(0,d.default)({opacity:this.state.imgLoaded?0:1},O&&H,s,f),P={title:t,alt:this.state.isVisible?"":a,style:k,className:m,itemProp:S};if(p){var A=p,M=h(p);return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),T&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&H)}),M.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:P,imageVariants:A,generateSources:I}),M.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:P,imageVariants:A,generateSources:z}),this.state.isVisible&&c.default.createElement("picture",null,y(A),c.default.createElement(x,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:w},M,{imageVariants:A}))}}))}if(g){var q=g,W=h(g),j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},i);return"inherit"===i.display&&delete j.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},T&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:T,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},O&&H)}),W.base64&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:q,generateSources:I}),W.tracedSVG&&c.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:q,generateSources:z}),this.state.isVisible&&c.default.createElement("picture",null,y(q),c.default.createElement(x,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:N})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:w},W,{imageVariants:q}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string}),T=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string,media:o.default.string,maxWidth:o.default.number,maxHeight:o.default.number});function H(e){return function(t,a,r){var l;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");o.default.checkPropTypes(((l={})[a]=e,l),t,"prop",r)}}O.propTypes={resolutions:C,sizes:T,fixed:H(o.default.oneOfType([C,o.default.arrayOf(C)])),fluid:H(o.default.oneOfType([T,o.default.arrayOf(T)])),fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string,loading:o.default.oneOf(["auto","lazy","eager"]),draggable:o.default.bool};var k=O;t.default=k},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o})),a.d(t,"query",(function(){return u}));var r=a("q1tI"),l=a.n(r),i=a("9eSz"),n=a.n(i),s=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"site"},l.a.createElement("a",{href:"base-index.html"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"225.65",height:"46.59"},l.a.createElement("defs",null),l.a.createElement("desc",null,"ESSENTIALS"),l.a.createElement("path",{fill:"#477294",d:"M52.6 25.36h8.2v-4.7h-8.2V18.4h9.34v-4.93H46.2v19.4h16.1V27.9h-9.7v-2.54zm17.77-6.16c0-.67.6-1.22 2.52-1.22a12 12 0 0 1 5.4 1.44l2-4.74A15.58 15.58 0 0 0 73 13c-6 0-9 2.94-9 6.54 0 7.23 10.7 5.27 10.7 7.7 0 .67-.66 1.06-2.52 1.06a13.25 13.25 0 0 1-6.4-1.78l-2.1 4.77a17.37 17.37 0 0 0 8.45 2c6 0 9-3 9-6.54-.05-7.15-10.77-5.2-10.77-7.54zm18.2 0c0-.67.6-1.22 2.52-1.22a12 12 0 0 1 5.4 1.44l2-4.74A15.62 15.62 0 0 0 91.14 13c-6 0-9 2.94-9 6.54 0 7.23 10.72 5.27 10.72 7.7 0 .67-.66 1.06-2.52 1.06a13.25 13.25 0 0 1-6.4-1.78l-2.1 4.77a17.37 17.37 0 0 0 8.45 2c6 0 9-3 9-6.54 0-7.15-10.72-5.2-10.72-7.54zm19.1 6.16h8.2v-4.7h-8.2V18.4H117v-4.93h-15.77v19.4h16.12V27.9h-9.7v-2.54zm24.96-3.1l-7.37-8.8h-5.37v19.4h6.37v-8.8l7.36 8.8h5.4v-19.4h-6.37v8.8zm8.06-3.74h5.68v14.32h6.54V18.52h5.67v-5.07h-17.9v5.07zm19.6-5.07h6.54v19.4h-6.54zm16.06 0l-8.47 19.4h6.65l1.3-3.38h7.36l1.3 3.38h6.76l-8.48-19.4zm1.28 11.3l1.88-4.88 1.88 4.88zm21.22-11.3h-6.54v19.4h15.3v-5.07h-8.75V13.45zm16.1 5.75c0-.67.6-1.22 2.52-1.22a12 12 0 0 1 5.4 1.44l2-4.74A15.62 15.62 0 0 0 217.5 13c-6 0-9 2.94-9 6.54 0 7.23 10.72 5.27 10.72 7.7 0 .67-.66 1.06-2.52 1.06a13.22 13.22 0 0 1-6.4-1.78l-2.1 4.77a17.37 17.37 0 0 0 8.45 2c6 0 9-3 9-6.54 0-7.15-10.72-5.2-10.72-7.54zM40.75 11.65c-1.23-2.14-4.73-2.43-10.3.8a35.76 35.76 0 0 0-6.29 4.65A35.67 35.67 0 0 0 25 9.32C25 2.9 23 0 20.58 0S16.1 2.9 16.1 9.32a35.67 35.67 0 0 0 .89 7.77 35.76 35.76 0 0 0-6.29-4.65C5.13 9.22 1.63 9.5.4 11.65S.67 17 6.24 20.18a36 36 0 0 0 7.18 3.12 35.47 35.47 0 0 0-7.18 3.12C.67 29.64-.83 32.8.4 35s4.73 2.42 10.3-.8a35.27 35.27 0 0 0 6.3-4.7 35.74 35.74 0 0 0-.88 7.77c0 6.44 2 9.32 4.47 9.32s4.4-2.9 4.4-9.32a35.74 35.74 0 0 0-.88-7.77 35.27 35.27 0 0 0 6.29 4.65c5.57 3.22 9.07 2.93 10.3.8s-.27-5.3-5.84-8.53a35.47 35.47 0 0 0-7.18-3.12 36 36 0 0 0 7.18-3.12c5.6-3.18 7.13-6.4 5.88-8.53zm-18 11.26a2.33 2.33 0 0 1-2.33 2.33h0a2.33 2.33 0 1 1 2.33-2.33z"})))),l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"base-index.html"},"TOP")),l.a.createElement("li",null,l.a.createElement("a",{href:"base-about.html"},"ABOUT"))))))},d=a("Wbzz"),c=function(){var e=Object(d.b)("2858177899");return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"site"},l.a.createElement("a",{href:"base-index.html"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"225.65",height:"46.59"},l.a.createElement("defs",null),l.a.createElement("desc",null,"ESSENTIALS"),l.a.createElement("path",{fill:"#fff",d:"M52.6 25.36h8.2v-4.7h-8.2V18.4h9.34v-4.93H46.2v19.4h16.1V27.9h-9.7v-2.54zm17.77-6.16c0-.67.6-1.22 2.52-1.22a12 12 0 0 1 5.4 1.44l2-4.74A15.58 15.58 0 0 0 73 13c-6 0-9 2.94-9 6.54 0 7.23 10.7 5.27 10.7 7.7 0 .67-.66 1.06-2.52 1.06a13.25 13.25 0 0 1-6.4-1.78l-2.1 4.77a17.37 17.37 0 0 0 8.45 2c6 0 9-3 9-6.54-.05-7.15-10.77-5.2-10.77-7.54zm18.2 0c0-.67.6-1.22 2.52-1.22a12 12 0 0 1 5.4 1.44l2-4.74A15.62 15.62 0 0 0 91.14 13c-6 0-9 2.94-9 6.54 0 7.23 10.72 5.27 10.72 7.7 0 .67-.66 1.06-2.52 1.06a13.25 13.25 0 0 1-6.4-1.78l-2.1 4.77a17.37 17.37 0 0 0 8.45 2c6 0 9-3 9-6.54 0-7.15-10.72-5.2-10.72-7.54zm19.1 6.16h8.2v-4.7h-8.2V18.4H117v-4.93h-15.77v19.4h16.12V27.9h-9.7v-2.54zm24.96-3.1l-7.37-8.8h-5.37v19.4h6.37v-8.8l7.36 8.8h5.4v-19.4h-6.37v8.8zm8.06-3.74h5.68v14.32h6.54V18.52h5.67v-5.07h-17.9v5.07zm19.6-5.07h6.54v19.4h-6.54zm16.06 0l-8.47 19.4h6.65l1.3-3.38h7.36l1.3 3.38h6.76l-8.48-19.4zm1.28 11.3l1.88-4.88 1.88 4.88zm21.22-11.3h-6.54v19.4h15.3v-5.07h-8.75V13.45zm16.1 5.75c0-.67.6-1.22 2.52-1.22a12 12 0 0 1 5.4 1.44l2-4.74A15.62 15.62 0 0 0 217.5 13c-6 0-9 2.94-9 6.54 0 7.23 10.72 5.27 10.72 7.7 0 .67-.66 1.06-2.52 1.06a13.22 13.22 0 0 1-6.4-1.78l-2.1 4.77a17.37 17.37 0 0 0 8.45 2c6 0 9-3 9-6.54 0-7.15-10.72-5.2-10.72-7.54zM40.75 11.65c-1.23-2.14-4.73-2.43-10.3.8a35.76 35.76 0 0 0-6.29 4.65A35.67 35.67 0 0 0 25 9.32C25 2.9 23 0 20.58 0S16.1 2.9 16.1 9.32a35.67 35.67 0 0 0 .89 7.77 35.76 35.76 0 0 0-6.29-4.65C5.13 9.22 1.63 9.5.4 11.65S.67 17 6.24 20.18a36 36 0 0 0 7.18 3.12 35.47 35.47 0 0 0-7.18 3.12C.67 29.64-.83 32.8.4 35s4.73 2.42 10.3-.8a35.27 35.27 0 0 0 6.3-4.7 35.74 35.74 0 0 0-.88 7.77c0 6.44 2 9.32 4.47 9.32s4.4-2.9 4.4-9.32a35.74 35.74 0 0 0-.88-7.77 35.27 35.27 0 0 0 6.29 4.65c5.57 3.22 9.07 2.93 10.3.8s-.27-5.3-5.84-8.53a35.47 35.47 0 0 0-7.18-3.12 36 36 0 0 0 7.18-3.12c5.6-3.18 7.13-6.4 5.88-8.53zm-18 11.26a2.33 2.33 0 0 1-2.33 2.33h0a2.33 2.33 0 1 1 2.33-2.33z"})),l.a.createElement("p",null,"おいしい食材と食事を探求するサイト"))),l.a.createElement("ul",{className:"sns"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/"},l.a.createElement("i",{className:"fab fa-twitter"}),l.a.createElement("span",{className:"sr-only"},"Twitter"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://facebook.com/"},l.a.createElement("i",{className:"fab fa-facebook-square"}),l.a.createElement("span",{className:"sr-only"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"http://instagram.com/"},l.a.createElement("i",{className:"fab fa-instagram"}),l.a.createElement("span",{className:"sr-only"},"Instagram"))))),l.a.createElement("div",{className:"back"},l.a.createElement(n.a,{fluid:e.pattern.childImageSharp.fluid,alt:"",style:{height:"100%"}})))};function o(e){var t=e.data;return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement("section",{className:"hero"},l.a.createElement("figure",null,l.a.createElement(n.a,{fluid:t.hero.childImageSharp.fluid,style:{height:"100%"}})),l.a.createElement("div",{className:"catch"},l.a.createElement("h1",null,"There is no love sincerer than",l.a.createElement("br",null)," the love of food."),l.a.createElement("p",null,"食物を愛するよりも誠実な愛はない ― バーナード・ショー")),l.a.createElement("div",{className:"wave"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1366 229.5",fill:"#fff"},l.a.createElement("path",{d:"M1369,6.3C1222.5-12.2,1189.5,8,919.2,96.6C665,179.8,160,141.7-2,53.1v150l1371-14.2V6.3z",opacity:".53"}),l.a.createElement("path",{d:"M1369 229.5V55.8c-9.5-2.4-19.2-4.4-28.9-5.8-196.9-29.9-203.4-15.8-503.9 82.6-219.8 72-627.6 53.2-838.2-10.5v107.4h1371z"})))),l.a.createElement("section",{className:"food"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"bar"},"Food ",l.a.createElement("span",null,"Essence")),l.a.createElement("div",{className:"details"},l.a.createElement("div",{className:"detail"},l.a.createElement("figure",null,l.a.createElement(n.a,{fluid:t.fruit.childImageSharp.fluid})),l.a.createElement("h3",null,"フルーツ"),l.a.createElement("p",null,"FRUIT"),l.a.createElement("p",null,"甘くてすっぱくておいしい果実たち。",l.a.createElement("br",null),"旬のフルーツを満喫します。")),l.a.createElement("div",{className:"detail"},l.a.createElement("figure",null,l.a.createElement(n.a,{fluid:t.grain.childImageSharp.fluid})),l.a.createElement("h3",null,"穀物"),l.a.createElement("p",null,"GRAIN"),l.a.createElement("p",null,"食事の基本となる穀物。",l.a.createElement("br",null),"毎日の活動のエネルギー源になります。")),l.a.createElement("div",{className:"detail"},l.a.createElement("figure",null,l.a.createElement(n.a,{fluid:t.beverage.childImageSharp.fluid})),l.a.createElement("h3",null,"飲み物"),l.a.createElement("p",null,"BEVERAGE"),l.a.createElement("p",null,"リラックスするのに欠かせない飲み物。",l.a.createElement("br",null),"お気に入りの一杯はありますか？"))))),l.a.createElement("section",{className:"photo"},l.a.createElement("h2",{className:"sr-only"},"Photo"),l.a.createElement("figure",null,l.a.createElement(n.a,{fluid:t.berry.childImageSharp.fluid,style:{height:"100%"}}))),l.a.createElement(c,null))}var u="4279013115"}}]);
//# sourceMappingURL=component---src-pages-index-js-bcaa4f3b0eeb66a21290.js.map