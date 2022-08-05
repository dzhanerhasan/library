let myLibrary = [];


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    
    this.info = () => {
        if(!this.read) {
            return `${title} by ${author}, ${pages} pages, not read yet.`;
        }
        return `${title} by ${author}, ${pages} pages, is read.`;
    }
};


function addBookToLibrary() {
    createForm();
    const createBook = document.querySelector('#create-book');
    
    createBook.addEventListener('click', () => {
        const bookTitle = document.querySelector('#title').value;
        const bookAuthor = document.querySelector('#author').value;
        const bookPages = document.querySelector('#pages').value;
        const bookRead = document.querySelector('#read').checked;

        const newBook = new Book(bookTitle, bookAuthor, bookPages);
        if (bookRead) {
            newBook.read = true;
        }

        myLibrary.push(newBook)
        myContainer.textContent = ""
        getContent()
    })
};


function getContent() {
    myLibrary.forEach((book) => {
        const bookInf = document.createElement('div');
        bookInf.setAttribute('class', 'book')
        bookInf.textContent = book.info();
        bookInf.append(removeBtn);
        myContainer.append(bookInf);
    });
}


function createForm() {
    myContainer.textContent = ""
    const addBookForm = document.createElement('form');
    const titleField = document.createElement('input');
    const authorField = document.createElement('input');
    const pagesField = document.createElement('input');

    const readLabel = document.createElement('label');
    const readField = document.createElement('input');
    const readDiv = document.createElement('div');

    const submitButton = document.createElement('input');


    addBookForm.setAttribute('class', 'book-form')

    Object.assign(titleField, {
        type: 'text',
        name: 'title',
        placeholder: 'Title',
        id: 'title'
    });

    Object.assign(authorField, {
        type: 'text',
        name: 'author',
        placeholder: 'Author',
        id: 'author',

    });

    Object.assign(pagesField, {
        type: 'number',
        name: 'pages',
        placeholder: 'Pages',
        id: 'pages',

    });

    Object.assign(readLabel, {
        for: 'read'
    })

    readLabel.textContent = "Read"

    Object.assign(readField, {
        type: 'checkbox',
        name: 'read',
        value: 'read',
        id: 'read',

    });

    Object.assign(submitButton, {
        type: 'button',
        name: 'submitBtn',
        value: 'Add Book',
        id: 'create-book'
    });

    readDiv.append(readLabel, readField)
    addBookForm.append(titleField, authorField, pagesField, readDiv, submitButton)
    myContainer.append(addBookForm)
};


const myContainer = document.querySelector('.container');
const addBookBtn = document.querySelector('#add-book');

addBookBtn.addEventListener('click', addBookToLibrary);
