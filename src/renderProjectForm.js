//Renders the creater project form
const renderProjectForm = () => {
	const main = document.querySelector('.main');

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
	input.setAttribute('placeholder', 'Enter Here');

	const formLabel = document.createElement('label');
	formLabel.setAttribute('for', 'project-name');
	formLabel.innerText = `Enter Project Name:`;

	const submitBtn = document.createElement('button');
	submitBtn.setAttribute('class', 'form-button');
	submitBtn.setAttribute('id', 'project-submit');
	submitBtn.innerText = `Create`;

	formContainer.append(form);

	form.append(formLabel, input, submitBtn);

	main.append(formbg);

}

export{renderProjectForm}