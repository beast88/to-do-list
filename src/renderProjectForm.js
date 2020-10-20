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

	main.append(formbg);

	console.log(formbg);

}

export{renderProjectForm}