import{clearElement} from "./clearElement.js";
import{createToDoHandler} from "./createToDoHandler.js";

const renderToDoList = (project) => {
	const projectTitle = document.querySelector(".project-title");
	projectTitle.innerText = `${project.name}`;

	const toDoContainer = document.querySelector(".to-dos");

	clearElement(toDoContainer);

	createToDoHandler(toDoContainer, project);

};

export {renderToDoList};