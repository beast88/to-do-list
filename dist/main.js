(()=>{"use strict";let e=[];document.querySelector(".create-project").addEventListener("click",(t=>{(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.setAttribute("class","form-bg");const n=document.createElement("div");n.setAttribute("class","form-container"),t.append(n);const r=document.createElement("form");r.setAttribute("class","project-form");const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","project-name"),c.setAttribute("name","project-name"),c.setAttribute("placeholder","Enter Here");const o=document.createElement("label");o.setAttribute("for","project-name"),o.innerText="Enter Project Name:";const s=document.createElement("button");s.setAttribute("id","project-submit"),s.innerText="Create",n.append(r),r.append(o,c,s),e.append(t)})(),(e=>{const t=document.querySelector(".form-bg");document.querySelector("#project-submit").addEventListener("click",(n=>{n.preventDefault();var r=document.getElementById("project-name").value;if(null===r||""===r)return;const c=(e=>({id:Date.now().toString(),name:e,tasks:[]}))(r);e.push(c),t.remove(),(e=>{const t=document.querySelector(".project-list");(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(t),e.forEach((e=>{const n=document.createElement("div");n.setAttribute("class","project-name-container");const r=document.createElement("li");r.setAttribute("class","project-name"),r.innerText=e.name;const c=document.createElement("i");c.setAttribute("class","fa fa-trash-o"),c.classList.add("delete-icon"),c.setAttribute("id",""+e.id),t.append(n),n.append(r,c)}))})(e)}))})(e)}))})();