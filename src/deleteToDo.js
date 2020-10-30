import{removeForm} from "./removeForm.js";
import{saveProject} from "./saveProject.js";

const deleteToDo = (item, toDos, projects) => {
	const deleteBtn = document.getElementById('delete');

	deleteBtn.addEventListener('click', (e) => {
		toDos.forEach(toDo => {
			if(toDo.id === item.id) {
				let index = toDos.indexOf(toDo)
				toDos.splice(index, 1);

				removeForm();
				saveProject(projects);

				location.reload();
			}
		})
	})

};

export{deleteToDo};