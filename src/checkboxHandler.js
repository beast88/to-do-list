import{saveProject} from "./saveProject.js";

const checkboxHandler = (toDos, projects) => {
	const checkboxes = document.querySelectorAll('.checkbox');

	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('click', (e) => {
			toDos.forEach(toDo => {
				if(toDo.id === checkbox.getAttribute('id')) {
					toDo.complete = toDo.complete ? false : true;

					if(toDo.complete === true) {
						checkbox.classList.add('complete');
					} else {
						checkbox.classList.remove('complete');
					};

					saveProject(projects);
				};
			});
		});
	});

};

export{checkboxHandler};