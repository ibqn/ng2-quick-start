/* jshint esversion: 6 */
'use strict';
/*
 | Update packages together with the package.json file
 |   https://github.com/npm/npm/issues/3417
 */

const stdlog = console.log.bind(console);

const requireWithCheck = module => {
  try {
    return require(module);
  } catch (e) {
    stdlog(`Please make sure that '${module}' module is present`);
    stdlog("Eventually, install it with 'npm i <module name>'");
    process.exit(e.code);
  }
}

const fs = require('fs');
const chalk = requireWithCheck('chalk');
const cmd = requireWithCheck('node-cmd');

if (!process.stderr.isTTY) chalk.enabled = false;

fs.readFile('./package.json', 'utf8', (err, data) => {
  let d = JSON.parse(data);
  for (let key in d.dependencies) {
    stdlog(chalk.green(`Updating dev package ${key}`));
    cmd.get(
      `npm install --save ${key}@latest`,
      data => {
        stdlog(chalk.green(`Package '${key}' updated.`));
      }
    );
  }
  for (let key in d.devDependencies) {
    stdlog(chalk.blue(`Updating devDep package ${key}`));
    cmd.run(`npm install --save-dev ${key}@latest`);
    cmd.get(
      `npm install --save-dev ${key}@latest`,
      data => {
        stdlog(chalk.blue(`Package '${key}' updated.`));
      }
    );
  }
  stdlog(chalk.yellow('Please wait, updates in progress'));
});
