(()=>{"use strict";const e=e=>{const t=document.querySelector(".form-bg");document.querySelector("#project-submit").addEventListener("click",(n=>{n.preventDefault();var c=document.getElementById("project-name").value;if(null===c||""===c)return;const r=(e=>({id:Date.now().toString(),name:e,tasks:[]}))(c);e.push(r),t.remove(),(e=>{const t=document.querySelector(".project-list");(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(t),e.forEach((e=>{const n=document.createElement("div");n.setAttribute("class","project-name-container");const c=document.createElement("li");c.setAttribute("class","project-name"),c.innerText=e.name;const r=document.createElement("i");r.setAttribute("class","fa fa-trash-o"),r.classList.add("delete-icon"),r.setAttribute("id",""+e.id),t.append(n),n.append(c,r)})),document.querySelectorAll(".delete-icon").forEach((e=>{e.addEventListener("click",(t=>{console.log(e.getAttribute("id")),(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.setAttribute("class","form-bg");const n=document.createElement("div");n.setAttribute("class","form-container"),n.classList.add("delete-form");const c=document.createElement("p");c.innerText="Are you sure you want to delete this?";const r=document.createElement("div");r.setAttribute("class","buttons-container");const o=document.createElement("button");o.innerText="Delete",o.setAttribute("class","form-button"),o.setAttribute("id","confirm");const s=document.createElement("button");s.innerText="Cancel",s.setAttribute("class","form-button"),s.setAttribute("id","cancel"),r.append(o,s),n.append(c,r),t.append(n),e.append(t)})()}))}))})(e)}))};let t=[];document.querySelector(".create-project").addEventListener("click",(n=>{(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.setAttribute("class","form-bg");const n=document.createElement("div");n.setAttribute("class","form-container"),t.append(n);const c=document.createElement("form");c.setAttribute("class","project-form");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","project-name"),r.setAttribute("name","project-name"),r.setAttribute("placeholder","Enter Here");const o=document.createElement("label");o.setAttribute("for","project-name"),o.innerText="Enter Project Name:";const s=document.createElement("button");s.setAttribute("class","form-button"),s.setAttribute("id","project-submit"),s.innerText="Create",n.append(c),c.append(o,r,s),e.append(t)})(),e(t)}))})();