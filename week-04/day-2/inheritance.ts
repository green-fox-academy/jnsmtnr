class Person {
  name: string;
  age: number;
  gender: string;

  introduce() {
    console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender + ".");
  }
  getGoal() {
    console.log("My goal is: Live for the moment");
  }

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Student {
  name: string;
  age: number;
  gender: string;

  previousOrganization: string;
  skippedDays: number;

  introduce() {
    console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender + " from " + this.previousOrganization + " who skipped " + this.skippedDays + " days from the course already.");
  }
  getGoal() {
    console.log("My goal is: Be a junior software developer.");
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }
}

class Mentor {
  name: string;
  age: number;
  gender: string;
  fields: string;

  getGoal() {
    console.log("My goal is: Educate brilliant junior software developers.");
  }
  introduce() {
    console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender + " " + this.fields + " mentor.");
  }
  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', fields: string = 'intermediate') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.fields = fields;
  }
}

class Sponsor {
  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  introduce() {
    console.log("Hi, I'm " + this.name + ", a " + this.age + " year old " + this.gender + " who represents " + this.company + " and hired " + this.hiredStudents + " students so far.");
  }

  hire() {
    this.hiredStudents++;
  }

  getGoal() {
    console.log("My goal is: Hire brilliant junior software developers.");
  }

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 3; i++) {
  elon.hire();
}

for (let i = 0; i < 5; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}