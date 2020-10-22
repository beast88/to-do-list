const createProjectController = (projects) => {
	const formContainer = document.querySelector('.form-bg')
	const projectSubmit = document.querySelector('#project-submit');

	projectSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		var string = document.getElementById('project-name').value;

		if (string === null || string === '') return;

		projects.push(string);
		console.log(projects);
		formContainer.remove();
	});

};

export{createProjectController};