(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[493],{4431:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[regular]",function(){return s(5690)}])},8332:function(e,t,s){"use strict";var n=s(5893),c=s(1360);let r=e=>{let{data:t}=e,{frontmatter:s,content:r}=t;return(0,n.jsx)("section",{className:"section",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"flex h-[40vh] items-center justify-center",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h1",{className:"mb-4",children:s.title}),(0,c.gI)(r,"div","content")]})})})})};t.Z=r},4113:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var n=s(5893),c=s(7294);let r=e=>{let{title:t,children:s,className:r}=e,[i,l]=(0,c.useState)(!1);return(0,n.jsxs)("div",{className:"accordion border border-border rounded ".concat(r),children:[(0,n.jsxs)("button",{className:"relative block w-full bg-[#2e3b47] px-4 py-3.5 text-left text-dark",onClick:()=>l(!i),children:[t,(0,n.jsx)("svg",{className:"absolute right-4 top-1/2 m-0 -translate-y-1/2 w-4 h-4 ".concat(i&&"rotate-180"),version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.011 512.011",style:{enableBackground:"new 0 0 512.011 512.011"},xmlSpace:"preserve",children:(0,n.jsx)("path",{fill:"#fff",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,n.jsx)("div",{className:"px-4 py-3.5 ".concat(!i&&"hidden"),children:s})]})};var i=s(1664),l=s.n(i);let a=e=>{let{href:t,type:s,rel:c,children:r}=e;return(0,n.jsx)(l(),{href:t,target:"_blank",rel:"noopener noreferrer ".concat(c?"follow"===c?"":c:"nofollow"),className:"btn me-4 mb-4 border-none text-sm hover:bg-primary ".concat("outline"===s?"btn-outline-primary":"btn-primary"),children:r})};var o=s(8189),d=s(6671);let x=e=>{let{children:t,language:s}=e;return(0,n.jsx)(o.Z,{language:s,style:d.Vg,children:t})};var h=s(640);s(1496);var m={Button:a,Accordion:r,Youtube:function(e){let{id:t,title:s,...c}=e;return(0,n.jsx)("div",{className:"rounded overflow-hidden",children:(0,n.jsx)(h.Z,{id:t,title:s,...c})})},Video:function(e){let{title:t,width:s=500,height:c="auto",src:r,...i}=e;return(0,n.jsxs)("video",{className:"rounded overflow-hidden",width:s,height:c,controls:!0,...i,children:[(0,n.jsx)("source",{src:r.match(/^https?:/)?r:"/videos/".concat(r),type:"video/mp4"}),t]})},Tab:function(e){let{children:t}=e;return(0,n.jsx)("li",{className:"tab-item my-0 hidden",children:t})},Tabs:function(e){let{children:t}=e,s=(0,c.useRef)(null),r=(e,t)=>{let n=[...e.currentTarget.parentElement.children],c=[...s.current.children],r=c.find(e=>!e.classList.contains("hidden")),i=n.find(e=>e.classList.contains("active"));r!==c[t]&&(i.classList.remove("active"),e.currentTarget.classList.add("active"),r.classList.add("hidden"),c[t].classList.remove("hidden"))};return(0,c.useEffect)(()=>{[...s.current.children][0].classList.remove("hidden")},[]),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("ul",{className:"mb-0 flex list-none items-center space-x-4 pl-0",children:t.map((e,t)=>(0,n.jsx)("li",{className:"tab-link m-0 cursor-pointer rounded px-8 py-3 text-sm ".concat(0===t&&"active"),onClick:e=>r(e,t),children:e.props.name},t))}),(0,n.jsx)("ul",{className:"tab-items mt-1 mb-0 list-none rounded bg-[#242e38] p-6",ref:s,children:t})]})},Notice:function(e){let{type:t,children:s}=e;return(0,n.jsxs)("div",{className:"notice ".concat(t," relative rounded mt-8"),children:[(0,n.jsxs)("div",{className:"absolute h-[30px] -top-[30px] z-10 left-0 p-3 flex items-center",children:[(0,n.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fill:"#fff",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}),(0,n.jsx)("p",{className:"my-0 text-dark ml-1.5 capitalize",children:t})]}),(0,n.jsx)("div",{className:"p-3",children:s})]})},Gist:function(e){let{src:t}=e;return(0,n.jsx)("iframe",{width:"100%",height:"350",src:"data:text/html;charset=utf-8,\n        <head><base target='_blank' /></head>\n        <body><script src='".concat(t,"'></script>\n        </body>\n      ")})},Code:x}},5690:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return p},default:function(){return j}});var n=s(5893),c=s(8332),r=s(4492),i=s(6626),l=s(1360),a=s(8093),o=s(4113);let d=e=>{let{data:t}=e,{frontmatter:s,mdxContent:c}=t,{title:r}=s,{contact_form_action:l}=i.f;return(0,n.jsx)("section",{className:"section pt-[72px]",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"mx-auto lg:col-8",children:(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.R,{...c,components:o.Z})})})})})})},x=e=>{let{title:t,description:s,videoSrc:c,altText:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-primary text-xl",children:t}),(0,n.jsx)("div",{className:"text-sm",children:s}),c&&(0,n.jsx)("iframe",{width:"70%",className:"mt-2 h-[40vh]",src:c}),r&&(0,n.jsx)("div",{className:"w-[70%] h-[40vh] bg-gray-300 flex items-center justify-center",children:(0,n.jsx)("span",{className:"text-black text-2xl",children:r})})]})},h=[{title:"PrometheusCon NA'22",description:"Lightning Talk: How Not to Use Prometheus",videoSrc:"https://www.youtube.com/embed/OMDUNmH9Daw"},{title:"KubeCon NA'23",videoSrc:null,altText:"Coming Up!",description:"Deep Dive Into Writing A Kubernetes Operator: Lets Avoid Data Loss And Down Times"}],m=e=>{let{data:t}=e,{frontmatter:s,mdxContent:c}=t;return console.log({data:t}),(0,n.jsx)("section",{className:"section pt-[72px]",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"mx-auto lg:col-8",children:(0,n.jsx)("div",{className:"content text-white",children:h.map(e=>(0,n.jsx)("div",{className:"mb-12",children:(0,n.jsx)(x,{...e})}))})})})})})},u=e=>{let{data:t}=e,{frontmatter:s,mdxContent:c}=t,{title:r}=s;return(0,n.jsx)("section",{className:"!pt-[60px] pb-10",children:(0,n.jsxs)("div",{className:"container",children:[(0,l.gI)(r,"h1","h1 mb-20 text-center"),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"mx-auto lg:col-11",children:(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.R,{...c,components:o.Z})})})})]})})},v=e=>{let{data:t}=e,{title:s,meta_title:i,description:l,image:a,noindex:o,canonical:x,layout:h}=t.frontmatter,{content:v}=t;return(0,n.jsx)(r.Z,{title:s,description:l||v.slice(0,120),meta_title:i,image:a,noindex:o,canonical:x,children:"404"===h?(0,n.jsx)(c.Z,{data:t}):"contact"===h?(0,n.jsx)(d,{data:t}):"speakingExperience"===h?(0,n.jsx)(m,{data:t}):(0,n.jsx)(u,{data:t})})};var p=!0,j=v},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[664,122,438,492,774,888,179],function(){return e(e.s=4431)}),_N_E=e.O()}]);