import { Medalhas } from "./constrollers/Medalhas.js";
const medalhas = await Medalhas.requisicao()

import { Tabela } from "./models/Tabela.js";
import { TabelaDados } from "./models/TabelaDados.js"
Tabela.tabelaGeral()
TabelaDados.alimentarTabela(medalhas)
Filtrar.posicaoTotal()

import { Filtrar } from "./models/Filtros.js";
const selecionarForm = document.querySelector("body")
selecionarForm.addEventListener("submit", () => { Filtrar.filtroPais(event) })

const selectPosition = document.querySelector(".buttonPosition")
selectPosition.addEventListener("click", Filtrar.posicaoTotal)

const selectOuro = document.querySelector(".buttonOuro")
selectOuro.addEventListener("click", Filtrar.ouro)

const selectPrata = document.querySelector(".buttonPrata")
selectPrata.addEventListener("click", Filtrar.prata)

const selectBronze = document.querySelector(".buttonBronze")
selectBronze.addEventListener("click", Filtrar.bronze)