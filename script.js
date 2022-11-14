String.prototype.filter = function (arr) {
  if (typeof arr === "object") {
    if (arr.length > 0) {
      return this.split(" ")
        .filter((o) => arr.indexOf(o) < 0)
        .join(" ");
    }
  } else {
    if (arr.length > 0) {
      return this.split(" ")
        .filter((o) => arr !== o)
        .join(" ");
    }
  }
};

function swap(arr, x, y) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

Array.prototype.bubblesort = function () {
  if (this.length <= 1) return this;

  let arr = this;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }

  return arr;
};

var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};
var Student1 = function () {};
Student1.prototype = new Person();
Student1.prototype.learn = function (subject) {
  console.log(this.name + " just learned " + subject);
};
var me = new Student1();
me.initialize("John", 25);
me.learn("Inheritance");

const Teacher = function () {};
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function (subject) {
  return `${this.name} is now teaching ${subject}`;
};

const teacher = new Teacher();
teacher.initialize("Nirajan", 30);
console.log(teacher.teach("Computer Science"));
