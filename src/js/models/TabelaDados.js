import {Filtrar} from "./Filtros.js"

class TabelaDados {

    static main = document.getElementById("main")
    static posicao = 1
    static teste

    static async alimentarTabela(medalhas) {
        const criar = await medalhas

        const listaMedalhas = document.querySelector("tbody")
        console.log(criar)

      /*  Filtrar.posicaoTotal = criar.sort((a, b) => {
            if (a.medal_gold + a.medal_silver + a.medal_bronze > b.medal_gold + b.medal_silver + b.medal_bronze && a.medal_gold < a.medal_gold) {
                return -1
            } else if (a.medal_gold + a.medal_silver + a.medal_bronze < b.medal_gold + b.medal_silver + b.medal_bronze && a.medal_gold < a.medal_gold) {
                return 1;
            }
        }) */
        
        listaMedalhas.innerHTML = '';
        criar.forEach((paises) => {
            paises.posicaoPais = this.posicao++
            const { country, flag_url, medal_bronze, medal_gold, medal_silver, posicaoPais } = paises

            const tr = document.createElement("tr")
            tr.classList.add("listarUm")
            const tdPosicao = document.createElement("td")
            tdPosicao.classList.add("positionBody")
            const img = document.createElement("img")
            img.classList.add("bandeiras")
            const tdPais = document.createElement("td")
            tdPais.classList.add("linhaPais")
            const tdOuro = document.createElement("td")
            tdOuro.classList.add("ouBody")
            const tdPrata = document.createElement("td")
            tdPrata.classList.add("ouBody")
            const tdBronze = document.createElement("td")
            tdBronze.classList.add("ouBody")
            const tdTotal = document.createElement("td")
            tdTotal.classList.add("numeros")

            tdPosicao.innerText = `${posicaoPais}º`
            img.src = `${flag_url}`
            tdPais.innerText = `${country}`
            tdOuro.innerText = `${medal_gold}`
            tdPrata.innerText = `${medal_silver}`
            tdBronze.innerText = `${medal_bronze}`
            const medalhaTotal = paises.medal_gold + paises.medal_bronze + paises.medal_silver
            tdTotal.innerText = `${medalhaTotal}`

            tdPais.appendChild(img)
            tr.appendChild(tdPosicao)
            tr.appendChild(tdPais)
            tr.appendChild(tdOuro)
            tr.appendChild(tdPrata)
            tr.appendChild(tdBronze)
            tr.appendChild(tdTotal)

            listaMedalhas.appendChild(tr)
            
            
        })
        
    }

    static limpar() {
        this.posicao = 1
    }
}

export { TabelaDados }