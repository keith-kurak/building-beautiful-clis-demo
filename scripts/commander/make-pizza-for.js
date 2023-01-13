#!/usr/bin/env node

// helpers
function commaSeparatedList(value) {
  return value.split(',');
}

import { program } from 'commander';

program
  .argument('<recipient>', 'who is eating the pizza')
  .option('-p, --pizza-size <size>', 'size of pizza')
  .option('-s, --stuffedCrust', 'make the crust stuffed')
  .option('-t, --toppings [toppings...]', 'extra toppings to put on pizza')
  .option('-d, --toppingsCommaSeparated [toppingsCommaSeparated]', 'extra toppings to put on pizza', commaSeparatedList)

// another way to do it. Use Option() for extra params
//.addOption(new Option('-p, --pizza-size <size>', 'pizza size').choices(['small', 'medium', 'large']))

program.parse(process.argv);

const options = program.opts();
const args = program.args;

console.log(`Pizza for ${args[0]}!`);
console.log(`Size: ${options.pizzaSize}`);
console.log(options.stuffedCrust ? 'Crust is stuffed' : 'Crust is not stuffed');
if (options.toppingsCommaSeparated) {
  console.log(`Toppings:`);
  console.log(options.toppingsCommaSeparated);
} else {
  console.log(`Toppings:`);
  console.log(options.toppings);
}

// Example commands:

// yarn make-pizza-for --help
// yarn make-pizza-for Keith -p large -t

// ** variadic **

// yarn make-pizza-for Keith -p large -t peppers onions

//  ** comma separated **

// yarn make-pizza-for Keith -p large -d peppers,onions
// yarn make-pizza-for Keith -p large -d peppers,onions,"banana peppers"