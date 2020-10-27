import{removeForm} from "./removeForm.js";
import{createToDo} from "./createToDo.js";

const createToDoController = () => {
	const cancelBtn = document.getElementById('cancel');
	const createBtn = document.getElementById('create-to-do');

	cancelBtn.addEventListener('click', (e) => {
		removeForm();
	});

	createBtn.addEventListener('click', (e) => {
		(e).preventDefault();

		var name = document.getElementById('to-do-name').value;

		if (name === null || name === '') return;

		var priority = document.getElementById('priority').value;
		var dueDate = document.getElementById('date').value;
		var desc = document.getElementById('description').value;

		const toDo = createToDo(name, priority, dueDate, desc);

		console.log(toDo);
	});

};

export {createToDoController};