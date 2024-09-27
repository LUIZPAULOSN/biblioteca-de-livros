let bookList = [];

document.addEventListener("DOMContentLoaded", function() {
    const addBookForm = document.getElementById("add-book-form");
    const addBookBtn = document.getElementById("add-book-btn");
    const removeBookInput = document.getElementById("remove-book-input");
    const removeBookBtn = document.getElementById("remove-book-btn");
    const bookListUl = document.getElementById("book-list-ul");

    addBookBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const bookTitle = document.getElementById("book-title").value;
        const bookAuthor = document.getElementById("book-author").value;
        const bookYear = document.getElementById("book-year").value;
        const bookGenre = document.getElementById("book-genre").value;

        if (bookTitle && bookAuthor && bookYear && bookGenre) {
            const newBook = {
                title: bookTitle,
                author: bookAuthor,
                year: bookYear,
                genre: bookGenre
            };

            bookList.push(newBook);

            const bookListItem = document.createElement("li");
            bookListItem.textContent = `${bookTitle} by ${bookAuthor} (${bookYear}) - ${bookGenre}`;
            bookListUl.appendChild(bookListItem);

            document.getElementById("book-title").value = "";
            document.getElementById("book-author").value = "";
            document.getElementById("book-year").value = "";
            document.getElementById("book-genre").value = "";
        }
    });

    removeBookBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const removeBookTitle = document.getElementById("remove-book-input").value;

        for (let i = 0; i < bookList.length; i++) {
            if (bookList[i].title === removeBookTitle) {
                bookList.splice(i, 1);
                break;
            }
        }

        const bookListItems = bookListUl.children;
        for (let i = 0; i < bookListItems.length; i++) {
            if (bookListItems[i].textContent.includes(removeBookTitle)) {
                bookListUl.removeChild(bookListItems[i]);
                break;
            }
        }

        document.getElementById("remove-book-input").value = "";
    });
});