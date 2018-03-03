"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var nav=document.querySelector("nav"),body=document.querySelector("body"),firstSection=document.querySelector(".landing");function pinNav(){firstSection.getBoundingClientRect().top<=0?(nav.classList.add("navigation--pinned"),body.classList.add("body--padded")):(nav.classList.remove("navigation--pinned"),body.classList.remove("body--padded"))}document.addEventListener("scroll",function(){pinNav()});var smooth_scroll_to=function(e,t,n){if(t=Math.round(t),(n=Math.round(n))<0)return Promise.reject("bad duration");if(0===n)return e.scrollTop=t,Promise.resolve();var r=Date.now(),o=r+n,a=e.scrollTop,c=t-a;return new Promise(function(t,n){var i=e.scrollTop;setTimeout(function s(){if(e.scrollTop==i){var l=Date.now(),u=function(e,t,n){if(n<=e)return 0;if(n>=t)return 1;var r=(n-e)/(t-e);return r*r*(3-2*r)}(r,o,l),m=Math.round(a+c*u);e.scrollTop=m,l>=o?t():e.scrollTop!==i||e.scrollTop===m?(i=e.scrollTop,setTimeout(s,0)):t()}else n("interrupted")},0)})},navItems=Array.from(document.querySelectorAll(".navigation a"));setTimeout(function(){var e=document.querySelectorAll("section"),t=(Array.from(e),{landing:0,projects:document.querySelector(".projects").getBoundingClientRect().top,social:document.querySelector(".social").getBoundingClientRect().top});navItems.forEach(function(e){e.addEventListener("click",function(n){n.preventDefault();var r=e.getAttribute("href"),o=t[r];smooth_scroll_to(document.documentElement,o,500)})})},10);var Project=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={currentProject:0,beginning:!0,end:!1,animationDirection:"",animationDuration:"6000",projects:[{title:"Moxie's",description:"Front-End Development for Moxie's as part of the Simple Simple Ads development team. A smidgen of back-end work as well. 2015.",technologies:["Drupal","SASS","JS","PHP"],image:"dist/images/project-moxies-duotone.png",url:"https://www.moxies.com"},{title:"Local 510",description:"Full site build for Local 510. Design by Concorde Group as part of the Simple Simple Ads development team. 2017.",technologies:["Drupal","SASS","JS","Babel","Gulp","PHP"],image:"dist/images/project-local510-duotone.png",url:"https://local510.ca"},{title:"Spredfast",description:"Miscellaneous components and pages for the Spredfast website as part of the Simple Simple Ads development team. Notably landing page banners. 2017 - 2018.",technologies:["Drupal","SASS","JS","Babel","Grunt","Figma/Sketch"],image:"dist/images/project-spredfast-duotone.jpg",url:"https://spredfast.com"},{title:"Chop",description:"Full theme build and front-end interactive elements developed for Chop Steakhouse's website as part of the Simple Simple Ads development team. 2016.",technologies:["Drupal","SASS","JS","Babel","Gulp"],image:"dist/images/project-chop-duotone.jpg",url:"https://chop.ca"}]},e}return _inherits(t,React.Component),_createClass(t,[{key:"fireAnimations",value:function(e){var t=this;this.setState({animating:!0,animationDirection:"out"}),setTimeout(function(){t.setState({animating:!1,animationDirection:"in"})},e/2.5),setTimeout(function(){t.setState({animating:!0,animationDirection:""})},e/2),setTimeout(function(){t.setState({animating:!1,animationDirection:""})},e)}},{key:"checkEnd",value:function(){this.state.currentProject===this.state.projects.length-1&&this.setState({end:!0}),0===this.state.currentProject&&this.setState({beginning:!0})}},{key:"changeProject",value:function(e){var t=this;if("forward"===e){if(this.state.currentProject<this.state.projects.length-1){var n=this.state.currentProject+1;this.fireAnimations(1200),setTimeout(function(){t.setState({beginning:!1,end:!1,currentProject:n})},600)}}else if(this.state.currentProject>0){var r=this.state.currentProject-1;this.fireAnimations(1200),setTimeout(function(){t.setState({currentProject:r,beginning:!1,end:!1})},600)}setTimeout(function(){t.checkEnd()},601)}},{key:"renderArrows",value:function(){var e=this;return this.state.beginning?React.createElement("div",{className:"project__arrows"},React.createElement("a",{className:"project__arrow project__arrow--disabled",onClick:function(){return e.changeProject("backward")}},"<"),React.createElement("a",{className:"project__arrow",onClick:function(){return e.changeProject("forward")}},">")):this.state.end?React.createElement("div",{className:"project__arrows"},React.createElement("a",{className:"project__arrow",onClick:function(){return e.changeProject("backward")}},"<"),React.createElement("a",{className:"project__arrow project__arrow--disabled",onClick:function(){return e.changeProject("forward")}},">")):React.createElement("div",{className:"project__arrows"},React.createElement("a",{className:"project__arrow",onClick:function(){return e.changeProject("backward")}},"<"),React.createElement("a",{className:"project__arrow",onClick:function(){return e.changeProject("forward")}},">"))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state.projects[this.state.currentProject];return React.createElement("div",null,React.createElement("h1",{className:"section__title"},"Projects"),React.createElement("div",{className:this.state.animating?"project project--animated":"project"},React.createElement("span",{className:"project__count project__count--"+this.state.animationDirection},"0",React.createElement("span",null,this.state.currentProject+1)),React.createElement("div",{className:""!==this.state.animationDirection?"project__text project__text--"+this.state.animationDirection:"project__text"},React.createElement("div",{className:""!==this.state.animationDirection?"project__text__wrap project__text__wrap--"+this.state.animationDirection:"project__text__wrap"},React.createElement("h2",{className:"project__title"},e.title),React.createElement("p",{className:"project__description"},e.description)),React.createElement("ul",{className:""!==this.state.animationDirection?"project__tech project__tech--"+this.state.animationDirection:"project__tech"},e.technologies.map(function(e){return React.createElement("li",{className:"project__tech__item",key:e},e)})),this.renderArrows(),React.createElement("a",{href:e.url,target:"_blank",className:"button project__view"},"View Project")),React.createElement("div",{className:"project__image-wrap"},React.createElement("img",{src:e.image,className:""!==this.state.animationDirection?"project__image project__image--"+this.state.animationDirection:"project__image"}))))}}]),t}();function sectionScroll(){var e=document.querySelectorAll("section"),t={root:null,rootMargin:"0px",threshold:.75},n=new IntersectionObserver(function(e){e.forEach(function(e){if(e.intersectionRatio>0){var t=e.target.className+"--in-view";e.target.classList.add(t),n.unobserve(e.target)}},t)});e.forEach(function(e){n.observe(e)})}function titleEffects(){var e=document.querySelector(".landing h1");charming(e),document.querySelectorAll(".section__title").forEach(function(e){charming(e)})}function load(){document.querySelector(".landing").classList.add("landing--loaded")}ReactDOM.render(React.createElement(Project,null),document.querySelector(".projects")),sectionScroll(),titleEffects(),window.addEventListener("load",function(){load()});
//# sourceMappingURL=site.js.map
