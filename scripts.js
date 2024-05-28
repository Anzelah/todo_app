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
		saveData()
		
		const span = document.createElement('span')	
		//span.innerHTML = "\u2705"
		li.appendChild(span)
		saveData()

		myInput.value = ''
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
	}
	else if (event.target.tagName === 'SPAN') {
		event.target.parentElement.remove()
	}
});



function saveData() {
	const lists = document.getElementById('lists')
	const li = localStorage.setItem('list', lists.innerHTML);
	return l
}


function displayData() {
	localStorage.getItem('list') = lists.innerHTML;
}
