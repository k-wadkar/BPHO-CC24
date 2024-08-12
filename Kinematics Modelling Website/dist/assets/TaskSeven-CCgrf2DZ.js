import{_ as j,r as R,i as P,o as E,c as G,b as B,u as d,a as t,j as m,v as p,k as x,p as N,l as Z}from"./index-C5H3WEU1.js";import{y as X,g as y,h,i as g,j as b,k as f,l as C,R as q}from"./ReloadButton-Cjmm-ytP.js";const Y=c=>(N("data-v-806b645d"),c=c(),Z(),c),A={style:{padding:"0px"}},J={id:"graphConfig"},K=Y(()=>t("td",null,[t("label",null,"Gravity/ms⁻²")],-1)),L=Y(()=>t("td",null,[t("label",null,"Initial speed/ms⁻¹")],-1)),Q=Y(()=>t("td",null,[t("label",null,"Initial height/m")],-1)),W=Y(()=>t("td",null,[t("label",null,"Number of intervals")],-1)),$=Y(()=>t("td",null,[t("label",null,"Underflow/m")],-1)),ee={__name:"GraphSeven",setup(c){let e=[30,45,60,71,78,85],l=R(2.5),a=R(5),u=R(0),v=R(100),i=R(-10);const D=P(()=>{let r=[],o=[],n=y(a.value,l.value,u.value,e[0],v.value,i.value);r.push(h(a.value,l.value,u.value,e[0])),o.push(g(a.value,l.value,u.value,e[0]));let _=y(a.value,l.value,u.value,e[1],v.value,i.value);r.push(h(a.value,l.value,u.value,e[1])),o.push(g(a.value,l.value,u.value,e[1]));let k=y(a.value,l.value,u.value,e[2],v.value,i.value);r.push(h(a.value,l.value,u.value,e[2])),o.push(g(a.value,l.value,u.value,e[2]));let w=y(a.value,l.value,u.value,e[3],v.value,i.value);r.push(h(a.value,l.value,u.value,e[3])),o.push(g(a.value,l.value,u.value,e[3]));let V=y(a.value,l.value,u.value,e[4],v.value,i.value);r.push(h(a.value,l.value,u.value,e[4])),o.push(g(a.value,l.value,u.value,e[4]));let U=y(a.value,l.value,u.value,e[5],v.value,i.value);r.push(h(a.value,l.value,u.value,e[5])),o.push(g(a.value,l.value,u.value,e[5]));let T=[],M=[];for(let s=0;s<r.length;s++)r[s]!=null&&(T.push(r[s][0]),M.push(r[s][1]));let S=[],I=[];for(let s=0;s<o.length;s++)o[s]!=null&&(S.push(o[s][0]),I.push(o[s][1]));return[{x:n[0],y:n[1],mode:"lines",line:{color:"red"},name:e[0]+"°"},{x:_[0],y:_[1],mode:"lines",line:{color:"orange"},name:e[1]+"°"},{x:k[0],y:k[1],mode:"lines",line:{color:"yellow"},name:e[2]+"°"},{x:w[0],y:w[1],mode:"lines",line:{color:"green"},name:e[3]+"°"},{x:V[0],y:V[1],mode:"lines",line:{color:"blue"},name:e[4]+"°"},{x:U[0],y:U[1],mode:"lines",line:{color:"violet"},name:e[5]+"°"},{x:T,y:M,type:"scatter",mode:"markers",marker:{color:"goldenrod"},name:"Maxima"},{x:S,y:I,type:"scatter",mode:"markers",marker:{color:"grey"},name:"Minima"}]}),O=P(()=>{let r=[],o=[],n=b(a.value,l.value,u.value,e[0],v.value,i.value);r.push(f(a.value,l.value,u.value,e[0])),o.push(C(a.value,l.value,u.value,e[0]));let _=b(a.value,l.value,u.value,e[1],v.value,i.value);r.push(f(a.value,l.value,u.value,e[1])),o.push(C(a.value,l.value,u.value,e[1]));let k=b(a.value,l.value,u.value,e[2],v.value,i.value);r.push(f(a.value,l.value,u.value,e[2])),o.push(C(a.value,l.value,u.value,e[2]));let w=b(a.value,l.value,u.value,e[3],v.value,i.value);r.push(f(a.value,l.value,u.value,e[3])),o.push(C(a.value,l.value,u.value,e[3]));let V=b(a.value,l.value,u.value,e[4],v.value,i.value);r.push(f(a.value,l.value,u.value,e[4])),o.push(C(a.value,l.value,u.value,e[4]));let U=b(a.value,l.value,u.value,e[5],v.value,i.value);r.push(f(a.value,l.value,u.value,e[5])),o.push(C(a.value,l.value,u.value,e[5]));let T=[],M=[];for(let s=0;s<r.length;s++)r[s]!=null&&(T.push(r[s][0]),M.push(r[s][1]));let S=[],I=[];for(let s=0;s<o.length;s++)o[s]!=null&&(S.push(o[s][0]),I.push(o[s][1]));return[{x:n[0],y:n[1],mode:"lines",line:{color:"red"},name:e[0]+"°"},{x:_[0],y:_[1],mode:"lines",line:{color:"orange"},name:e[1]+"°"},{x:k[0],y:k[1],mode:"lines",line:{color:"yellow"},name:e[2]+"°"},{x:w[0],y:w[1],mode:"lines",line:{color:"green"},name:e[3]+"°"},{x:V[0],y:V[1],mode:"lines",line:{color:"blue"},name:e[4]+"°"},{x:U[0],y:U[1],mode:"lines",line:{color:"violet"},name:e[5]+"°"},{x:T,y:M,type:"scatter",mode:"markers",marker:{color:"goldenrod"},name:"Maxima"},{x:S,y:I,type:"scatter",mode:"markers",marker:{color:"grey"},name:"Minima"}]}),z={paper_bgcolor:"rgba(0, 0, 0, 0)",plot_bgcolor:"rgba(0, 0, 0, 0)",xaxis:{title:"Horizontal displacement/m",showgrid:!1},yaxis:{title:"Vertical displacement/m",showgrid:!1}},H={paper_bgcolor:"rgba(0, 0, 0, 0)",plot_bgcolor:"rgba(0, 0, 0, 0)",xaxis:{title:"Time/s",showgrid:!1},yaxis:{title:"Range/m",showgrid:!1}},F={scrollZoom:!0,responsive:!0};return(r,o)=>(E(),G("main",A,[B(d(X),{data:D.value,layout:z,config:F},null,8,["data"]),B(d(X),{data:O.value,layout:H,config:F},null,8,["data"]),t("table",J,[t("tr",null,[K,t("td",null,[m(t("input",{type:"number",max:"100",min:"0.01",step:"0.01","onUpdate:modelValue":o[0]||(o[0]=n=>x(l)?l.value=n:l=n)},null,512),[[p,d(l),void 0,{number:!0}]])]),t("td",null,[m(t("input",{type:"range",max:"100",min:"0.01",step:"0.01","onUpdate:modelValue":o[1]||(o[1]=n=>x(l)?l.value=n:l=n)},null,512),[[p,d(l),void 0,{number:!0}]])])]),t("tr",null,[L,t("td",null,[m(t("input",{type:"number",max:"100",min:"0.25",step:"0.01","onUpdate:modelValue":o[2]||(o[2]=n=>x(a)?a.value=n:a=n)},null,512),[[p,d(a),void 0,{number:!0}]])]),t("td",null,[m(t("input",{type:"range",max:"100",min:"0.25",step:"0.01","onUpdate:modelValue":o[3]||(o[3]=n=>x(a)?a.value=n:a=n)},null,512),[[p,d(a),void 0,{number:!0}]])])]),t("tr",null,[Q,t("td",null,[m(t("input",{type:"number",max:"100",min:"0",step:"0.01","onUpdate:modelValue":o[4]||(o[4]=n=>x(u)?u.value=n:u=n)},null,512),[[p,d(u),void 0,{number:!0}]])]),t("td",null,[m(t("input",{type:"range",max:"100",min:"0",step:"0.01","onUpdate:modelValue":o[5]||(o[5]=n=>x(u)?u.value=n:u=n)},null,512),[[p,d(u),void 0,{number:!0}]])])]),t("tr",null,[W,t("td",null,[m(t("input",{type:"number",min:"5",max:"1000",step:"1","onUpdate:modelValue":o[6]||(o[6]=n=>x(v)?v.value=n:v=n)},null,512),[[p,d(v),void 0,{number:!0}]])]),t("td",null,[m(t("input",{type:"range",min:"5",max:"1000",step:"1","onUpdate:modelValue":o[7]||(o[7]=n=>x(v)?v.value=n:v=n)},null,512),[[p,d(v),void 0,{number:!0}]])])]),t("tr",null,[$,t("td",null,[m(t("input",{type:"number",max:"0",min:"-50",step:"1","onUpdate:modelValue":o[8]||(o[8]=n=>x(i)?i.value=n:i=n)},null,512),[[p,d(i),void 0,{number:!0}]])]),t("td",null,[m(t("input",{type:"range",max:"0",min:"-50",step:"1","onUpdate:modelValue":o[9]||(o[9]=n=>x(i)?i.value=n:i=n)},null,512),[[p,d(i),void 0,{number:!0}]])])])])]))}},le=j(ee,[["__scopeId","data-v-806b645d"]]),ae=c=>(N("data-v-eefc2373"),c=c(),Z(),c),ue={class:"rootElement"},oe=ae(()=>t("h1",null,"Task Seven",-1)),te={__name:"TaskSeven",setup(c){return(e,l)=>(E(),G("div",ue,[oe,B(le),B(q)]))}},re=j(te,[["__scopeId","data-v-eefc2373"]]);export{re as default};
