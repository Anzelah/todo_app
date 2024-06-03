const myButton = document.querySelector('button');
const myInput = document.querySelector('input');
const lists = document.getElementById('lists');


// WHEN YOU CLICK A BUTTON
function addTodos() {
	const newTodo = myInput.value;

	/* if its a valid entry */
	if (newTodo !== '') {
		const li = document.createElement('li')
		li.innerHTML = newTodo
		lists.appendChild(li)

		const span = document.createElement('span')	
		span.innerHTML = "\u0078"
		li.appendChild(span)

		myInput.value = ''
		saveData();
	} else {
		alert('You must write something!')
	}
};
myButton.addEventListener('click', addTodos)


// WHEN YOU CLICK A LIST ITEM
const lst = document.getElementById('lists')

lst.addEventListener('click', (event) => {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('checked')
		saveData();
	}
	else if (event.target.tagName === 'SPAN') {
		event.target.parentElement.remove()
		saveData();
	}
});

// Save the data inside my local storage
function saveData() {
	localStorage.setItem('list', lists.innerHTML);
}

// Display my list
function showData() {
	lists.innerHTML = localStorage.getItem('list');
}
showData();

