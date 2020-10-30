import{renderEditForm} from "./renderEditForm.js";
import{deleteToDo} from "./deleteToDo.js";

const editToDoHandler = (toDos, projects) => {
	const names = document.querySelectorAll('.to-do-name');

	names.forEach(name => {
		name.addEventListener('click', (e) => {
			toDos.forEach(toDo => {
				if (toDo.id === name.getAttribute('id')) {
					renderEditForm(toDo);

					//Update listener

					deleteToDo(toDo, toDos, projects);
				};
			});
		});
	});

};

export{editToDoHandler};