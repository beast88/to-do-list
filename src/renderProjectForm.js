const renderProjectForm = () => {
	const main = document.querySelector('.main');

	//Create a simple html form to get name of project from user
	//This will need to be displayed as a 'card' hovering over the rest of the page
	//Set form container position to cover the whole of the main section with a black background

	const formbg = document.createElement('div');
	formbg.setAttribute('class', 'form-bg');

	const formContainer = document.createElement('div');
	formContainer.setAttribute('class', 'form-container');

	formbg.append(formContainer);

	const form = document.createElement('form');
	form.setAttribute('class', 'project-form');

	const input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('id', 'project-name');
	input.setAttribute('name', 'project-name');

	const formLabel = document.createElement('label');
	formLabel.setAttribute('for', 'project-name');
	formLabel.innerText = `Enter Project Name:`;

	formContainer.append(form);

	form.append(formLabel, input);

	main.append(formbg);

	console.log(formbg);

}

export{renderProjectForm}