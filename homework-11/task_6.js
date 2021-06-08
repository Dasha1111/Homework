function createList() {

	let elem;
	let ul = document.createElement("ul");
	let text = document.createTextNode("Мой список:");
	document.body.append(text);
	document.body.append(ul);
    
	do {
		elem = prompt("Введите элемент списка");

		if (elem !== "" && elem != null) {
		 	let li = document.createElement("li");
		 	li.textContent = elem;
		 	ul.append(li);
	 	}
	} while(elem !== "" && elem != null);
};

createList();