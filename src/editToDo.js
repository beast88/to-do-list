const editToDo = (toDo) => {
	const id = toDo.id

	const name = document.getElementById('to-do-name').value;
	const priority = document.getElementById('priority').value;
	const dueDate = document.getElementById('date').value;
	const desc = document.getElementById('description').value;

	const complete = toDo.complete

	toDo.name = name;
	toDo.priority = priority;
	toDo.dueDate = dueDate;
	toDo.desc = desc;

};

export{editToDo};