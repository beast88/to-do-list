const renderDelete = () => {
	const main = document.querySelector('.main');

	const formbg = document.createElement('div');
	formbg.setAttribute('class', 'form-bg');

	const formContainer = document.createElement('div');
	formContainer.setAttribute('class', 'form-container');
	formContainer.classList.add('delete-form');

	const query = document.createElement('p');
	query.innerText = `Are you sure you want to delete this?`;

	const buttonsContainer = document.createElement('div');
	buttonsContainer.setAttribute('class', 'buttons-container');

	const confirmButton = document.createElement('button');
	confirmButton.innerText = `Delete`;
	confirmButton.setAttribute('class', 'form-button');
	confirmButton.setAttribute('id', 'confirm');

	const cancelButton = document.createElement('button');
	cancelButton.innerText = `Cancel`;
	cancelButton.setAttribute('class', 'form-button');
	cancelButton.setAttribute('id', 'cancel');

	buttonsContainer.append(confirmButton, cancelButton);

	formContainer.append(query, buttonsContainer);

	formbg.append(formContainer);

	main.append(formbg);

};

export{renderDelete};