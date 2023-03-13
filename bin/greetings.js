#!/usr/bin/env node

import cli from "../src/index.js";

import readline from "readline";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("> ");
rl.prompt();

rl.on("line", (line) => {
  if (line === "exit") {
    rl.close();
    return;
  }
  console.log(">> " + cli(line.toString().trim()));
  rl.prompt();
});

rl.on("close", () => {
  console.log("Goodbye!");
  process.exit(0);
});
