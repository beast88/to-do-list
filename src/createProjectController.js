import{renderProjects} from "./renderProjects.js";
import{createProject} from "./createProject.js";
import{removeForm} from "./removeForm.js";

const createProjectController = (projects) => {
	const projectSubmit = document.querySelector('#project-submit');

	projectSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		var name = document.getElementById('project-name').value;

		if (name === null || name === '') return;

		const project = createProject(name);
		projects.push(project);
		removeForm();
		
		renderProjects(projects);
	});

};

export{createProjectController};