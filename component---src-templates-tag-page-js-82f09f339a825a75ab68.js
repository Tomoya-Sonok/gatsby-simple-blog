(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{363:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(0),l=a.n(n),r=a(355),i=a(357),o=a(367),s=a(356),c=a(39),m=a(138);t.default=function(e){var t=e.pageContext,a=e.data,n=e.location,u=t.tag,d=a.allMarkdownRemark,g=d.edges,b=d.totalCount,f=a.site.siteMetadata.title,E=Object(c.b)(),p=E.lang,k=E.homeLink,v=Object(m.b)("tfTagHeader",b,u);return l.a.createElement(r.a,{location:n,title:f,breadcrumbs:[{text:Object(m.b)("tTags"),url:k+"tags"},{text:u}]},l.a.createElement(i.a,{title:v,description:v}),l.a.createElement("h1",null,v),l.a.createElement("main",null,g.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return l.a.createElement(o.a,{key:t.fields.slug,base:k,lang:p,slug:t.fields.slug,date:t.frontmatter.date,timeToRead:t.timeToRead,title:a})})),l.a.createElement("div",{style:{marginTop:50}}),l.a.createElement("aside",null,l.a.createElement(s.a,null)))};var u="3604013977"},367:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(17),i=a(24),o=a(139),s=a(138),c=a(358);function m(e){var t,a,n=e.slug,m=e.title,u=e.date,d=e.timeToRead,g=e.excerpt,b=e.tags,f=e.base;return g&&(t=l.a.createElement("p",{dangerouslySetInnerHTML:{__html:g}})),b&&(a=l.a.createElement(c.a,{style:{margin:"0.5rem 0 -0.5rem -0.5rem"},tags:b,baseUrl:f+"tags"})),l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(i.a)(1),marginBottom:Object(i.a)(.25)}},l.a.createElement(r.a,{style:{boxShadow:"none"},to:n,rel:"bookmark"},m)),a,l.a.createElement("small",null,Object(s.a)(u)+" • "+Object(o.formatReadingTime)(d)),t))}m.defaultProps={title:null,excerpt:null,tags:null,base:""};var u=m;a.d(t,"a",function(){return u})}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-82f09f339a825a75ab68.js.map