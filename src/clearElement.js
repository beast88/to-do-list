
//Clear the parent of it's child elements
const clearElement = (element) => {

	while (element.firstChild) {
		element.removeChild(element.firstChild)
	};

}

export{clearElement};