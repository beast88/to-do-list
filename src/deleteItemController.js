import{renderProjects} from "./renderProjects.js";

const deleteItem = (button, items) => {
	const cancelBtn = document.getElementById('cancel');
	const confirmBtn = document.getElementById('confirm');
	const formContainer = document.querySelector('.form-bg');

	cancelBtn.addEventListener('click', (e) => {
		formContainer.remove();
	})

	confirmBtn.addEventListener('click', (e) => {
		items.forEach(item => {
			if (button.getAttribute('id') === item.id) {
				let index = items.indexOf(item);
				items.splice(index, 1);
				formContainer.remove();
				renderProjects(items);
			};
		});
	});

};

export{deleteItem};