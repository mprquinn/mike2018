"use strict";var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var banner=document.querySelector(".landing__parallax-wrapper"),bannerDims={w:banner.getBoundingClientRect().width,h:banner.getBoundingClientRect().height},foreground=document.querySelector(".landing__foreground"),midground=document.querySelector(".landing__midground"),limit={x:30,y:12};function sizeImages(){var e=document.querySelector(".landing").getBoundingClientRect();console.log(e),foreground.style.width=window.innerWidth+50+"px",midground.style.width=window.innerWidth+50+"px"}banner.addEventListener("mousemove",function(e){var t=e.pageX,n=e.pageY,a=t/bannerDims.w*limit.x-limit.x/2,o=n/bannerDims.h*limit.y-limit.y/2;document.querySelector(".landing").style.setProperty("--move-x",a+"px"),document.querySelector(".landing").style.setProperty("--move-y",o+"px")}),window.onload=function(){},window.onresize=function(){};var nav=document.querySelector("nav"),body=document.querySelector("body"),firstSection=document.querySelector(".landing");function pinNav(){firstSection.getBoundingClientRect().top<=0?(nav.classList.add("navigation--pinned"),body.classList.add("body--padded")):(nav.classList.remove("navigation--pinned"),body.classList.remove("body--padded"))}function scrollToY(e,t,n){var a=window.scrollY||document.documentElement.scrollTop,o=(e=e||0,t=t||2e3,n=n||"easeOutSine",0),i=Math.max(.1,Math.min(Math.abs(a-e)/t,.8)),r={easeOutSine:function(e){return Math.sin(e*(Math.PI/2))},easeInOutSine:function(e){return-.5*(Math.cos(Math.PI*e)-1)},easeInOutQuint:function(e){return(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2)}};!function t(){var c=(o+=1/60)/i,s=r[n](c);c<1?(requestAnimFrame(t),window.scrollTo(0,a+(e-a)*s)):window.scrollTo(0,e)}()}document.addEventListener("scroll",function(){pinNav()}),window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};var navItems=Array.from(document.querySelectorAll(".navigation a"));setTimeout(function(){var e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,t={landing:0,projects:document.querySelector(".projects").getBoundingClientRect().top,social:document.querySelector(".social").getBoundingClientRect().top},n=document.querySelector(".navigation").getBoundingClientRect().height;navItems.forEach(function(a){a.addEventListener("click",function(o){o.preventDefault();var i=a.getAttribute("href");scrollToY(t[i]+e-n,1e3,"easeInOutSine")})})},10);var Project=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={loaded:!1,currentProject:0,beginning:!0,end:!1,animationDirection:"",animationDuration:"6000",projects:[{title:"Moxie's",description:"Front-End Development for Moxie's as part of the Simple Simple Ads development team. A smidgen of back-end work as well. 2015.",technologies:["Drupal","SASS","JS","PHP"],image:"dist/images/project-moxies.jpg",url:"https://www.moxies.com"},{title:"Local 510",description:"Full site build for Local 510. Design by Concorde Group as part of the Simple Simple Ads development team. 2017.",technologies:["Drupal","SASS","JS","Babel","Gulp","PHP"],image:"dist/images/project-local510.jpg",url:"https://local510.ca"},{title:"Spredfast",description:"Miscellaneous components and pages for the Spredfast website as part of the Simple Simple Ads development team. Notably landing page banners. 2017 - 2018.",technologies:["Drupal","SASS","JS","Grunt","Figma/Sketch"],image:"dist/images/project-spredfast.jpg",url:"https://spredfast.com"},{title:"Chop",description:"Full theme build and front-end interactive elements developed for Chop Steakhouse's website as part of the Simple Simple Ads development team. 2016.",technologies:["Drupal","SASS","JS","Babel","Gulp"],image:"dist/images/project-chop.jpg",url:"https://chop.ca"},{title:"Boulevard",description:"Full theme build for Boulevard Vancouver's website as part of the Simple Simple Ads development team. 2016.",technologies:["Drupal","SASS","JS","Gulp"],image:"dist/images/project-boulevard.jpg",url:"https://boulevardvancouver.ca"},{title:"Save Playlists",description:"Personal learning project. React app to save auto-generated Spotify playlists.",technologies:["React","SASS","Babel","Spotify API"],image:"dist/images/project-save-playlists.jpg",url:"https://www.save-playlists.com"},{title:"PWLS",description:"Personal learning project. React app for our bookclub. For scheduling meetups and suggesting books.",technologies:["React","SASS","Babel","Google Books API","Firebase"],image:"dist/images/project-pwls.jpg",url:"https://prestigeworldwideliterary.herokuapp.com/"}]},e}return _inherits(t,React.Component),_createClass(t,[{key:"fireAnimations",value:function(e){var t=this;this.setState({animating:!0,animationDirection:"out"}),setTimeout(function(){t.setState({animating:!1,animationDirection:"in"})},e/2.5),setTimeout(function(){t.setState({animating:!0,animationDirection:""})},e/2),setTimeout(function(){t.setState({animating:!1,animationDirection:""})},e)}},{key:"checkEnd",value:function(){this.state.currentProject===this.state.projects.length-1&&this.setState({end:!0}),0===this.state.currentProject&&this.setState({beginning:!0})}},{key:"changeProject",value:function(e){var t=this;if("forward"===e){if(this.state.currentProject<this.state.projects.length-1){var n=this.state.currentProject+1;this.fireAnimations(1200),setTimeout(function(){t.setState({beginning:!1,end:!1,currentProject:n})},600)}}else if(this.state.currentProject>0){var a=this.state.currentProject-1;this.fireAnimations(1200),setTimeout(function(){t.setState({currentProject:a,beginning:!1,end:!1})},600)}setTimeout(function(){t.checkEnd()},601)}},{key:"renderArrows",value:function(){var e=this;return this.state.beginning?React.createElement("div",{className:"project__arrows"},React.createElement("a",{className:"project__arrow project__arrow--disabled",onClick:function(){return e.changeProject("backward")}},"<"),React.createElement("a",{className:"project__arrow",onClick:function(){return e.changeProject("forward")}},">")):this.state.end?React.createElement("div",{className:"project__arrows"},React.createElement("a",{className:"project__arrow",onClick:function(){return e.changeProject("backward")}},"<"),React.createElement("a",{className:"project__arrow project__arrow--disabled",onClick:function(){return e.changeProject("forward")}},">")):React.createElement("div",{className:"project__arrows"},React.createElement("a",{className:"project__arrow",onClick:function(){return e.changeProject("backward")}},"<"),React.createElement("a",{className:"project__arrow",onClick:function(){return e.changeProject("forward")}},">"))}},{key:"loadImages",value:function(e){(new Image).src=e}},{key:"componentWillMount",value:function(){var e=this,t=this,n=this.state.projects.length,a=0;this.state.projects.forEach(function(o){var i=o.image;t.loadImages(i),++a===n&&e.setState({loaded:!0})})}},{key:"componentDidMount",value:function(){var e=document.querySelector(".landing");setTimeout(function(){e.classList.add("landing--loaded")})}},{key:"render",value:function(){if(this.state.loaded){var e=this.state.projects[this.state.currentProject];return React.createElement("div",null,React.createElement("h1",{className:"section__title"},"Projects"),React.createElement("div",{className:this.state.animating?"project project--animated":"project"},React.createElement("span",{className:"project__count project__count--"+this.state.animationDirection},"0",React.createElement("span",null,this.state.currentProject+1)),React.createElement("div",{className:""!==this.state.animationDirection?"project__text project__text--"+this.state.animationDirection:"project__text"},React.createElement("div",{className:""!==this.state.animationDirection?"project__text__wrap project__text__wrap--"+this.state.animationDirection:"project__text__wrap"},React.createElement("h2",{className:"project__title"},e.title),React.createElement("p",{className:"project__description"},e.description)),React.createElement("ul",{className:""!==this.state.animationDirection?"project__tech project__tech--"+this.state.animationDirection:"project__tech"},e.technologies.map(function(e){return React.createElement("li",{className:"project__tech__item",key:e},e)})),this.renderArrows(),React.createElement("a",{href:e.url,target:"_blank",rel:"noopener",className:"button project__view"},"View Project")),React.createElement("div",{className:"project__image-wrap"},React.createElement("img",{src:e.image,alt:"Project Image: "+e.title,className:""!==this.state.animationDirection?"project__image project__image--"+this.state.animationDirection:"project__image"}))))}return React.createElement("p",null,"loading")}}]),t}();function sectionScroll(){var e=document.querySelectorAll("section"),t=window.innerHeight;e.forEach(function(e){if(e.getBoundingClientRect().top<=t/1.3&&"landing landing--loaded"!==e.className&&!e.className.includes("--in-view")){var n=e.className+"--in-view";e.classList.add(n)}})}function titleEffects(){var e=document.querySelector(".landing h1");charming(e),document.querySelectorAll(".section__title").forEach(function(e){charming(e)})}function load(){document.querySelector(".landing").classList.add("landing--loaded")}ReactDOM.render(React.createElement(Project,null),document.querySelector(".projects")),window.addEventListener("scroll",function(){sectionScroll()}),titleEffects(),window.addEventListener("load",function(){});
//# sourceMappingURL=site.js.map
