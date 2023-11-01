//*  Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }
  breathe() {
    console.log(`${this.name} took a breathe`);
  }
  eat() {
    console.log(`${this.name} ate food`);
  }
}

class Human extends Animal {
  writeCode() {
    console.log(`${this.name}is writing code`);
  }
}
class Bride extends Animal {
  fly() {
    console.log(`${this.name} is flying`);
  }
}

//! we will duplicate code
class CodeWritingFlyingHuman extends Human {}

//////////////////////////////////////////////////////////////

//*    composition
//features
function animalFeatures(name) {
  return {
    breathe: () => console.log(`${name} took a breathe`),
    eat: () => console.log(`${name} ate food`),
  };
}

function codeWritingAbility(name) {
  return {
    code: () => console.log(`${name} is writing code`),
  };
}

function flyingAbility(name) {
  return {
    fly: () => console.log(`${name} is fly`),
  };
}
//composite features
function createHuman(name) {
  return {
    ...animalFeatures(name),
    ...codeWritingAbility(name),
    name,
  };
}

function createBird(name) {
  return {
    ...animalFeatures(name),
    ...flyingAbility(name),
    name,
  };
}

function createCodeWritingFlyingHuman(name) {
  return {
    ...animalFeatures(name),
    ...flyingAbility(name),
    ...codeWritingAbility(name),
    name,
  };
}

const human = createHuman("Shaimaa");
human.breathe();
human.code();
human.eat();

const bird = createBird("Eagle");
bird.breathe();
bird.fly();
bird.eat();

const codeWritingFlyingHuman = createCodeWritingFlyingHuman("Shaimaa++");
codeWritingFlyingHuman.breathe();
codeWritingFlyingHuman.code();
codeWritingFlyingHuman.eat();
codeWritingFlyingHuman.fly();
