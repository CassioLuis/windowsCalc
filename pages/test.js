import styles from "../styles/Stylecalc.module.css";

let entrada = "";
let operacao = "";

const printaEntrada = () =>
  (document.querySelector("#visor").innerHTML = entrada || 0);

const printaOperacao = () =>
  (document.querySelector("#operacoes").innerHTML = operacao);

const clickNumeros = (num = 0) => {
  if (entrada.length < "16") entrada = `${entrada}${num}`;
  printaEntrada();
  if (operacao.length < "16") operacao = `${operacao}${num}`;
  console.log(operacao);
};

const clickOperadores = (operador = 0) => {
  operacao = `${eval(operacao) || entrada}${operador}`;
  // !operacao
  //   ? (operacao = `${entrada}${operador}`)
  //   : (operacao = `${eval(operacao)}${operador}`);
  entrada = "";
  printaOperacao();
};

export const desgraca = () => {
  const para = document.createElement("p");
  para.innerText = "This is MEU SACO PELUDO.";
  document.querySelector("#teste").appendChild(para);
  para.classList.add({styles.sacao});
};

const resultado = () => {
  entrada = eval(operacao);
  printaEntrada();
  // operacao = "";
  printaOperacao();
};

const limpar = () => {
  entrada = "";
  operacao = "";
  printaEntrada();
  printaOperacao();
};

export const teclado = [
  {
    nome: 7,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(7),
  },
  {
    nome: 8,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(8),
  },
  {
    nome: 9,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(9),
  },
  {
    nome: "+",
    className: `${styles.tecla} ${styles.dif}`,
    fn: () => clickOperadores("+", "operador"),
  },
  {
    nome: 4,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(4),
  },
  {
    nome: 5,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(5),
  },
  {
    nome: 6,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(6),
  },
  {
    nome: "-",
    className: `${styles.tecla} ${styles.dif}`,
    fn: () => clickOperadores("-", "operador"),
  },
  {
    nome: 1,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(1),
  },
  {
    nome: 2,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(2),
  },
  {
    nome: 3,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(3),
  },
  {
    nome: "x",
    className: `${styles.tecla} ${styles.dif}`,
    fn: () => clickOperadores("*", "operador"),
  },
  {
    nome: "Del",
    className: `${styles.tecla}`,
    fn: () => limpar(),
  },
  {
    nome: 0,
    className: `${styles.tecla}`,
    fn: () => clickNumeros(0),
  },
  {
    nome: "=",
    className: `${styles.tecla}`,
    fn: () => resultado(),
  },
  {
    nome: "/",
    className: `${styles.tecla} ${styles.dif}`,
    fn: () => clickOperadores("/", "operador"),
  },
];
