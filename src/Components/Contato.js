import React from "react";
import styles from "./Contato.module.css";
import imagem from "../contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Contato" />
      <img src={imagem} alt="Máquina de Escrever" className={styles.img} />
      <div className={styles.container}>
        <h1>Entre em contato.</h1>
        <p className={styles.p}>andre@origamid.com</p>
        <p className={styles.p}>99999-9999</p>
        <p className={styles.p}>José Araújo Freire, 500</p>
      </div>
    </section>
  );
};

export default Contato;
