import{_ as D,r as c,i as q,o as R,c as C,b as V,u,a as l,j as o,v as a,k as i,p as M,l as P}from"./index-C5H3WEU1.js";import{y as T,f as j,d as E,s as B,m as _,R as Z}from"./ReloadButton-Cjmm-ytP.js";const y=p=>(M("data-v-65447c68"),p=p(),P(),p),z={style:{padding:"0px"}},H=y(()=>l("br",null,null,-1)),O=y(()=>l("br",null,null,-1)),X={id:"graphConfig"},Y=y(()=>l("td",null,[l("label",null,"Angle/°")],-1)),F=y(()=>l("td",null,[l("label",null,"Gravity/ms⁻²")],-1)),J=y(()=>l("td",null,[l("label",null,"Initial speed/ms⁻¹")],-1)),K=y(()=>l("td",null,[l("label",null,"Initial height/m")],-1)),L=y(()=>l("td",null,[l("label",null,"Time interval/s")],-1)),Q=y(()=>l("td",null,[l("label",null,"Coefficient of Restitution")],-1)),W=y(()=>l("td",null,[l("label",null,"Number of bounces")],-1)),$={__name:"GraphEight",setup(p){let d=c(45),r=c(9.81),v=c(10),b=c(0),s=c(.01),m=c(.7),g=c(10);const U=q(()=>{let n=j(v.value,r.value,b.value,0,d.value,s.value),t=m.value*-n[3],e=n[0][n[0].length-1],k=E(Math.atan(t/n[2])),w=B(_(t)+_(n[2]));for(let I=0;I<g.value;I++){let x=j(w,r.value,0,e,k,s.value);n[0]=n[0].concat(x[0]),n[1]=n[1].concat(x[1]),n[2]=x[2],n[3]=x[3],t=m.value*-n[3],e=n[0][n[0].length-1],k=E(Math.atan(t/n[2])),w=B(_(t)+_(n[2]))}return[{x:n[0],y:n[1],mode:"lines",line:{color:"dodgerblue"}}]});let f=c([{x:[],y:[],mode:"lines",line:{color:"dodgerblue",dash:"dot",width:1},name:"Trajectory"},{x:[],y:[],type:"scatter",mode:"markers",marker:{color:"goldenrod"},name:"Projectile"}]);function S(){const n=U.value;f.value=[{x:[],y:[],mode:"lines",line:{color:"dodgerblue",dash:"dot",width:1},name:"Trajectory"},{x:[],y:[],type:"scatter",mode:"markers",marker:{color:"red"},name:"Projectile"}];let t=0;const e=setInterval(()=>{A(t,n),t++,t==n[0].x.length&&clearInterval(e)},s.value*1e3)}function A(n,t){f.value[0].x.push(t[0].x[n]),f.value[0].y.push(t[0].y[n]),f.value[1].x=[t[0].x[n]],f.value[1].y=[t[0].y[n]]}const h={paper_bgcolor:"rgba(0, 0, 0, 0)",plot_bgcolor:"rgba(0, 0, 0, 0)",xaxis:{title:"Horizontal displacement/m",showgrid:!1},yaxis:{title:"Vertical displacement/m",showgrid:!1}},G={scrollZoom:!0,responsive:!0},N={displayModeBar:!1,scrollZoom:!1,responsive:!1,staticPlot:!0};return(n,t)=>(R(),C("main",z,[V(u(T),{data:U.value,layout:h,config:G},null,8,["data"]),V(u(T),{data:u(f),layout:h,config:N},null,8,["data"]),l("div",{id:"animationDiv"},[H,l("button",{onClick:S},"Play animation")]),O,l("table",X,[l("tr",null,[Y,l("td",null,[o(l("input",{type:"number",max:"85",min:"1",step:"0.1","onUpdate:modelValue":t[0]||(t[0]=e=>i(d)?d.value=e:d=e)},null,512),[[a,u(d),void 0,{number:!0}]])]),l("td",null,[o(l("input",{type:"range",max:"85",min:"1",step:"0.1","onUpdate:modelValue":t[1]||(t[1]=e=>i(d)?d.value=e:d=e)},null,512),[[a,u(d),void 0,{number:!0}]])])]),l("tr",null,[F,l("td",null,[o(l("input",{type:"number",max:"100",min:"0.01",step:"0.01","onUpdate:modelValue":t[2]||(t[2]=e=>i(r)?r.value=e:r=e)},null,512),[[a,u(r),void 0,{number:!0}]])]),l("td",null,[o(l("input",{type:"range",max:"100",min:"0.01",step:"0.01","onUpdate:modelValue":t[3]||(t[3]=e=>i(r)?r.value=e:r=e)},null,512),[[a,u(r),void 0,{number:!0}]])])]),l("tr",null,[J,l("td",null,[o(l("input",{type:"number",max:"100",min:"0.25",step:"0.01","onUpdate:modelValue":t[4]||(t[4]=e=>i(v)?v.value=e:v=e)},null,512),[[a,u(v),void 0,{number:!0}]])]),l("td",null,[o(l("input",{type:"range",max:"100",min:"0.25",step:"0.01","onUpdate:modelValue":t[5]||(t[5]=e=>i(v)?v.value=e:v=e)},null,512),[[a,u(v),void 0,{number:!0}]])])]),l("tr",null,[K,l("td",null,[o(l("input",{type:"number",max:"100",min:"0",step:"0.01","onUpdate:modelValue":t[6]||(t[6]=e=>i(b)?b.value=e:b=e)},null,512),[[a,u(b),void 0,{number:!0}]])]),l("td",null,[o(l("input",{type:"range",max:"100",min:"0",step:"0.01","onUpdate:modelValue":t[7]||(t[7]=e=>i(b)?b.value=e:b=e)},null,512),[[a,u(b),void 0,{number:!0}]])])]),l("tr",null,[L,l("td",null,[o(l("input",{type:"number",min:"0.001",max:"0.1",step:"0.001","onUpdate:modelValue":t[8]||(t[8]=e=>i(s)?s.value=e:s=e)},null,512),[[a,u(s),void 0,{number:!0}]])]),l("td",null,[o(l("input",{type:"range",min:"0.001",max:"0.1",step:"0.001","onUpdate:modelValue":t[9]||(t[9]=e=>i(s)?s.value=e:s=e)},null,512),[[a,u(s),void 0,{number:!0}]])])]),l("tr",null,[Q,l("td",null,[o(l("input",{type:"number",min:"0.001",max:"1",step:"0.001","onUpdate:modelValue":t[10]||(t[10]=e=>i(m)?m.value=e:m=e)},null,512),[[a,u(m),void 0,{number:!0}]])]),l("td",null,[o(l("input",{type:"range",min:"0.001",max:"1",step:"0.001","onUpdate:modelValue":t[11]||(t[11]=e=>i(m)?m.value=e:m=e)},null,512),[[a,u(m),void 0,{number:!0}]])])]),l("tr",null,[W,l("td",null,[o(l("input",{type:"number",min:"0",max:"25",step:"1","onUpdate:modelValue":t[12]||(t[12]=e=>i(g)?g.value=e:g=e)},null,512),[[a,u(g),void 0,{number:!0}]])]),l("td",null,[o(l("input",{type:"range",min:"0",max:"25",step:"1","onUpdate:modelValue":t[13]||(t[13]=e=>i(g)?g.value=e:g=e)},null,512),[[a,u(g),void 0,{number:!0}]])])])])]))}},ll=D($,[["__scopeId","data-v-65447c68"]]),el=p=>(M("data-v-bf410270"),p=p(),P(),p),tl={class:"rootElement"},nl=el(()=>l("h1",null,"Task Eight",-1)),ul={__name:"TaskEight",setup(p){return(d,r)=>(R(),C("div",tl,[nl,V(ll),V(Z)]))}},il=D(ul,[["__scopeId","data-v-bf410270"]]);export{il as default};
