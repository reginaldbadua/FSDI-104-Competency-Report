//Create an inventory desktops and laptops
//Functionality: add, remove, consult

class Computer{
    // const name;
    // const model;
    // const brand;
    
    constructor(name, model, brand){
    this.name = name; 
    this.model = model;
    this.brand = brand; 
    
  }
    
}

class Laptop extends Computer{
  // const screenSize; 
s
  constructor (name,model,brand,screenSize){
    super(name,model,brand);
    this.screenSize = screenSize;
  }
}

class Desktop extends Computer{
  // const size; 

  constructor (name,model,brand,size){
    super(name,model,brand); //model is not defined
    this.size = size;
  }

}
class Inventory {
  constructor() {
  this.Inventory = [];
  }
  addComputer(model){
  this.Inventory.push(model);
  }

  consultInventory(){
  let z;
  for (let i=0; i<this.Inventory.length; i++){
    z = Object.values(this.Inventory[i]);
    alert(z)
    }
  } 
  removeFromInventory(model){
  let x;
  for (let i=0; i<this.Inventory.length; i++){
    if(this.Inventory[i].model == model){
      x = this.Inventory.splice(i,1);
      } 
    }
  }
}
var HP = new Desktop('Omen','Ryzen','HP','Full Tower');
var Dell = new Desktop ('Inspiron','Intel','Dell','Small');
var Apple = new Laptop ('Macbook','Radeon','Apple','15-inch');
var Lenovo = new Laptop ('Thinkpad','Intel', 'Lenovo', '14-inch');

const inventory = new Inventory();

inventory.consultInventory(HP);
inventory.addComputer(HP);
inventory.addComputer(Lenovo);
inventory.removeFromInventory(HP);