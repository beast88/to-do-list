import{renderEditForm} from "./renderEditForm.js";

const editToDoHandler = (toDos) => {
	const names = document.querySelectorAll('.to-do-name');

	names.forEach(name => {
		name.addEventListener('click', (e) => {
			toDos.forEach(toDo => {
				if (toDo.id === name.getAttribute('id')) {
					renderEditForm(toDo);
				};
			});
		});
	});

};

export{editToDoHandler};