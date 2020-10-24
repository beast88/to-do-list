//Clears any form that may be on the page
const removeForm = () => {
	const formContainer = document.querySelector('.form-bg');

	formContainer.remove();

};

export{removeForm};