const Potion = require ('./Potion');
const Character = require('./Character')

class Player extends Character {
    constructor(name = ''){
        //call parent constructor here:
        super(name);
        this.inventory = [new Potion('health'), new Potion()];  
    };

    //returns an object with various player properties
    getStatus () {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    //returns the inventory array or false if empty
    getInventory () {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    addPotion(potion){
        this.inventory.push(potion);
    };

    usePotion(index) {
        const potion = this.getInventory().splice(index,1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    };
};
//inherit prototype methods from Character here:
// Player.prototype = Object.create(Character.prototype);


module.exports = Player