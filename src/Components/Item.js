import React from "react";
import styles from "./Item.module.css";
import { useParams } from "react-router";
import Head from "./Head";
const Item = () => {
  const { id } = useParams();
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
      .then((r) => r.json())
      .then((json) => setDados(json));
  }, [id]);

  if (dados === null) return null;
  return (
    <section className={styles.item + "animeLeft"}>
      <Head title={dados.id} />
      {dados.fotos.map((foto) => (
        <img src={foto.src} alt={foto.titulo} key={foto.src} />
      ))}

      <div>
        <h1>{dados.nome}</h1>
        <span className={styles.preco}>R$ {dados.preco}</span>
        <p className={styles.descricao}>{dados.descricao}</p>
      </div>
    </section>
  );
};

export default Item;
