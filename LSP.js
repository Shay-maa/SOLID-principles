//*  Liskov Substitution Principle

//! wrong practice
//! override methods we can't replace parent objs with child objs

// class Player {
//   attack() {
//     console.log("attack ");
//   }
//   defense() {
//     console.log("defense ");
//   }
// }
// class FootballPlayer extends Player {
//   attack() {
//     console.log("i can't attack ");
//   }
// }
// const ahmed = new FootballPlayer();
// ahmed.attack();

//* after modification

class AttackerPlayer {
  attack() {
    console.log("attack ");
  }
}

class DefensePlayer {
  defense() {
    console.log("defense ");
  }
}

class FootballPlayer extends AttackerPlayer {}

//* we can replace parent objs with child objs

const ahmed = new FootballPlayer();
const mohamed = new AttackerPlayer();
ahmed.attack();
mohamed.attack();
