(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"05Di":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLWxlZnQiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaGV2cm9uLWxlZnQgZmEtdy0xMCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzQuNTIgMjM5LjAzTDIyOC44NyA0NC42OWM5LjM3LTkuMzcgMjQuNTctOS4zNyAzMy45NCAwbDIyLjY3IDIyLjY3YzkuMzYgOS4zNiA5LjM3IDI0LjUyLjA0IDMzLjlMMTMxLjQ5IDI1NmwxNTQuMDIgMTU0Ljc1YzkuMzQgOS4zOCA5LjMyIDI0LjU0LS4wNCAzMy45bC0yMi42NyAyMi42N2MtOS4zNyA5LjM3LTI0LjU3IDkuMzctMzMuOTQgMEwzNC41MiAyNzIuOTdjLTkuMzctOS4zNy05LjM3LTI0LjU3IDAtMzMuOTR6Ij48L3BhdGg+PC9zdmc+"},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("Bl7J"),c=a("vrFN");a("XfO3"),a("HEwt"),a("bCz6");function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var d=function(e){function t(){return e.apply(this,arguments)||this}return s(t,e),t.prototype.render=function(){var e=this.props,t=e.animationDelay,a=e.backgroundColor,n=e.left;return r.a.createElement("div",{className:"confetti",style:{animationDelay:t,backgroundColor:a,left:n}})},t}(r.a.Component),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).launch=a.launch.bind(l(a)),a.randomColor=a.randomColor.bind(l(a)),a.randomDelay=a.randomDelay.bind(l(a)),a.randomLeft=a.randomLeft.bind(l(a)),a}s(t,e);var a=t.prototype;return a.launch=function(){var e=this;return Array.from(Array(100)).map((function(t,a){return r.a.createElement(d,{animationDelay:e.randomDelay(),backgroundColor:e.randomColor(),key:"confetti-"+a,left:e.randomLeft()})}))},a.randomColor=function(){var e=["#69D2E7","#F9D423","#F38630","#FF4E50"];return e[parseInt(Math.random()*e.length)]},a.randomDelay=function(){var e=parseInt(10+50*Math.random());return"-"+(e=Math.round(e)/10)+"s"},a.randomLeft=function(){return parseInt(100*Math.random())+"%"},a.render=function(){return r.a.createElement("div",{className:"confetti-wrapper"},this.launch())},t}(r.a.Component),p=a("Uzau");a("sg+I");a.d(t,"pageQuery",(function(){return g}));var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext,n=t.site.siteMetadata.title,l=t.allMarkdownRemark.edges,s=t.arduinoIcon,d=t.gatsbyIcon,u=t.googleMapsIcon,g=t.jsIcon,I=t.postgresIcon,h=t.pythonIcon,y=t.raspberryIcon,M=t.rubyIcon,f=t.htmlIcon,b=t.appleIcon,N=t.databaseIcon;return r.a.createElement(i.a,{location:this.props.location,title:n},r.a.createElement(c.a,{title:"Kevin Ponce Blog | tech tips and tutorials",description:"A blog featuring tutorials about Ruby on Rails, HTML5, CSS, JavaScipt, Apple, Python, Arduino, and everything else development."}),r.a.createElement("div",{className:"home"},r.a.createElement("section",{className:"band band-0"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement(m,null),r.a.createElement("h2",null,"Welcome"))),r.a.createElement("section",{className:"band band-a"},r.a.createElement("div",{className:"band-container"},r.a.createElement("div",{className:"band-inner"},r.a.createElement("p",null,"My name is Kevin Ponce. I am a software developer, who loves to build. Started programming in high school because I was too lazy to select the class I wanted to take next semester. I am not fully sure what I am going to be doing with this site, but I just started to blog to help me remember what I know.")))),r.a.createElement("section",{className:"band band-b"},r.a.createElement("div",{className:"band-container"},r.a.createElement("div",{className:"band-inner"},r.a.createElement("h1",null,"Latest Blogs"),r.a.createElement(p.a,{posts:l,pageContext:a,prefixUrl:"/blogs/",masonry:!1,arduinoIcon:s,gatsbyIcon:d,googleMapsIcon:u,postgresIcon:I,pythonIcon:h,raspberryIcon:y,rubyIcon:M,htmlIcon:f,jsIcon:g,appleIcon:b,databaseIcon:N}),r.a.createElement("div",{className:"read-more-wrapper"},r.a.createElement(o.a,{to:"/blogs"},"Read More")))))))},n}(r.a.Component),g=(t.default=u,"3793577399")},Rxd2:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjaGV2cm9uLXJpZ2h0IiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtY2hldnJvbi1yaWdodCBmYS13LTEwIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMyMCA1MTIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yODUuNDc2IDI3Mi45NzFMOTEuMTMyIDQ2Ny4zMTRjLTkuMzczIDkuMzczLTI0LjU2OSA5LjM3My0zMy45NDEgMGwtMjIuNjY3LTIyLjY2N2MtOS4zNTctOS4zNTctOS4zNzUtMjQuNTIyLS4wNC0zMy45MDFMMTg4LjUwNSAyNTYgMzQuNDg0IDEwMS4yNTVjLTkuMzM1LTkuMzc5LTkuMzE3LTI0LjU0NC4wNC0zMy45MDFsMjIuNjY3LTIyLjY2N2M5LjM3My05LjM3MyAyNC41NjktOS4zNzMgMzMuOTQxIDBMMjg1LjQ3NSAyMzkuMDNjOS4zNzMgOS4zNzIgOS4zNzMgMjQuNTY4LjAwMSAzMy45NDF6Ij48L3BhdGg+PC9zdmc+"},Uzau:function(e,t,a){"use strict";a("XfO3"),a("HEwt"),a("a1Th"),a("Btvt"),a("KKXr"),a("0mN4");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=(a("pxef"),a("pQUg")),c=a.n(i),l=a("9eSz"),s=a.n(l),d=a("LvDl"),m=a.n(d),p=a("05Di"),u=a.n(p),g=a("Rxd2"),I=a.n(g);function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y={transitionDuration:0},M=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).renderHeader=a.renderHeader.bind(h(a)),a.renderPosts=a.renderPosts.bind(h(a)),a.pagination=a.pagination.bind(h(a)),a.renderPostsWithMasonry=a.renderPostsWithMasonry.bind(h(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.renderHeader=function(e){var t,a=this.props,n=a.arduinoIcon,o=a.gatsbyIcon,i=a.googleMapsIcon,c=a.jsIcon,l=a.postgresIcon,d=a.pythonIcon,m=a.raspberryIcon,p=a.rubyIcon,u=a.htmlIcon,g=a.appleIcon,I=a.databaseIcon,h=e.frontmatter.header;if(h){var y=h.type,M=h.icon,f=h.bgColor;return"icon"===y&&("gatsby"===M?t=r.a.createElement(s.a,{fixed:o.childImageSharp.fixed}):"python"===M?t=r.a.createElement(s.a,{fixed:d.childImageSharp.fixed}):"ruby"===M?t=r.a.createElement(s.a,{fixed:p.childImageSharp.fixed}):"arduino"===M?t=r.a.createElement(s.a,{fixed:n.childImageSharp.fixed}):"raspberry"===M?t=r.a.createElement(s.a,{fixed:m.childImageSharp.fixed}):"postgres"===M?t=r.a.createElement(s.a,{fixed:l.childImageSharp.fixed}):"google-maps"===M?t=r.a.createElement(s.a,{fixed:i.childImageSharp.fixed}):"js"===M?t=r.a.createElement(s.a,{fixed:c.childImageSharp.fixed}):"html"===M?t=r.a.createElement(s.a,{fixed:u.childImageSharp.fixed}):"apple"===M?t=r.a.createElement(s.a,{fixed:g.childImageSharp.fixed}):"database"===M&&(t=r.a.createElement(s.a,{fixed:I.childImageSharp.fixed})),void 0!==t)?r.a.createElement("div",{className:"blog-post-header"},r.a.createElement("div",{className:"blog-post-header-no-image",style:{backgroundColor:f}},t)):void 0}},i.renderPosts=function(){var e=this;return this.props.posts.map((function(t){var a=t.node,n=a.frontmatter.title||a.fields.slug,i=a.frontmatter.tags||[];return r.a.createElement("div",{className:"blog-post-wrapper pds-blogs pds-blogs-blogs-card",key:a.fields.slug},r.a.createElement("div",{className:"blog-post"},e.renderHeader(a),r.a.createElement("div",{className:"blog-post-description"},r.a.createElement(o.a,{style:{boxShadow:"none"},to:"/blog/"+a.fields.slug}," ",n),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.frontmatter.description||a.excerpt}}),r.a.createElement("div",{className:"tags-wrapper"},i.map((function(e){return r.a.createElement(o.a,{style:{boxShadow:"none"},to:"/"+e,key:a.fields.slug+"-"+e},m.a.startCase(m.a.toLower(e.split("-").join(" "))))}))))))}))},i.pagination=function(){var e=this,t=this.props.pageContext,a=t.currentPage,n=t.numPages,i=1===a,c=a===n,l=this.props.prefixUrl+(a-1==1?"":(a-1).toString()),s=this.props.prefixUrl+(a+1).toString();return n<=1||isNaN(parseInt(n))?r.a.createElement("div",null):r.a.createElement("ul",null,!i&&r.a.createElement("li",null,r.a.createElement(o.a,{to:l,rel:"prev"},r.a.createElement("img",{src:u.a,alt:"prev page"}))),Array.from({length:n},(function(t,n){return r.a.createElement("li",{key:"pagination-number"+(n+1)},r.a.createElement(o.a,{to:""+e.props.prefixUrl+(0===n?"":n+1),style:{color:"#ffffff",background:n+1===a?"#69D2E7":""}},n+1))})),!c&&r.a.createElement("li",null,r.a.createElement(o.a,{to:s,rel:"next"},r.a.createElement("img",{src:I.a,alt:"next page"}))))},i.renderPostsWithMasonry=function(){return!1===this.props.masonry?this.renderPosts():r.a.createElement(c.a,{className:"my-gallery-class",elementType:"div",options:y,disableImagesLoaded:!1,updateOnEachImageLoad:!1},this.renderPosts())},i.render=function(){return r.a.createElement("div",{className:"blogs-wrapper"},this.renderPostsWithMasonry(),this.pagination())},n}(r.a.Component);t.a=M}}]);
//# sourceMappingURL=component---src-pages-index-js-b75d4d735714439007cc.js.map