import{checkboxHandler} from "./checkboxHandler.js";

const renderToDos = (project, projects) => {
	const toDos = project.tasks;

	const toDoContainer = document.querySelector('.to-dos');

	const listContainer = document.createElement('ul');
	listContainer.setAttribute('class', 'to-do-list-container');

	toDoContainer.append(listContainer);

	toDos.forEach(toDo => {
		const toDoItem = document.createElement('li');
		toDoItem.setAttribute('class', 'to-do-item');

		const checkbox = document.createElement('div');
		checkbox.setAttribute('class', 'checkbox');
		checkbox.setAttribute('id', `${toDo.id}`);

		const toDoName = document.createElement('p');
		toDoName.setAttribute('class', 'to-do-name');
		toDoName.innerText = `${toDo.name}`;

		const priority = document.createElement('div');
		priority.setAttribute('class', 'priority');
		priority.classList.add(`${toDo.priority}`);

		toDoItem.append(checkbox, toDoName, priority);

		listContainer.append(toDoItem);
	});

	//Run a function to check if the checkbox has been clicked and change the complete status of the task
	checkboxHandler(toDos, projects);

	//Run a function to open an edit box

};

export{renderToDos};