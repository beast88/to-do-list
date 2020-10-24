import{renderProjects} from "./renderProjects.js";
import{removeForm} from "./removeForm.js";

//Controls what happens when a user attempts to delete an item
const deleteItem = (button, items) => {
	const cancelBtn = document.getElementById('cancel');
	const confirmBtn = document.getElementById('confirm');

	cancelBtn.addEventListener('click', (e) => {
		removeForm();
	})

	confirmBtn.addEventListener('click', (e) => {
		items.forEach(item => {
			if (button.getAttribute('id') === item.id) {
				let index = items.indexOf(item);
				items.splice(index, 1);
				
				removeForm();
				renderProjects(items);
			};
		});
	});

};

export{deleteItem};