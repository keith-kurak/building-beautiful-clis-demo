import { Command } from 'commander';

// unit-testable "libraries"
class BrewCoffeeService {
  constructor({ pourover }) {
    this.pourover = pourover;
  }

  run() {
    if (this.pourover) {
      console.log("brew pourover");
    } else {
      console.log("brew coffee");
    }
  }
}

class BrewTeaService {
  constructor({ looseLeaf }) {
    this.looseLeaf = looseLeaf;
  }

  run() {
    if (this.looseLeaf) {
      console.log("brew loose leaf");
    } else {
      console.log("brew tea bag");
    }
  }
}

class BakeSconesService {
  // TODO: add options
  run() {
    console.log('bake scones')
  }
}

class BakeCupcakesService {
  run() {
    console.log('bake cupcakes')
  }
}

// bind libs to commands

const brew = new Command("brew");

brew
  .command("tea")
  .option("-l, --looseLeaf", "Fancy!")
  .action((options) => {
    new BrewTeaService(options).run();
  });
brew
  .command("coffee")
  .option("-p, --pourover", "No drip for me!")
  .action((options) => {
    new BrewCoffeeService(options).run();
  });

// bake lib

const bake = new Command("bake");

bake
  .command("scones")
  .option("-b, --addBacon", "bacon cheddar scones are great")
  .action((options) => {
    new BakeSconesService(options).run();
  });
bake.command("cupcakes").action((options) => {
  new BakeCupcakesService(options).run();
});

const commands = [brew, bake];

export default commands;
