import styles from "../styles/Stylecalc.module.css";

import { teclado } from "./test.js";

export default function Maincalc() {
  return (
    <div className={styles.calcBody}>
      <div className={styles.containerLeft}>
        <div id="visor" className={styles.containerTop}>0</div>
        <div className={styles.containerBot}>
          {teclado.map((atual, idx) => (
            <button className={atual.className} onClick={atual.fn} key={idx}>
              {atual.nome}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.containerRight}></div>
    </div>
  );
}
