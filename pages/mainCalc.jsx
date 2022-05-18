import styles from '../styles/Stylecalc.module.css'

export default function Maincalc(){
    return (
	    <div className={styles.calcBody}>
            <div className={styles.containerLeft}>
                <div className={styles.containerTop}>0</div>
                <div className={styles.containerBot}>
                    <button className={`${styles.tecla} ${styles.dif}`}>%</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>CE</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>C</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>&frac12;</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>1/x</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>&chi;&sup2;</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>&radic;</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>&divide;</button>

                    <button className={styles.tecla}>7</button>
                    <button className={styles.tecla}>8</button>
                    <button className={styles.tecla}>9</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>&times;</button>
                    <button className={styles.tecla}>4</button>
                    <button className={styles.tecla}>5</button>
                    <button className={styles.tecla}>6</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>&minus;</button>
                    <button className={styles.tecla}>1</button>
                    <button className={styles.tecla}>2</button>
                    <button className={styles.tecla}>3</button>
                    <button className={`${styles.tecla} ${styles.dif}`}>&#43;</button>
                    <button className={styles.tecla}>+/-</button>
                    <button className={styles.tecla}>0</button>
                    <button className={styles.tecla}>,</button>
                    <button className={`${styles.tecla} ${styles.dif2}`}>&#61;</button>
                </div>
            </div>
            <div className={styles.containerRight}></div>
        </div>
    )
}