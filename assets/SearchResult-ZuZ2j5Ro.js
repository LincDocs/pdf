import{i as W,u as X,j as O,k as Z,y as ee,t as se,l as le,m as A,n as Q,p as l,q as te,w as ae,v as ie,R as F,x as ue,z as re,A as ne,B as ce,D as oe,E as b,F as j,G as ve,H as he,J as de,K as me,L as ye,M as pe,N as ge,O as fe,Q as P,S as He,T as q}from"./app-BktH-1k9.js";const Re=["/","/404.html","/category/","/tag/","/Blog/","/star/","/timeline/"],ke="SLIMSEARCH_QUERY_HISTORY",p=P(ke,[]),Qe=()=>{const{queryHistoryCount:a}=q;return{enabled:a>0,queryHistories:p,addQueryHistory:r=>{p.value=Array.from(new Set([r,...p.value.slice(0,a-1)]))},removeQueryHistory:r=>{p.value=[...p.value.slice(0,r),...p.value.slice(r+1)]}}},E=a=>Re[a.id]+("anchor"in a?`#${a.anchor}`:""),qe="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:M}=q,g=P(qe,[]),we=()=>({enabled:M>0,resultHistories:g,addResultHistory:u=>{{const r={link:E(u),display:u.display};"header"in u&&(r.header=u.header),g.value=[r,...g.value.slice(0,M-1)]}},removeResultHistory:u=>{g.value=[...g.value.slice(0,u),...g.value.slice(u+1)]}}),xe=a=>{const u=ve(),r=O(),w=he(),n=A(0),f=Q(()=>n.value>0),v=de([]);return me(()=>{const{search:x,terminate:d}=ye(),H=ge(m=>{const{resultsFilter:S=t=>t,querySplitter:y,suggestionsFilter:I,...i}=u.value;m?(n.value+=1,x(m,r.value,i).then(t=>S(t,m,r.value,w.value)).then(t=>{n.value-=1,v.value=t}).catch(t=>{console.warn(t),n.value-=1,n.value||(v.value=[])})):v.value=[]},q.searchDelay-q.suggestDelay,{maxWait:5e3});pe([a,r],([m])=>H(m.join(" "))),fe(()=>{d()})}),{isSearching:f,results:v}};var Ce=W({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:u}){const r=X(),w=O(),n=Z(ee),{addQueryHistory:f,queryHistories:v,removeQueryHistory:x}=Qe(),{resultHistories:d,addResultHistory:H,removeResultHistory:m}=we(),S=se(a,"queries"),{results:y,isSearching:I}=xe(S),i=le({isQuery:!0,index:0}),t=A(0),h=A(0),T=Q(()=>v.value.length>0||d.value.length>0),C=Q(()=>y.value.length>0),L=Q(()=>y.value[t.value]||null),U=()=>{const{isQuery:e,index:s}=i;s===0?(i.isQuery=!e,i.index=e?d.value.length-1:v.value.length-1):i.index=s-1},_=()=>{const{isQuery:e,index:s}=i;s===(e?v.value.length-1:d.value.length-1)?(i.isQuery=!e,i.index=0):i.index=s+1},B=()=>{t.value=t.value>0?t.value-1:y.value.length-1,h.value=L.value.contents.length-1},Y=()=>{t.value=t.value<y.value.length-1?t.value+1:0,h.value=0},z=()=>{h.value<L.value.contents.length-1?h.value+=1:Y()},G=()=>{h.value>0?h.value-=1:B()},D=e=>e.map(s=>He(s)?s:l(s[0],s[1])),J=e=>{if(e.type==="customField"){const s=ce[e.index]||"$content",[c,k=""]=oe(s)?s[w.value].split("$content"):s.split("$content");return e.display.map(o=>l("div",D([c,...o,k])))}return e.display.map(s=>l("div",D(s)))},R=()=>{t.value=0,h.value=0,u("updateQuery",""),u("close")},K=()=>l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},n.value.queryHistory),v.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:i.isQuery&&i.index===s}],onClick:()=>{u("updateQuery",e)}},[l(b,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:j,onClick:c=>{c.preventDefault(),c.stopPropagation(),x(s)}})]))])),N=()=>l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},n.value.resultHistory),d.value.map((e,s)=>l(F,{to:e.link,class:["slimsearch-result-item",{active:!i.isQuery&&i.index===s}],onClick:()=>{R()}},()=>[l(b,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>D(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:j,onClick:c=>{c.preventDefault(),c.stopPropagation(),m(s)}})]))]));return te("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const s=L.value.contents[h.value];f(a.queries.join(" ")),H(s),r.push(E(s)),R()}}else if(e.key==="ArrowUp")U();else if(e.key==="ArrowDown")_();else if(e.key==="Enter"){const{index:s}=i;i.isQuery?(u("updateQuery",v.value[s]),e.preventDefault()):(r.push(d.value[s].link),R())}}}),ae([t,h],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:a.queries.length?!C.value:!T.value}],id:"slimsearch-results"},a.queries.length?I.value?l(ie,{hint:n.value.searching}):C.value?l("ul",{class:"slimsearch-result-list"},y.value.map(({title:e,contents:s},c)=>{const k=t.value===c;return l("li",{class:["slimsearch-result-list-item",{active:k}]},[l("div",{class:"slimsearch-result-title"},e||n.value.defaultTitle),s.map((o,V)=>{const $=k&&h.value===V;return l(F,{to:E(o),class:["slimsearch-result-item",{active:$,"aria-selected":$}],onClick:()=>{f(a.queries.join(" ")),H(o),R()}},()=>[o.type==="text"?null:l(o.type==="title"?ue:o.type==="heading"?re:ne,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[o.type==="text"&&o.header?l("div",{class:"content-header"},o.header):null,l("div",J(o))])])})])})):n.value.emptyResult:T.value?[K(),N()]:n.value.emptyHistory)}});export{Ce as default};
