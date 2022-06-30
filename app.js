const { crearArchivo } = require("./helpers/multiplicar");
const { argv } = require("./config/yargs");
let colors = require("colors");
crearArchivo(argv.base, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log(
      colors.green(`The file ${nombreArchivo.rainbow} has been created`)
    )
  )
  .catch((e) => console.log(colors.red("ERROR->", e)));
