import{renderProjects} from "./renderProjects.js";
import{createProject} from "./createProject.js";

const createProjectController = (projects) => {
	const formContainer = document.querySelector('.form-bg')
	const projectSubmit = document.querySelector('#project-submit');

	projectSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		var name = document.getElementById('project-name').value;

		if (name === null || name === '') return;

		const project = createProject(name);
		projects.push(project);
		formContainer.remove();
		
		renderProjects(projects);
	});

};

export{createProjectController};

//if all forms are gonna have the same formBg element then write a function to remove them once the form has been submitted