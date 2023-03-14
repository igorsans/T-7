// atividade: node-fetch

import fetch from "node-fetch";

async function geraUsuarios(param) {
  const response = await fetch(`https://randomuser.me/api/?results=${param}`);
  const body = await response.json();
  console.log(body);

  for (let i = 0; i < body.results.length; i++) {
    let dados = body.results[i].name;
    console.log(dados.first, dados.last);
  }

  //   body.results.map( (item) => {
  //         console.log(item.name.first, item.name.last )
  //   } )
}

geraUsuarios(5);
