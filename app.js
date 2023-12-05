const myLibrary = [{title: 'Harry', author: 'Rouling', pages: 234, read: 'No'}];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const onBtn = document.querySelector('#onBtn');
const modal  = document.querySelector('.modal');
onBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
})



function addBook() {
    const title = document.getElementById('title'),
          author = document.getElementById('author'),
          pages = document.getElementById('number'),
          read = document.getElementById('read');
    const book = new Book(title.value, author.value, pages.value,`${read.checkbox ? 'Yes' : 'No'}` )
    myLibrary.push(book);
    return myLibrary;
}

function addingBookToLibrary() {
    const btnModal = document.querySelector('#modalBtn');
    const div = document.createElement('div');
    const left = document.querySelector('.left');
    btnModal.addEventListener('click', () => {
        div.classList.add('item');
        myLibrary.forEach(item => {
            div.innerHTML = `
            <p><span>Title:</span> ${item.title}</p>
            <p><span>Author:</span> ${item.author}</p>
            <p><span>Pages:</span> ${item.pages}</p>
            <p><span>Read: </span> ${item.read}</p>
        `;
        })
        left.append(div);
        addBook();
    })
}


addingBookToLibrary();