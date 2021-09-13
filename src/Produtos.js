import React from "react";

function Produto({ produto }) {
  const [dados, setDados] = React.useState(null);

  const url = "https://ranekapi.origamid.dev/json/api/produto/";

  React.useEffect(() => {
    if (produto !== null) {
      const dados = fetch(url + produto)
        .then((res) => res.json())
        .then((json) => setDados(json));
    }
  }, [produto]);
  if (dados === null) return null;
  if (dados) console.log("oi");
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
}

export default Produto;
