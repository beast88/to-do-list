(()=>{"use strict";const e=()=>{document.querySelector(".form-bg").remove()},t=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},n=(c,r)=>{const o=document.querySelector(".project-list");(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(o),c.forEach((e=>{const t=document.createElement("div");t.setAttribute("class","project-name-container");const n=document.createElement("li");n.setAttribute("class","project-name"),n.innerText=e.name;const c=document.createElement("i");c.setAttribute("class","fa fa-trash-o"),c.classList.add("delete-icon"),c.setAttribute("id",""+e.id),o.append(t),t.append(n,c)})),((c,r)=>{document.querySelectorAll(".delete-icon").forEach((o=>{o.addEventListener("click",(s=>{(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.setAttribute("class","form-bg");const n=document.createElement("div");n.setAttribute("class","form-container"),n.classList.add("delete-form");const c=document.createElement("p");c.innerText="Are you sure you want to delete this?";const r=document.createElement("div");r.setAttribute("class","buttons-container");const o=document.createElement("button");o.innerText="Delete",o.setAttribute("class","form-button"),o.setAttribute("id","confirm");const s=document.createElement("button");s.innerText="Cancel",s.setAttribute("class","form-button"),s.setAttribute("id","cancel"),r.append(o,s),n.append(c,r),t.append(n),e.append(t)})(),((c,r,o)=>{const s=document.getElementById("cancel"),i=document.getElementById("confirm");s.addEventListener("click",(t=>{e()})),i.addEventListener("click",(s=>{r.forEach((s=>{if(c.getAttribute("id")===s.id){let c=r.indexOf(s);r.splice(c,1),e(),t(o,r),n(r)}}))}))})(o,c,r)}))}))})(c,r)},c="project.list";let r=JSON.parse(localStorage.getItem(c))||[];n(r,c),((c,r)=>{document.querySelector(".create-project").addEventListener("click",(r=>{(()=>{const e=document.querySelector(".main"),t=document.createElement("div");t.setAttribute("class","form-bg");const n=document.createElement("div");n.setAttribute("class","form-container"),t.append(n);const c=document.createElement("form");c.setAttribute("class","project-form");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","project-name"),r.setAttribute("name","project-name"),r.setAttribute("placeholder","Enter Here");const o=document.createElement("label");o.setAttribute("for","project-name"),o.innerText="Enter Project Name:";const s=document.createElement("button");s.setAttribute("class","form-button"),s.setAttribute("id","project-submit"),s.innerText="Create",n.append(c),c.append(o,r,s),e.append(t)})(),((c,r)=>{document.querySelector("#project-submit").addEventListener("click",(o=>{o.preventDefault();var s=document.getElementById("project-name").value;if(null===s||""===s)return;const i=(e=>({id:Date.now().toString(),name:e,tasks:[]}))(s);c.push(i),e(),t(r,c),n(c,r)}))})(c,"project.list")}))})(r)})();