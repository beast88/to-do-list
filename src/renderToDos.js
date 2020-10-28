const renderToDos = (project) => {
	const toDos = project.tasks;

	const toDoContainer = document.querySelector('.to-dos');

	const listContainer = document.createElement('ul');
	listContainer.setAttribute('class', 'to-do-list-container');

	toDoContainer.append(listContainer);

	toDos.forEach(toDo => {
		const toDoItem = document.createElement('li');
		toDoItem.setAttribute('class', 'to-do-item');

		const toDoName = document.createElement('p');
		toDoName.setAttribute('class', 'to-do-name');
		toDoName.innerText = `${toDo.name}`;

		toDoItem.append(toDoName);

		listContainer.append(toDoItem);
	});

	console.log(toDoContainer);

};

export{renderToDos};