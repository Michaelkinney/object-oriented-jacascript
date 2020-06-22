/*
1. Create a Abstract Creature class that is NOT allowed to be 
instantiated. Find a way to prevent this
 class from being instantiated with an instance. 
  In the Creature class, include two abstract methods.
   move(), and act().  These methods are NOT allowed to be 
   invoked from the Abstract class,
    so throw an error in these methods if they are invoked
     by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from 
the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods
 of move() and act(), which are found on the abstract
  Creature class. In addition to the 2 abstract methods,
   implement 1 unique method on each sub-class.
     Also, each sub-class MUST have at least 2 unique 
     property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
  constructor() {
    if (this.constructor == Creature) {
      throw new Error("This is an abstract method. Denied");
    }
  }

  act() {
    throw new Error("This is an abstract method. Denied");
  }
  move() {
    throw new Error("This is an abstract method. Denied");
  }
}

class Human extends Creature {
    super();
  constructor(age, weight) {
    (this.age = age), (this.weight = weight);
  }
  act() {
    console.log("This is an action");
  }
  move() {
    console.log("This is moving");
  }
  hunt() {
    console.log("This is hunting");
  }
}

class Dinsosaur extends Creature {
  constructor(age, weight) {
      super();
    (this.age = age), (this.weight = weight);
  }
  act() {
    console.log("This is an action");
  }
  move() {
    console.log("This is moving");
  }
  biting() {
    console.log("This is biting");
  }
}

class Bird extends Creature {
  constructor(age, weight) {
      super();
    (this.age = age), (this.weight = weight);
  }
  act() {
    console.log("This is an action");
  }
  move() {
    console.log("This is moving");
  }
  flying() {
    console.log("This is flying");
  }
}

const jim = new Human(50, 200);
jim.move();
jim.act();
jim.hunt();

const bob = new Dinsosaur(100, 1000);
bob.move();
bob.act();
bob.biting();

const clarice = new Bird(10, 50);
clarice.move();
clarice.act();
clarice.flying();

/*
2. For the following Person class, 
modify the class methods, so the sub-class methods
will successfully fire.
For the Teacher method, a set of methods
have already been set up.  
For the Student class, it will be up 
to you to determine how to set up the methods to fire in the Student
   sub-class.  :
*/

class Person {
  name;
  constructor() {
    if (this.constructor == Person) {
      throw new Error("This is an abstract method. Denied");
    }
  }

  eat() {
    console.log(this.name + " is eating");
  }

  sleep() {
    console.log(this.name + " is sleeping");
  }

  code = function () {
    console.log(this.name + " is coding");
  };

  repeat() {
    console.log(this.name + " is repeating the above steps, yet another time");
  }

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      "By adding an if constructor == Person statement in the parent class, it gives an error if those functions are used. I was able to call the functions from the parent class by envoking them in the sub classes. Also the code function needed to be changed from an arrow function to a regular function so it could be passed down properly."
    );
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of
  // these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + " loves to teach before eating");
  }

  sleep() {
    console.log(this.name + " sleeps after preparing the lesson plan");
  }

  code = () => {
    console.log(this.name + " codes first, then teaches it the next day.");
  };

  repeat = () => {
    console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
  };
  explain = () => {
    console.log(
      "Again I had to change the way some function were coded in order for the sub classes to take precedence. The order goes fields on object instance, fields on parents, prototype of child, prototype of parent."
    );
  };
}

class Student extends Person {
  constructor(name) {
    super(name);
    this.name = name;
  }

  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  //eat method should print out - <stduent name> studies, then eats
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.
  eat() {
    console.log(this.name + " studies, then eats");
  }
  sleep() {
    console.log(
      this.name +
        " studies coding so much, that they dream about it in their sleep."
    );
  }
  code = () => {
    console.log(
      this.name +
        " was first overwhelmed by coding but kept at it, and now has become a coding guru."
    );
  };
  repeat() {
    console.log(
      this.name +
        " keeps on studying, coding, eating, and sleeping, and puts it all on repeat."
    );
  }
}

const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
  prepare(food1, food2, food3) {
    console.log("The cook is cooking " + food1, food2, food3);
  }

  prepare = function () {
    console.log("The cook is cooking");
  };

  explain = () => {
    console.log(
      "what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method."
    );
  };
}

const cook = new Cook();

cook.prepare("turkey", "salami", "pizza");

cook.explain();
