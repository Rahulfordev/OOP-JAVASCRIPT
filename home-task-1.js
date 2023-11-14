// Task 2: Class and Instantiation
class Book {
  constructor(title, author, publishedYear) {
    (this.title = title),
      (this.author = author),
      (this.publishedYear = publishedYear);
  }
}

const book1 = new Book("Biology 2nd Paper", "Gazi Ajmal", "2013");
console.log(book1);
