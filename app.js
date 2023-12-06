const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const   titleF = document.getElementById('title'),
        authorF = document.getElementById('author'),
        pagesF = document.getElementById('number'),
        readF = document.getElementById('read');

const onBtn = document.querySelector('#onBtn');
const modal  = document.querySelector('.modal');
onBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
})

function addBook() {
    let title = titleF.value;
    let author = authorF.value;
    let pages = pagesF.value;
    let read = getRead();
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


function getRead() {
    return readF.value === 'reading';
}

function displayBooks() {
    const left = document.querySelector('.left');
    left.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = ` 
            <p><span>Title:</span> ${myLibrary[i].title}</p>
            <p><span>Author:</span> ${myLibrary[i].author}</p>
            <p><span>Pages:</span> ${myLibrary[i].pages}</p>
            <p><span>Read: </span> <span class="read-value">${myLibrary[i].read}</span></p>
            <button class="deleteBtn" data-index="${i}">Delete</button>
            <button class="changeReadBtn" data-index="${i}">Change Read</button>
        `;
        left.append(div);
    }

    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            deleteBook(index);
            displayBooks();
        })
    });

    const changeReadButtons = document.querySelectorAll('.changeReadBtn');
    changeReadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            changeRead(index);
            displayBooks();
        })
    });
}

function changeRead(index) {
    myLibrary[index].read = myLibrary[index].read === true ? false : true;
}

modalBtn.addEventListener('click', () => {
    addBook();
    displayBooks();
});


function deleteBook(index) {
    myLibrary.splice(index, 1);
}
