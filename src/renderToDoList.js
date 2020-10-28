import{clearElement} from "./clearElement.js";
import{createToDoHandler} from "./createToDoHandler.js";
import{renderToDos} from "./renderToDos.js";

const renderToDoList = (project, projects) => {
	const projectTitle = document.querySelector(".project-title");
	projectTitle.innerText = `${project.name}`;

	const toDoContainer = document.querySelector(".to-dos");

	clearElement(toDoContainer);

	createToDoHandler(toDoContainer, project, projects);

	//Render the list of project tasks
	renderToDos(project);

};

export {renderToDoList};