import React from "react";
import Produto from "./Produtos";

function App() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const ProdutoStorage = window.localStorage.getItem("produto");
    if (ProdutoStorage !== null) setProduto(ProdutoStorage);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  return (
    <div>
      <p>Preferência: {produto}</p>
      <button
        style={{
          marginRight: "5px",
          padding: "10px",
          backgroundColor: "#aee",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={(event) => setProduto(event.target.innerText)}
      >
        Smartphone
      </button>
      <button
        style={{
          marginRight: "5px",
          padding: "10px",
          backgroundColor: "#aee",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={(event) => setProduto(event.target.innerText)}
      >
        Notebook
      </button>
      <Produto produto={produto} />
    </div>
  );
}

export default App;

/**
 * const [carregando, setCarregando] = React.useState(false);
  const [dados, setDados] = React.useState(null);
  const getApi = async (produto) => {
    setCarregando(true);
    const api = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/" + produto
    );
    const json = await api.json();
    setDados(json);
    setCarregando(false);
  };
 * <div>
      <button
        style={{
          marginRight: "5px",
          padding: "10px",
          backgroundColor: "#aee",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => getApi("smartphone")}
      >
        Smartphone
      </button>
      <button
        style={{
          marginRight: "5px",
          padding: "10px",
          backgroundColor: "#aee",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => getApi("tablet")}
      >
        Tablet
      </button>
      <button
        style={{
          marginRight: "5px",
          padding: "10px",
          backgroundColor: "#aee",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => getApi("notebook")}
      >
        Notebook
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div> */
