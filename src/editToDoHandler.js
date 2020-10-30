import{renderEditForm} from "./renderEditForm.js";
import{deleteToDo} from "./deleteToDo.js";
import{editToDoController} from "./editToDoController.js";

const editToDoHandler = (toDos, projects, project) => {
	const names = document.querySelectorAll('.to-do-name');

	names.forEach(name => {
		name.addEventListener('click', (e) => {
			toDos.forEach(toDo => {
				if (toDo.id === name.getAttribute('id')) {
					renderEditForm(toDo);

					editToDoController(toDo, projects, project);

					deleteToDo(toDo, toDos, projects);
				};
			});
		});
	});

};

export{editToDoHandler};