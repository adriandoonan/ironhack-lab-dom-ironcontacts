// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");
const randomInd = (max) =>  Math.floor(Math.random() * max);

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

const exampleContactDeleteButton = exampleRow.querySelector('.btn-delete')
console.log(exampleContactDeleteButton)
exampleContactDeleteButton.addEventListener('click', () => {
  console.log('click on delete for row',exampleRow.innerText)
  exampleRow.remove()
})
const exampleContactLikeButton = exampleRow.querySelector('.btn-like')
exampleContactLikeButton.addEventListener('click', () => {
  console.log('click on like for row',exampleRow.innerText)
  exampleContactLikeButton.classList.toggle('selected')
})

const createAContactEntry = (name, pictureUrl, popularity) => {
  console.log(name,popularity,pictureUrl)
  const newElement = document.createElement("tr");
  newElement.innerHTML = `
  <td>
    <img src="${pictureUrl}" />
  </td>
  <td> ${name} </td>
  <td> ${popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`
return newElement
}



// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

threeContacts.forEach(contact => {
  const newContact = createAContactEntry(contact.name,contact.pictureUrl,contact.popularity)
  tableBody.appendChild(newContact)
  console.log(newContact)
  const newContactDeleteButton = newContact.querySelector('.btn-delete')
  console.log(newContactDeleteButton)
  newContactDeleteButton.addEventListener('click', () => {
    console.log('click on delete for row',newContact.innerText)
    newContact.remove()
  })
  const newContactLikeButton = newContact.querySelector('.btn-like')
  newContactLikeButton.addEventListener('click', () => {
    console.log('click on like for row',newContact.innerText)
    newContactLikeButton.classList.toggle('selected')
  })
});
  
  // ITERATION 2 - Delete Buttons
  
  // Your code goes here ...
  
  

  // ITERATION 3 - Like Buttons

  // Your code goes here ...

  
  


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener('click', () => {
  if (contacts.length === 0 ) alert('sorry, there are no more contacts to add')
  console.log('click on random button');
  const randomIndex = randomInd(contacts.length)
  const newContact = createAContactEntry(...Object.values({name,popularity,pictureUrl} = contacts[randomIndex]))
  tableBody.appendChild(newContact)
  const newContactDeleteButton = newContact.querySelector('.btn-delete')
  console.log(newContactDeleteButton)
  newContactDeleteButton.addEventListener('click', () => {
    console.log('click on delete for row',newContact.innerText)
    newContact.remove()
  })
  const newContactLikeButton = newContact.querySelector('.btn-like')
  newContactLikeButton.addEventListener('click', () => {
    console.log('click on like for row',newContact.innerText)
    newContactLikeButton.classList.toggle('selected')
  })
  contacts.splice(randomIndex, 1);
})
