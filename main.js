// Задание 1. "Управление библиотекой книг"
/* Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
● Свойство title (название) - строка, название книги.
● Свойство author (автор) - строка, имя автора книги.
● Свойство pages (количество страниц) - число, количество страниц в книге.
22
● Метод displayInfo() - выводит информацию о книге (название, автор и
количество страниц).*/

class Book {
    //Конструктор класса 
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // Метод класса
    displayInfo() {
        console.log(`Книга ${this.title}, автор - ${this.author}, количество страниц - ${this.pages}`);
    }
}

const book1 = new Book("Ревизор", "Н.В.Гоголь", 70);
book1.displayInfo();

// Задание 2. "Управление списком студентов"
/* Реализуйте класс Student, представляющий студента, со следующими свойствами и
методами:
● Свойство name (имя) - строка, имя студента.
● Свойство age (возраст) - число, возраст студента.
● Свойство grade (класс) - строка, класс, в котором учится студент.
● Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

// Пример использования класса
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade*/

class Student {
    //Конструктор класса 
    constructor(name, age, grade) {
        this.name = name,
        this.age = age;
        this.grade = grade;
    }

    // Метод класса
    displayInfo() {
        console.log(`Name - ${this.name}, age - ${this.age} лет, grade  - ${this.grade}th grade`);
    }
}

const student1 = new Student("Sara Smith", 15, 9);
student1.displayInfo(); 

const student2 = new Student("John Black", 13, 7);
student2.displayInfo();

