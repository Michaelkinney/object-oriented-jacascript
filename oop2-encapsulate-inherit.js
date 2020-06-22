/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.

    -Prevent the properties from being accessed by outside code, using the
     encapsulation concept of "private variables".

    Create methods that return the values of these private variables 
    in case other pieces of the code need to access the 
    data of the 4 classes. 

     Also create methods that allow
     outside code to "set" new values for the properties on 
     the classes, without directly manipulating the values themselves. 

    //your code here...
*/

class Book {
    #author;
    #publisher;
      constructor(author, publisher){
          this.#author = author,
          this.#publisher = publisher
      }
      getAuthor() {
        return this.#author;
      }
      getPublisher(){
        return this.#publisher;
      }
      setAuthor() {
        return this.#author;
      }
      setPublisher() {
        return this.#publisher
      }
  }
  
  class Author {
    #name;
    #books;
      constructor(name, books){
          this.#name = name,
          this.#books = books
      }
      getName() {
        return this.#name;
      }
      getBooks() {
        return this.#books;
      }
      setName() {
        return this.#name;
      }
      setBooks() {
        return this.#books;
      }
  }
  
  class Publisher {
    #authors;
    #books;
      constructor(authors, books){
          this.#authors = authors,
          this.#books = books
      }
      getAuthors() {
        return this.#authors;
      }
      getBooks() {
        return this.#books;
      }
      setAuthors() {
          return this.#authors;
      }
      setBooks() {
          return this.#books;
      }
  }
  
  class Review {
    #rating;
    #user;
      constructor(rating, user){
          this.#rating = rating,
          this.#user = user
      }
      getRating() {
        return this.#rating;
      }
      getUser() {
        return this.#user
      }
      setRating() {
          return this.#rating;
      }
      setUser() {
          return this.#user;
      }
  }
  

/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name. 
     It should only have a single instance. 
      Umbrella is the "Parent Organization" e.g. Allegis Group

    - Company class. It should have a compnay name and # 
    of employees.  Create at least 3 different companies 
    that are children of the Umbrella Organization.  (e.g. 
        TEKsystems, Aerotek, etc.)

    - Site class. It should have the name of the company, 
    and the location of the site.  It is a child class that 
    inherits from the Company class.  Create 3 sites for each company.


    - Employee class. It should have a employee name, job title, 
    and salary properties. Create 10 employee instances: 1 CEO, 
    1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 
    1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free
     to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  
    The properties and methods should make sense, considering what 
    the classes are supposed to be representing.



    //your code here... /* */
class Umbrella {
    #name;
        constructor(name){
            this.#name = name;
        }
}
    displayName(){
        console.log(this.name)
    };

class Company extends Umbrella {
    #name;
    #numberEmployees;
        constructor(name, numberEmployees){
        this.#name = name;
        this.#numberEmployees = numberEmployees;
        }
        super(name, numberEmployees);
}
    displayName(){
        console.log(this.name)
    };
    displayNumer(){
        console.log(this.numberEmployees)
    };

class Site extends Company {
    #name;
    #location;
        constructor {(name, location)
        this.#name = name;
        this.#location = location;
        }
        super(name, location);
    }
    displayName() {
        console.log(this.name)
    };
    displayLocation() {
        console.log(this.location)
    };

class Employee extends Site {
    #name;
    #job;
    #salary;
        constructor{(name, job, salary)
        this.#name = name;
        this.#job = job;
        this.#salary = salary;
        }
        super(name, job, salary);
}
    displaySalary() {
        console.log(this.salary)
        };
    displayJob() {
        console.log(this.job)
        };

const parentCompany = new Umbrella(skynet)

const company1 = new Company(teksystems, 200);
const company2 = new Company(apple, 1000);
const company3 = new Company(microsoft, 2000);

const loc1 = new Site(teksystems, dallas);
const loc2 = new Site(teksystems, kansas);
const loc3 = new Site(teksystems, newyork);
const loc4 = new Site(apple, california);
const loc5 = new Site(apple, washington);
const loc6 = new Site(apple, oregon);
const loc7 = new Site(microsoft, utah);
const loc8 = new Site(microsoft, arizona);
const loc9 = new Site(microsoft, idaho);

const employee1 = new Employee(jim, ceo, 100000)
const employee2 = new Employee(bob, manager, 90000)
const employee3 = new Employee(fred, secretary, 70000)
const employee4 = new Employee(jerry, engineer, 70000)
const employee5 = new Employee(jason, engineer, 65000)
const employee6 = new Employee(jessica, financialofficer, 65000)
const employee7 = new Employee(mary, janitor, 50000)
const employee8 = new Employee(rhonda, marketer, 50000)
const employee9 = new Employee(alex, hr, 50000)
const employee10 = new Employee(amber, lawyer, 45000)

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...