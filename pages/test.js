// import { useState } from "react";
import styles from "../styles/Stylecalc.module.css";

// const [view, setView] = useState(0)

let operadores = [];
let concatNum = "";

const mostrarNoHtml = () =>
  (document.querySelector("#visor").innerHTML = concatNum);

const clicar = (num = null) => {
  concatNum = `${concatNum}${num}`;
  if (isNaN(num)) operadores.push(num);
  mostrarNoHtml();
};

const resultado = () => {
  if (!concatNum || !operadores.length) return;
  concatNum = eval(concatNum);
  operadores = [];
  mostrarNoHtml();
};

const limpar = () => {
  concatNum = "";
  operadores = [];
  mostrarNoHtml();
};

export const teclado = [
  {
    nome: 7,
    className: `${styles.tecla}`,
    fn: () => clicar(7),
  },
  {
    nome: 8,
    className: `${styles.tecla}`,
    fn: () => clicar(8),
  },
  {
    nome: 9,
    className: `${styles.tecla}`,
    fn: () => clicar(9),
  },
  {
    nome: "+",
    className: `${styles.tecla} ${styles.dif}`,
    fn: () => clicar("+"),
  },
  {
    nome: 4,
    className: `${styles.tecla}`,
    fn: () => clicar(4),
  },
  {
    nome: 5,
    className: `${styles.tecla}`,
    fn: () => clicar(5),
  },
  {
    nome: 6,
    className: `${styles.tecla}`,
    fn: () => clicar(6),
  },
  {
    nome: "-",
    className: `${styles.tecla} ${styles.dif}`,
    fn: () => clicar("-"),
  },
  {
    nome: 1,
    className: `${styles.tecla}`,
    fn: () => clicar(1),
  },
  {
    nome: 2,
    className: `${styles.tecla}`,
    fn: () => clicar(2),
  },
  {
    nome: 3,
    className: `${styles.tecla}`,
    fn: () => clicar(3),
  },
  {
    nome: "x",
    className: `${styles.tecla} ${styles.dif}`,
    fn: () => clicar("*"),
  },
  {
    nome: "Del",
    className: `${styles.tecla}`,
    fn: () => limpar(),
  },
  {
    nome: 0,
    className: `${styles.tecla}`,
    fn: () => clicar(0),
  },
  {
    nome: "=",
    className: `${styles.tecla}`,
    fn: () => resultado(),
  },
  {
    nome: "/",
    className: `${styles.tecla} ${styles.dif}`,
    fn: () => clicar("/"),
  },
];
