const myButton = document.querySelector('button');
const myInput = document.querySelector('input');
const myUl = document.querySelector('ul');

myButton.addEventListener('click', () => {
	let toDos = myInput.value;
	localStorage.setItem('list', toDos);
	myInput.value = ''

	const li = document.createElement('li')
	const storedList = localStorage.getItem('list');
	if (storedList) {
		li.textContent = storedList
	} else {
		li.textContent = ''
	}
	myUl.appendChild(li)
});