// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const deleteButtons = document.querySelectorAll('.btn-delete');


// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');
    const ico = document.createElement('i');
    const btnDel = document.createElement('a');

    // add classes
    ico.classList.add('icon');
    btnDel.classList.add('btn-delete');

    // href attribute to delete button
    btnDel.setAttribute("href","javascript:void(0)");

    // add event listener to btnDel
    btnDel.addEventListener('click', onDelete);

    // add text to icon
    ico.appendChild(document.createTextNode('x'));

    // add icon tag to delete button
    btnDel.appendChild(ico);

    // Add text node with input values to item
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // add delete button to item
    li.appendChild(btnDel);
    
    // Adding HTML Instead
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

// Listen for delet button
deleteButtons.forEach((deleteButton)=>deleteButton.addEventListener('click', onDelete));

function onDelete(e) {
  e.preventDefault();
  this.parentNode.remove();
}
