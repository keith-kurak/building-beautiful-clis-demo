#!/usr/bin/env node

import { Command } from 'commander';
import commands from './coffee-shop-ops-lib.js';

const program = new Command();

// Commander supports nested subcommands.
// .command() can add a subcommand with an action handler or an executable.
// .addCommand() adds a prepared command with an action handler.

commands.forEach(c => {
  program.addCommand(c);
});

program.parse(process.argv);

// Example commands
// yarn coffee-shop --help
// yarn coffee-shop