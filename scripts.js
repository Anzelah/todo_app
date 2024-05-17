const myButton = document.querySelector('button');
const myInput = document.getElementById('myInput');
const myUl = document.querySelector('ul');

myButton.addEventListener('click', () => {
	let toDos = myInput.value;
	localStorage.setItem('list', toDos);

	const frag = document.createDocumentFragment();
	const li = document.createElement('li')
	frag.appendChild(li)

	const storedList = localStorage.getItem('list');
	if (storedList) {
		li.textContent = storedList
	} else {
		li.textContent = ''
	}
	document.myUl.appendChild(frag)
});