/*

Exercício 4

Buscando no Array de Livros por Categoria, faça os seguintes desafios:

    1. Contar o número de categorias e o número de livros em cada categoria
    2. Contar o número de autores
    3. Mostrar os livros do autor Augusto Cury
    4. Transformar a função em uma função que vai receber o nome do autor e devolver os livros dele.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os Segredos da Mente Milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert Kiyosaki e Sharon Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
];

function totalCategories(arrayBooksByCategory) {
    return arrayBooksByCategory.length;
}

console.log("Número de categorias: " + totalCategories(booksByCategory));

function totalBooks(arrayBooksByCategory) {
    for (let category of arrayBooksByCategory) {
        console.log("Número de livros da categoria " + category.category + ": " + category.books.length);
    }
}

console.log(totalBooks(booksByCategory));

function totalAuthors(arrayBooksByCategory) {
    let arrayAuthors = new Set();

    for (let category of arrayBooksByCategory) {

        for (let books of category.books) {
            arrayAuthors.add(books.author);
        }

    }

    return arrayAuthors.size;
}

console.log("Número de livros: " + totalAuthors(booksByCategory));

function booksOfAugustoCury(arrayBooksByCategory) {

    let booksFromCury = new Array();

    for (let category of arrayBooksByCategory) {

        for (let books of category.books) {

            if (books.author === "Augusto Cury") {
                booksFromCury.push(" " + books.title);
            }
            
        }
    }

    return booksFromCury;

}

console.log("Livros de Augusto Cury:" + booksOfAugustoCury(booksByCategory));

function booksOfAuthor(author) {

    let arrayBooksFromAuthor = new Array();

    for (let category of booksByCategory) {

        for (let books of category.books) {

            if (books.author === author) {
                arrayBooksFromAuthor.push(" " + books.title);
            }
            
        }
    }

    return arrayBooksFromAuthor;

}

console.log("Livros por Autor:" + booksOfAuthor("George S. Clason"));