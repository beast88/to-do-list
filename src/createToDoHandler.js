import{renderToDoForm} from "./renderToDoForm.js";
import{createToDoController} from "./createToDoController.js";

//creates the add to do list button and handles it
const createToDoHandler = (element) => {
	const createIcon = document.createElement('i');
	createIcon.setAttribute('class', 'fa fa-plus-circle');

	const createToDo = document.createElement('div');
	createToDo.setAttribute('class', 'create-to-do');

	const message = document.createElement('p');
	message.innerText = `Add an item`;

	createToDo.append(createIcon, message);

	element.append(createToDo);

	createToDo.addEventListener('click', (e) => {
		renderToDoForm();
		createToDoController();
	});

};

export{createToDoHandler};