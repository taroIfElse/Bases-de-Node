const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "the base of the table",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "shows the table in the console",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: false,
    describe: "shows the table in the console",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "The bass have to be a number";
    }
    return true;
  }).argv;

module.exports = { argv };
