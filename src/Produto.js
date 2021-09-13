import React from "react";
import { GlobalContext } from "./GlobalStorage";
function Produto() {
  const global = React.useContext(GlobalContext);
  console.log(global);
  if (global.produto === null) return <p>Tem nada</p>;

  const handleClick = () => {
    global.limparDados();
  };
  return (
    <div>
      <p>Produto: </p>
      <button onClick={handleClick}>limpar</button>
      {global.produto.map((produto) => (
        <li key={produto.id}> {produto.nome}</li>
      ))}
    </div>
  );
}

export default Produto;

//Prática 2

/**import React from "react";

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
 */
