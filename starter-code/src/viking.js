// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}
Soldier.prototype.attack = function() {
  return this.strength;
};
Soldier.prototype.receiveDamage = function(damage) {
  return (this.health = this.health - damage);
};

// Viking
function Viking(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
}

// Saxon
function Saxon() {}

// War
function War() {}
