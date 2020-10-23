import {renderDelete} from "./renderDelete.js";
import {deleteItem} from "./deleteItemController.js";

const deleteItemHandler = (items) => {
	const deleteButtons = document.querySelectorAll('.delete-icon');

	deleteButtons.forEach(button => {
		button.addEventListener('click', (e) => {
			renderDelete();
			deleteItem(button, items);
		});
	});

};

export{deleteItemHandler};