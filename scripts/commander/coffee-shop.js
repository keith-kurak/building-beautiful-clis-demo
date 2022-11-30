#!/usr/bin/env node

const commander = require('commander');
const commands = require('./coffee-shop-ops-lib');

const program = new commander.Command();

// Commander supports nested subcommands.
// .command() can add a subcommand with an action handler or an executable.
// .addCommand() adds a prepared command with an action handler.

commands.forEach(c => {
  program.addCommand(c);
});

program.parse(process.argv);
