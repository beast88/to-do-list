(()=>{"use strict";const t=t=>{for(;t.firstChild;)t.removeChild(t.firstChild)},e=()=>{document.querySelector(".form-bg").remove()},n=t=>{localStorage.setItem("project.list",JSON.stringify(t))},o=(t,o,r)=>{const s=document.createElement("i");s.setAttribute("class","fa fa-plus-circle");const a=document.createElement("div");a.setAttribute("class","create-to-do");const i=document.createElement("p");i.innerText="Add an item",a.append(s,i),t.append(a),a.addEventListener("click",(t=>{(()=>{const t=document.querySelector(".main"),e=document.createElement("div");e.setAttribute("class","form-bg");const n=document.createElement("div");n.setAttribute("class","to-do-form-container"),e.append(n);const o=document.createElement("form");o.setAttribute("class","to-do-form"),o.setAttribute("id","to-do-form");const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","to-do-name"),c.setAttribute("name","to-do-name"),c.setAttribute("placeholder","Enter Here");const r=document.createElement("label");r.setAttribute("for","to-do-name"),r.innerText="What do you need to do?";const s=document.createElement("select");s.setAttribute("id","priority"),s.setAttribute("name","priority");const a=document.createElement("option");a.setAttribute("value","low"),a.innerText="Low";const i=document.createElement("option");i.setAttribute("value","med"),i.innerText="Medium";const d=document.createElement("option");d.setAttribute("value","high"),d.innerText="High",s.append(a,i,d);const u=document.createElement("label");u.setAttribute("for","priority"),u.innerText="Set a priority:";const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("id","date"),l.setAttribute("name","date");const m=document.createElement("label");m.setAttribute("for","date"),m.innerText="Due Date:";const p=document.createElement("textarea");p.setAttribute("form","to-do-form"),p.setAttribute("name","description"),p.setAttribute("id","description"),p.setAttribute("placeholder","Enter a description...");const b=document.createElement("button");b.setAttribute("class","form-button"),b.setAttribute("id","create-to-do"),b.innerText="Create";const E=document.createElement("button");E.setAttribute("class","form-button"),E.setAttribute("id","cancel"),E.innerText="Cancel";const A=document.createElement("div");A.setAttribute("class","buttons-container"),A.setAttribute("class","to-do-buttons"),A.append(b,E),n.append(o),o.append(r,c,u,s,m,l,p,A),t.append(e)})(),((t,o)=>{const r=document.getElementById("cancel"),s=document.getElementById("create-to-do");r.addEventListener("click",(t=>{e()})),s.addEventListener("click",(r=>{r.preventDefault();var s=document.getElementById("to-do-name").value;if(null===s||""===s)return;const a=((t,e,n,o)=>({name:t,priority:document.getElementById("priority").value,dueDate:document.getElementById("date").value,desc:document.getElementById("description").value}))(s);t.tasks.push(a),e(),n(o),c(t,o)}))})(o,r)}))},c=(e,n)=>{document.querySelector(".project-title").innerText=""+e.name;const c=document.querySelector(".to-dos");t(c),o(c,e,n),(t=>{const e=t.tasks,n=document.querySelector(".to-dos"),o=document.createElement("ul");o.setAttribute("class","to-do-list-container"),n.append(o),e.forEach((t=>{const e=document.createElement("li");e.setAttribute("class","to-do-item");const n=document.createElement("input");n.setAttribute("type","checkbox");const c=document.createElement("p");c.setAttribute("class","to-do-name"),c.innerText=""+t.name,e.append(n,c),o.append(e)})),console.log(n)})(e)},r=(o,r)=>{const s=document.querySelector(".project-list");var a;t(s),o.forEach((t=>{const e=document.createElement("div");e.setAttribute("class","project-name-container");const n=document.createElement("li");n.setAttribute("class","project-name"),n.setAttribute("id",""+t.id),n.innerText=t.name,t.id===r&&(n.classList.add("active-project"),c(t,o));const a=document.createElement("i");a.setAttribute("class","fa fa-trash-o"),a.classList.add("delete-icon"),a.setAttribute("id",""+t.id),s.append(e),e.append(n,a)})),a=o,document.querySelectorAll(".delete-icon").forEach((t=>{t.addEventListener("click",(o=>{(()=>{const t=document.querySelector(".main"),e=document.createElement("div");e.setAttribute("class","form-bg");const n=document.createElement("div");n.setAttribute("class","form-container"),n.classList.add("delete-form");const o=document.createElement("p");o.innerText="Are you sure you want to delete this?";const c=document.createElement("div");c.setAttribute("class","buttons-container");const r=document.createElement("button");r.innerText="Delete",r.setAttribute("class","form-button"),r.setAttribute("id","confirm");const s=document.createElement("button");s.innerText="Cancel",s.setAttribute("class","form-button"),s.setAttribute("id","cancel"),c.append(r,s),n.append(o,c),e.append(n),t.append(e)})(),((t,o)=>{const c=document.getElementById("cancel"),r=document.getElementById("confirm");c.addEventListener("click",(t=>{e()})),r.addEventListener("click",(c=>{o.forEach((c=>{if(t.getAttribute("id")===c.id){let t=o.indexOf(c);o.splice(t,1),e(),n(o),location.reload()}}))}))})(t,a)}))}))};let s=JSON.parse(localStorage.getItem("project.list"))||[],a=localStorage.getItem("project.selectedProjectId");r(s,a),((t,e)=>{document.querySelector(".project-list").addEventListener("click",(n=>{"li"===n.target.tagName.toLowerCase()&&(t=n.target.getAttribute("id"),r(e,t))}))})(a,s),(t=>{document.querySelector(".create-project").addEventListener("click",(o=>{(()=>{const t=document.querySelector(".main"),e=document.createElement("div");e.setAttribute("class","form-bg");const n=document.createElement("div");n.setAttribute("class","form-container"),e.append(n);const o=document.createElement("form");o.setAttribute("class","project-form");const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","project-name"),c.setAttribute("name","project-name"),c.setAttribute("placeholder","Enter Here");const r=document.createElement("label");r.setAttribute("for","project-name"),r.innerText="Enter Project Name:";const s=document.createElement("button");s.setAttribute("class","form-button"),s.setAttribute("id","project-submit"),s.innerText="Create",n.append(o),o.append(r,c,s),t.append(e)})(),(t=>{document.querySelector("#project-submit").addEventListener("click",(o=>{o.preventDefault();var c=document.getElementById("project-name").value;if(null===c||""===c)return;const s=(t=>({id:Date.now().toString(),name:t,tasks:[]}))(c);t.push(s),e(),n(t),r(t)}))})(t)}))})(s)})();