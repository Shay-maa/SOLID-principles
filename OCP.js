//* Open-Closed principle   => open for extensions closed for modifications

//!  Wrong practice

// class SuperHero {
//   constructor(name) {
//     this.name = name;
//   }
//   getWeapons(herosName) {
//     herosName.forEach((hero) => {
//       if (hero.name === "thor") console.log(" storm breaker ");
//       if (hero.name === "captain america") console.log(" shield ");
//       if (hero.name === "iron man") console.log(" the suit ");
//     });
//   }
// }

// * after modification

class SuperHero {
  constructor(name) {
    this.name = name;
  }
  getWeapons() {}
}

class Thor extends SuperHero {
  constructor(name) {
    super(name);
  }
  getWeapons() {
    console.log("storm breaker");
  }
}
class CaptainAmerica extends SuperHero {
  constructor(name) {
    super(name);
  }
  getWeapons() {
    console.log("shield");
  }
}
class IronMan extends SuperHero {
  constructor(name) {
    super(name);
  }
  getWeapons() {
    console.log("the suit");
  }
}

function getWeapons(herosName) {
  herosName.forEach((hero) => {
    hero.getWeapons();
  });
}

const heros = [new Thor(), new CaptainAmerica(), new IronMan()];

getWeapons(heros);
