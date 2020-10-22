import{renderProjects} from "./renderProjects"

const createProjectController = (projects) => {
	const formContainer = document.querySelector('.form-bg')
	const projectSubmit = document.querySelector('#project-submit');

	projectSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		var string = document.getElementById('project-name').value;

		if (string === null || string === '') return;

		projects.push(string);
		formContainer.remove();
		renderProjects(projects);
	});

};

export{createProjectController};

//if all forms are gonna have the same formBg element then write a function to remove them once the form has been submitted