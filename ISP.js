//*  Interface Segregation Principle

//*  spite interfaces that are very large into smaller and more specific ones
//*  we don't have interfaces in js so we used composition

const events = {
  canAttack() {
    return {
      attack() {
        console.log("i can attack");
      },
    };
  },
  canDefense() {
    return {
      defense() {
        console.log("i can defense");
      },
    };
  },
  canStrike() {
    return {
      strike() {
        console.log("i can strike ");
      },
    };
  },
};

class Player {}

Object.assign(Player.prototype, events.canAttack(), events.canDefense());

const ahmed = new Player();

ahmed.attack();
ahmed.defense();
