import{removeForm} from "./removeForm.js";
import{editToDo} from "./editToDo.js";
import{saveProject} from "./saveProject.js";
import{renderToDos} from "./renderToDos.js";

const editToDoController = (toDo, projects, project) => {
	const updateBtn = document.getElementById('update-to-do');

	updateBtn.addEventListener('click', (e) => {
		e.preventDefault();
		editToDo(toDo);

		removeForm();
		saveProject(projects);
		
		renderToDos(project, projects);
	})

};

export{editToDoController};