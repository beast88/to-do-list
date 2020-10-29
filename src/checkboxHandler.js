import{saveProject} from "./saveProject.js";

const checkboxHandler = (toDos, projects) => {
	const checkboxes = document.querySelectorAll('.checkbox');

	checkboxes.forEach(checkbox => {
		checkbox.addEventListener('click', (e) => {
			//This may need to be its own function in order to render the to do list
			toDos.forEach(toDo => {
				if(toDo.id === checkbox.getAttribute('id')) {
					toDo.complete = toDo.complete ? false : true;

					if(toDo.complete === true) {
						checkbox.classList.add('complete');
					} else {
						checkbox.classList.remove('complete');
					};

					console.log(toDo, checkbox);
					saveProject(projects);
				};
			});
		});
	});

};

export{checkboxHandler};