(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{123:function(e,t,a){"use strict";var r=a(0),n=a(20);t.a=function(){const e=Object(r.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=l(a),p=r,O=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?n.a.createElement(O,i(i({ref:t},s),{},{components:a})):n.a.createElement(O,i({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},125:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var r=a(123),n=a(126);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(a,r)=>function(e,t,a,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(r)return t+a;const c=!a.startsWith(t)?t+a.replace(/^\//,""):a;return o?e+c:c}(t,e,a,r)}}function c(e,t={}){const{withBaseUrl:a}=o();return a(e,t)}},126:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),o=(a(0),a(124)),c=a(125),i={id:"powerEditor",title:"Editor de Pot\xeancia",sidebar_label:"Editor de Pot\xeancia"},b={unversionedId:"powerEditor",id:"powerEditor",isDocsHomePage:!1,title:"Editor de Pot\xeancia",description:"O Editor de Elementos de Pot\xeancia no PSP-UFU permite a inser\xe7\xe3o, manipula\xe7\xe3o e edi\xe7\xe3o de elementos el\xe9tricos de pot\xeancia por meio de um diagrama unifilar.",source:"@site/docs\\powerEditor.md",permalink:"/PSP/docs/powerEditor",editUrl:"https://github.com/Thales1330/PSP/tree/master/docusaurus/docs/powerEditor.md",sidebar_label:"Editor de Pot\xeancia",sidebar:"docs",previous:{title:"Ferramentas CAD",permalink:"/PSP/docs/cadTools"},next:{title:"Barramento",permalink:"/PSP/docs/bus"}},s=[{value:"Novo projeto",id:"novo-projeto",children:[]},{value:"Inserindo elementos",id:"inserindo-elementos",children:[{value:"Teclas de atalho",id:"teclas-de-atalho",children:[]}]},{value:"Editando dados el\xe9tricos",id:"editando-dados-el\xe9tricos",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("link",{rel:"stylesheet",href:Object(c.a)("katex/katex.min.css")}),Object(o.b)("p",null,"O Editor de Elementos de Pot\xeancia no PSP-UFU permite a inser\xe7\xe3o, manipula\xe7\xe3o e edi\xe7\xe3o de elementos el\xe9tricos de pot\xeancia por meio de um diagrama unifilar."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"(",Object(o.b)("strong",{parentName:"p"},"Diagrama unifilar"),") Um diagrama do sistema no qual as linhas polif\xe1sicas s\xe3o representados por sua \xfanica linha equivalente. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.electropedia.org/iev/iev.nsf/display?openform&ievref=601-02-04"}),Object(o.b)("em",{parentName:"a"},"tradu\xe7\xe3o livre")," - IEC 60050"),".")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Informa\xe7\xe3o")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Todos os elementos inseridos pode ser manipulados e editados utilizando as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"cadTools"}),"Ferramentas CAD"),"."))),Object(o.b)("h2",{id:"novo-projeto"},"Novo projeto"),Object(o.b)("p",null,"A cria\xe7\xe3o de um novo projeto \xe9 realizada clicando no item ",Object(o.b)("strong",{parentName:"p"},"Novo projeto")," no ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"mainScreen#menu-ribbon"}),"submenu ",Object(o.b)("strong",{parentName:"a"},"Arquivo")),". Essa a\xe7\xe3o cria um sistema em branco na \xe1rea de trabalho, local onde \xe9 poss\xedvel inserir os elementos el\xe9tricos por meio do ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"mainScreen#menu-ribbon"}),"submenu ",Object(o.b)("strong",{parentName:"a"},"Ferramentas"))," ou pelas ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"powerEditor#teclas-de-atalho"}),"teclas de atalho"),"."),Object(o.b)("p",null,"Abaixo s\xe3o apresentados os elementos el\xe9tricos de pot\xeancia que podem ser inseridos no PSP-UFU:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"bus"}),"Barramento")),Object(o.b)("li",{parentName:"ul"},"Elementos de ramo",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"line"}),"Linha")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"transformer"}),"Transformador")))),Object(o.b)("li",{parentName:"ul"},"Elementos Shunt",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"load"}),"Carga")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"capacitor"}),"Capacitor")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"inductor"}),"Indutor")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"harmSource"}),"Fonte de Corrente Harm\xf4nica")))),Object(o.b)("li",{parentName:"ul"},"M\xe1quinas",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"syncGenerator"}),"Gerador S\xedncrono")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"syncMotor"}),"Compensador S\xedncrono")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"indMotor"}),"Motor de Indu\xe7\xe3o"))))),Object(o.b)("div",null,Object(o.b)("center",null,Object(o.b)("img",{src:Object(c.a)("images/powerElements.svg"),alt:"Elementos de pot\xeancia",title:"Elementos de pot\xeancia"}))),Object(o.b)("h2",{id:"inserindo-elementos"},"Inserindo elementos"),Object(o.b)("p",null,"Por meio do submenu ",Object(o.b)("strong",{parentName:"p"},"Ferramentas")," pode-se inserir os elementos de pot\xeancia, como \xe9 apresentado na imagem abaixo."),Object(o.b)("div",null,Object(o.b)("center",null,Object(o.b)("img",{src:Object(c.a)("images/addPowerElements.png"),alt:"Adicionar elementos de pot\xeancia",title:"Adicionar elementos de pot\xeancia"}))),Object(o.b)("p",null,"No caso de inser\xe7\xe3o de um barramento, o usu\xe1rio deve apenas clicar na posi\xe7\xe3o desejada, j\xe1 para os outros componentes ser\xe1 solicitado que o usu\xe1rio selecione em uma ou duas barras, o qual o novo componente ser\xe1 conectado."),Object(o.b)("p",null,"Sempre que s\xe3o inseridos novos elementos, um formul\xe1rio de dados \xe9 exibido e pode-se editar os dados el\xe9tricos e acessar formul\xe1rios adicionais, como dados de estabilidade."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Aten\xe7\xe3o")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"O primeiro elemento que a ser inserido no projeto ",Object(o.b)("strong",{parentName:"p"},"deve")," ser um barramento. Os demais elementos el\xe9tricos devem ser conectados em uma ou mais barras."))),Object(o.b)("p",null,"Al\xe9m dos elementos de pot\xeancia pode-se inserir os elementos de ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"text"}),"texto vinculado")),", os quais est\xe3o associados a uma grandeza que se deseja vizualizar diretamente na ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"mainScreen#%C3%A1rea-de-trabalho"}),"\xc1rea de Trabalho"),"."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Cuidado!")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Ao inserir um barramento, a mesma ir\xe1 acompanhar o ponteiro do mouse at\xe9 que voc\xea clique na posi\xe7\xe3o desejada. Para os demais elementos ",Object(o.b)("strong",{parentName:"p"},"deve-se clicar em uma mais barras")," para exibir o elemento inserido."),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Sempre fique atento \xe0s instru\xe7\xf5es da ",Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"mainScreen#barra-de-status"}),"Barra de Status"),".")))),Object(o.b)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0},Object(o.b)("source",{src:"/PSP/videos/timelapseBuild.mp4",type:"video/mp4"})),Object(o.b)("h3",{id:"teclas-de-atalho"},"Teclas de atalho"),Object(o.b)("p",null,"\xc9 poss\xedvel inserir todos os elementos de pot\xeancia por meio de teclas de atalho, facilitando e agilizando a cria\xe7\xe3o dos diagramas unifilares no PSP-UFU. A tabela abaixo apresenta tais atalhos:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Elemento"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Atalho"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Elemento"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"Atalho"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Barramento"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"B"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Carga"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Shift + L")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Linha"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"L"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Capacitor"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Shift + C")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Transformador"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"T"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Indutor"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Shift + I")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Gerador"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"G"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Corrente harm\xf4nica"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Shift + H")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Motor de indu\xe7\xe3o"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"I"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Texto"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"A")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Compensador s\xedncrono"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"K"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(o.b)("h2",{id:"editando-dados-el\xe9tricos"},"Editando dados el\xe9tricos"),Object(o.b)("p",null,"Ao inserir um elemento, seu respectivo formul\xe1rio de edi\xe7\xe3o \xe9 exibido para inser\xe7\xe3o dos dados el\xe9tricos d elemento. Todos os dados podem ser ",Object(o.b)("strong",{parentName:"p"},"alterados")," ao ",Object(o.b)("strong",{parentName:"p"},"clicar duas vezes sobre o elemento")," ou por op\xe7\xe3o do ",Object(o.b)("strong",{parentName:"p"},"menu de contexto")," exibido ao clicar com o bot\xe3o direito sobre o elemento."),Object(o.b)("p",null,"Cada formul\xe1rio de edi\xe7\xe3o de dados el\xe9tricos dos elementos possuem suas particularidades e s\xe3o descritos em documenta\xe7\xe3o espec\xedfica: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"bus"}),"Barramento"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"line"}),"Linha"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"transformer"}),"Transformador"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"load"}),"Carga"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"capacitor"}),"Capacitor"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"inductor"}),"Indutor"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"harmSource"}),"Fonte de Corrente Harm\xf4nica"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"syncGenerator"}),"Gerador S\xedncrono"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"syncMotor"}),"Compensador S\xedncrono"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"indMotor"}),"Motor de Indu\xe7\xe3o"),"."))}d.isMDXComponent=!0}}]);