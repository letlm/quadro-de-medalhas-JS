import {TabelaDados} from "./TabelaDados.js"

class Tabela{
    static tabelaGeral(){
        const section = document.createElement('section')
        section.classList.add("sectionTabela")
        const listraAzul = document.createElement('header')
        listraAzul.classList.add("listraAzul")
        const divPais = document.createElement('div')
        divPais.classList.add("divFiltroPais")
        const divRanking = document.createElement('div')
        divRanking.classList.add("divRanking")
        const form = document.createElement('form')
        form.classList.add("form")
        const inputFiltro = document.createElement('input')
        inputFiltro.classList.add("filtroPais")
        const buttonFiltro = document.createElement('button')
        buttonFiltro.classList.add("pesquisarPais")
        const h5 = document.createElement('h5')
        h5.classList.add('pesquisa')
        const h6 = document.createElement('h6')
        h6.classList.add('exemplo')
        const tabela = document.createElement('table')
        tabela.classList.add("tabela")
        const cabecalhoAzul = document.createElement('thead')
        cabecalhoAzul.classList.add("ulAzul")
        const bodyTabela = document.createElement('tbody')
        bodyTabela.classList.add("tbody")
        const bPosicao = document.createElement('td')
        bPosicao.classList.add("position")
        const buttonPosicao = document.createElement('button')
        buttonPosicao.classList.add("buttonPosition")
        const pais = document.createElement('td')
        pais.classList.add("pais")
        const bOuro = document.createElement('td')
        bOuro.classList.add("ou")
        const buttonOuro = document.createElement('button')
        buttonOuro.classList.add("buttonOuro")
        const bPrata = document.createElement('td')
        bPrata.classList.add("ou")
        const buttonPrata = document.createElement('button')
        buttonPrata.classList.add("buttonPrata")
        const bBronze = document.createElement('td')
        bBronze.classList.add("ou")
        const buttonBronze = document.createElement('button')
        buttonBronze.classList.add("buttonBronze")
        const total = document.createElement('td')
        total.classList.add("total")

        inputFiltro.placeholder = "Pesquisar por país"
        inputFiltro.required = true
        h5.innerText = "Pesquisa"
        h6.innerText = "Ex. Brasil"
        buttonFiltro.innerText = "Pesquisar"
        buttonPosicao.innerText = "Posição"
        pais.innerText = "País"
        buttonOuro.innerText = "Ouro"
        buttonPrata.innerText = "Prata"
        buttonBronze.innerText = "Bronze"
        total.innerText = "Total"
        listraAzul.innerHTML = `<span class="menor"><</span>
        <img class="circulos" src="./src/img/azul.png">
        <img class="circulos" src="./src/img/amarelo.png">
        <img class="circulos" src="./src/img/branco.png">
        <img class="circulos" src="./src/img/verde.png">
        <img class="circulos" src="./src/img/vermelho.png">
        <span class="maior">/></span>`
        divRanking.appendChild(listraAzul)
        divRanking.appendChild(divPais)
        divRanking.appendChild(tabela)
        form.appendChild(inputFiltro)
        form.appendChild(buttonFiltro)
        divPais.appendChild(h5)
        divPais.appendChild(form)
        divPais.appendChild(h6)
        bPosicao.appendChild(buttonPosicao)
        bOuro.appendChild(buttonOuro)
        bPrata.appendChild(buttonPrata)
        bBronze.appendChild(buttonBronze)
        cabecalhoAzul.appendChild(bPosicao)
        cabecalhoAzul.appendChild(pais)
        cabecalhoAzul.appendChild(bOuro)
        cabecalhoAzul.appendChild(bPrata)
        cabecalhoAzul.appendChild(bBronze)
        cabecalhoAzul.appendChild(total)
        tabela.appendChild(cabecalhoAzul)
        tabela.appendChild(bodyTabela) 
        section.appendChild(divRanking)
        TabelaDados.main.appendChild(section)
    }
}

export {Tabela}