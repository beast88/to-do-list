//Render the form to create a to do list
const renderToDoForm = () => {
	const main = document.querySelector('.main');

	const formbg = document.createElement('div');
	formbg.setAttribute('class', 'form-bg');

	const formContainer = document.createElement('div');
	formContainer.setAttribute('class', 'to-do-form-container');

	formbg.append(formContainer);

	const form = document.createElement('form');
	form.setAttribute('class', 'to-do-form');
	form.setAttribute('id', 'to-do-form');

	//Name
	const nameInput = document.createElement('input');
	nameInput.setAttribute('type', 'text');
	nameInput.setAttribute('id', 'to-do-name');
	nameInput.setAttribute('name', 'to-do-name');
	nameInput.setAttribute('placeholder', 'Enter Here');

	const nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'to-do-name');
	nameLabel.innerText = `What do you need to do?`;

	//Priority
	const priorityInput = document.createElement('select');
	priorityInput.setAttribute('id', 'priority');
	priorityInput.setAttribute('name', 'priority');


	const low = document.createElement('option');
	low.setAttribute('value', 'low');
	low.innerText = `Low`;

	const med = document.createElement('option');
	med.setAttribute('value', 'med');
	med.innerText = `Medium`;

	const high = document.createElement('option');
	high.setAttribute('value', 'high');
	high.innerText = `High`;

	priorityInput.append(low, med, high);

	const priorityLabel = document.createElement('label');
	priorityLabel.setAttribute('for', 'priority');
	priorityLabel.innerText = `Set a priority:`

	//Due Date -- Hmmm I wonder how to do this
	const dateInput = document.createElement('input');
	dateInput.setAttribute('type', 'date');
	dateInput.setAttribute('id', 'date');
	dateInput.setAttribute('name', 'date');

	const dateLabel = document.createElement('label');
	dateLabel.setAttribute('for', 'date');
	dateLabel.innerText = `Due Date:`;

	//Description
	const descInput = document.createElement('textarea');
	descInput.setAttribute('form', 'to-do-form');
	descInput.setAttribute('name', 'description');
	descInput.setAttribute('id', 'description');
	descInput.setAttribute('placeholder', 'Enter a description...');

	//Submit
	const submitBtn = document.createElement('button');
	submitBtn.setAttribute('class', 'form-button');
	submitBtn.setAttribute('id', 'create-to-do');
	submitBtn.innerText = `Create`;

	//Cancel Button
	const cancelBtn = document.createElement('button');
	cancelBtn.setAttribute('class', 'form-button');
	cancelBtn.setAttribute('id', 'cancel');
	cancelBtn.innerText = `Cancel`;

	const buttonContainer =  document.createElement('div');
	buttonContainer.setAttribute('class', 'buttons-container');
	buttonContainer.setAttribute('class', 'to-do-buttons');

	buttonContainer.append(submitBtn, cancelBtn)

	formContainer.append(form);

	form.append(nameLabel, nameInput, priorityLabel, priorityInput, dateLabel, dateInput, descInput, buttonContainer);

	main.append(formbg);
};

export{renderToDoForm};