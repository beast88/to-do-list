//import{clearElement} from "./clearElement.js";
//import{createToDoHandler} from "./createToDoHandler.js";
import{renderToDos} from "./renderToDos.js";

const renderToDoContainer = (project, projects) => {
	const projectTitle = document.querySelector(".project-title");
	projectTitle.innerText = `${project.name}`;

	const toDoContainer = document.querySelector(".to-dos");

	//clearElement(toDoContainer);

	renderToDos(project, projects);

};

export {renderToDoContainer};