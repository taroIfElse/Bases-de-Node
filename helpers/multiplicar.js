const fs = require("fs");
let resultado = "";
const crearArchivo = async (base, listar, h) => {
  try {
    if (listar) {
      console.log(`TABLA DEL ${base}`.green);
      for (let i = 0; i <= h; i++) {
        resultado += `${base} x ${i} = ${base * i} \n`;
      }
      console.log(resultado.blue);
    }
    fs.writeFileSync(`./Tables/tablaDel${base}.txt`, resultado);
    return `tablaDel${base}.txt`;
  } catch (error) {
    throw error;
  }
};
module.exports = { crearArchivo };
