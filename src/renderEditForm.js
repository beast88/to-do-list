const renderEditForm = (toDo) => {
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
	nameInput.value = toDo.name;

	const nameLabel = document.createElement('label');
	nameLabel.setAttribute('for', 'to-do-name');
	nameLabel.innerText = `What do you need to do?`;

	//Priority
	const priorityInput = document.createElement('select');
	priorityInput.setAttribute('id', 'priority');
	priorityInput.setAttribute('name', 'priority');
	priorityInput.value = toDo.priority;


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
	dateInput.value = toDo.dueDate;

	const dateLabel = document.createElement('label');
	dateLabel.setAttribute('for', 'date');
	dateLabel.innerText = `Due Date:`;

	//Description
	const descInput = document.createElement('textarea');
	descInput.setAttribute('form', 'to-do-form');
	descInput.setAttribute('name', 'description');
	descInput.setAttribute('id', 'description');
	descInput.setAttribute('placeholder', 'Enter a description...');
	descInput.value = toDo.desc;

	//Update
	const updateBtn = document.createElement('button');
	updateBtn.setAttribute('class', 'form-button');
	updateBtn.setAttribute('id', 'update-to-do');
	updateBtn.innerText = `Update`;

	//Delete Button
	const deleteBtn = document.createElement('button');
	deleteBtn.setAttribute('class', 'form-button');
	deleteBtn.setAttribute('id', 'delete');
	deleteBtn.innerText = `Delete`;

	const buttonContainer =  document.createElement('div');
	buttonContainer.setAttribute('class', 'buttons-container');
	buttonContainer.setAttribute('class', 'to-do-buttons');

	buttonContainer.append(updateBtn, deleteBtn)

	formContainer.append(form);

	form.append(nameLabel, nameInput, priorityLabel, priorityInput, dateLabel, dateInput, descInput, buttonContainer);

	main.append(formbg);

	console.log(toDo);
};

export{renderEditForm};