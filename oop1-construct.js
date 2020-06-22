//1. Create a Class called WhyClass.  This class should have one property, and two methods.
// THe property is called "purpose", and stores a string. 
// This string should clearly explain
//  why classes are used in Object Oriented Programming.  The first method is called explain().
//    This method should print the contents stored in the purpose 'field' of the class.
//    The second method is called pieces().  This 2nd method should print out the various parts that are
//     essential to building a class.  Instantiate the class, and invoke the method so the results are
//       showing in the console once this file is run.

//your code here...

class WhyClass{
    constructor(purpose){
    this.purpose = purpose
    }
    explain(){
        return this.purpose
}
    pieces(){
        return this.purpose
}
}
const explanation = new WhyClass('Classes are used in OOP becuase it keeps your code DRY and more organizedn and in my opinion more easily accessble')
console.log(explanation.explain())
const parts = new WhyClass('A class needs various components including, a capital named class, a constructor method with parameters, and a function to call upon that class')
console.log(parts.pieces())

/*2. You are exploring the rainforests of the Amazon.  
You have observed many different types of wildlife on your excursion.
  To jog your memory, some different types of wildlife that you observed
   are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.
     Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall
 observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions
  that it can do. */

//your code here...

class Animals {
  constructor(name, color, species, ability1, ability2) {
    this.name = name;
    this.color = color;
    this.species = species;
    this.ability1 = ability1;
    this.ability2 = ability2;
  }

  ability() {
    return this.name + " can " + this.ability1 + " and " + this.ability2;
  }
}
const toocan = new Animals("Toocan", "varied", "bird", " fly ", " crack nuts ");
console.log(toocan.ability());

const jaguar = new Animals("Jaguar", "black", "cat", " stalk ", " hunt prey ");
console.log(jaguar.ability());

const monkey = new Animals("Monkey", "brown", "ape", " climb ", " use tools ");
console.log(monkey.ability());

const mouse = new Animals(
  "Mouse",
  "grey",
  "rodent",
  "sneak",
  " find jungle cheese "
);
console.log(mouse.ability());

const ant = new Animals("Ant", "red", "bug", "build", " carry things ");
console.log(ant.ability());

const snake = new Animals(
  "Snake",
  "black",
  "reptile",
  " climb trees ",
  " use venom "
);
console.log(snake.ability());

/*3. Convert the following Object Literals into a general class called Shape, 
and instantiate the class to generate the object literals
 */

class Shape {
    constructor(name, sideArray, base, height, sides, length, width, radius) {
    this.name = name,
    this.sidesArray = sideArray,
    this.base = base,
    this.height = height,
    this.sides = sides,
    this.length = length,
    this.width = width,
    this.radius = radius
    }

calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      }`
    );
  },
  calcPerimeter: function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  },
};

calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${this.length * this.width}`
    );
  },
  calcPerimeter: function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  },
};

calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)}`
    );
  },
  calcCircumference: function () {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  },
};
}

const triangle = new Shape ( 'triangle', [4, 7, 7], '4', '6.71', 'null', 'null', 'null', 'null')
const rectangle = new Shape('rectangle', 'null', 'null', 'null', '4', '2', '5', 'null')
const circle = new Shape('circle', 'null', 'null', 'null', 'null', 'null', '1', '5')

console.log(triangle.calcArea());
console.log(triangle.calcPerimeter());

console.log(rectangle.calcArea());
console.log(rectangle.calcPerimeter());

console.log(circle.calcCircumference());
console.log(circle.calcArea());







// old code below

const triangle = {
  name: "triangle",
  sides: [4, 7, 7], //lengths of each side
  base: null,
  height: null, //determine this height using basic geometry.  You may need to research this one.
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${
        0.5 * this.base * this.height
      }`
    );
  },
  calcPerimeter: function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        this.base + (this.sides[1] + this.sides[2])
      }`
    );
  },
};

triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
  name: "rectangle",
  sides: 4,
  length: 2,
  width: 5,
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${this.length * this.width}`
    );
  },
  calcPerimeter: function () {
    console.log(
      `${this.name}'s perimeter is calculated to be : ${
        2 * this.length + 2 * this.width
      }`
    );
  },
};

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
  name: "circle",
  sides: 1,
  radius: 5,
  calcArea: function () {
    console.log(
      `${this.name}'s area is calculated to be : ${(
        Math.PI *
        this.radius ** 2
      ).toFixed(2)}`
    );
  },
  calcCircumference: function () {
    console.log(
      `${this.name}'s circumference is calculated to be : ${(
        2 *
        Math.PI *
        this.radius
      ).toFixed(2)}`
    );
  },
};

console.log(circle);
circle.calcCircumference();
circle.calcArea();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
  name;
  planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

  constructor(name, num) {
    this.name = name;
    this.planetNum = num;
  }
}

const earth = new Earth("earth", 3);
console.log(earth);
