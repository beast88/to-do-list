import{clearElement} from "./clearElement.js";

const renderToDoList = (project) => {
	const projectTitle = document.querySelector(".project-title");
	projectTitle.innerText = `${project.name}`;

	//Maybe move rendercreatebutton to its own function?

	const toDoContainer = document.querySelector(".to-dos");

	clearElement(toDoContainer);

	const createIcon = document.createElement('i');
	createIcon.setAttribute('class', 'fa fa-plus-circle');

	const createToDo = document.createElement('div');
	createToDo.setAttribute('class', 'create-to-do');

	const message = document.createElement('p');
	message.innerText = `Add an item`;

	createToDo.append(createIcon, message);

	toDoContainer.append(createToDo);

	console.log(createToDo);

};

export {renderToDoList};