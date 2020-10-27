import{removeForm} from "./removeForm.js";

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

		console.log(name, priority, dueDate, desc);
	});

};

export {createToDoController};