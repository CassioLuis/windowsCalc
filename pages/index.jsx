import styles from "../styles/Stylecalc.module.css";

import { teclado, desgraca} from "./test.js";

export default function Maincalc() {
  return (
    <div className={styles.calcBody}>
      <div className={styles.containerLeft}>
        <div id="operacoes" className={styles.operacoes}></div>
        <div id="visor" className={styles.containerTop}>
          0
        </div>
        <div className={styles.containerBot}>
          {teclado.map((atual, idx) => (
            <button
              className={atual.className}
              onClick={atual.fn}
              onKeyDown={atual.fn}
              key={idx}
            >
              {atual.nome}
            </button>
          ))}

          <button id="botao" onClick={desgraca}>
            TESTE
          </button>
        </div>
      </div>
      <div id="teste" className={styles.containerRight}></div>
    </div>
  );
}
