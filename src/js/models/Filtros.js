// Implementar um filtro por nome de país através de um campo de busca;
// Implementar diferentes formas de ordenação, a partir do clique no título da coluna:
// Por padrão, a ordenação será feita pela posição do país no ranking. — A posição será calculada a partir do total de medalhas, caso haja empate entre os países, o desempate será feito pela quantidade de medalhas de ouro;
// Ordenação pela quantidade de medalhas de ouro;
// Ordenação pela quantidade de medalhas de prata;
// Ordenação pela quantidade de medalhas de bronze;
// Voltar a ordenação padrão, ou seja, pela posição no ranking.
import { Medalhas } from "../constrollers/Medalhas.js";
import { TabelaDados } from "./TabelaDados.js"

class Filtrar {
    static posicao = 1;
    static cont = 0;

    static async filtroPais(event) {
        event.preventDefault();

        const tableBody = document.querySelector(".tbody")
        tableBody.innerHTML = '';
        const digitarNoCampo = document.querySelector(".filtroPais")
        const pais = await Medalhas.requisicao()

        let armazenar = [];
        for (const keys in pais) {
            const { country } = pais[keys]
            armazenar.push(country)
        }
        const filtro = armazenar.filter((pais) => {
            return pais === digitarNoCampo.value || pais.toLowerCase() === digitarNoCampo.value
        })

        const listaMedalhas = document.querySelector("tbody")

        if (filtro.length) {
            for (let i = 0; i < pais.length; i++) {
                const { country } = pais[i]
                if (country === filtro[0]) {
                    const { country, flag_url, medal_bronze, medal_gold, medal_silver } = pais[i]
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

                    tdPosicao.innerText = `${this.posicao}`
                    img.src = `${flag_url}`
                    tdPais.innerText = `${country}`
                    tdOuro.innerText = `${medal_gold}`
                    tdPrata.innerText = `${medal_silver}`
                    tdBronze.innerText = `${medal_bronze}`
                    const medalhaTotal = medal_gold + medal_bronze + medal_silver
                    tdTotal.innerText = `${medalhaTotal}`

                    tdPais.appendChild(img)
                    tr.appendChild(tdPosicao)
                    tr.appendChild(tdPais)
                    tr.appendChild(tdOuro)
                    tr.appendChild(tdPrata)
                    tr.appendChild(tdBronze)
                    tr.appendChild(tdTotal)

                    listaMedalhas.appendChild(tr)
                }
            }
        }
    }

    static async posicaoTotal() {
        const criar = await Medalhas.requisicao()
        let posicaoTotal

        if (this.cont === 0) {
            posicaoTotal = criar.sort((a, b) => {
                if (a.medal_gold + a.medal_silver + a.medal_bronze > b.medal_gold + b.medal_silver + b.medal_bronze ||
                    a.medal_gold + a.medal_silver + a.medal_bronze === b.medal_gold + b.medal_silver + b.medal_bronze && a.medal_gold > b.medal_gold) {
                    return -1;
                } else if (a.medal_gold + a.medal_silver + a.medal_bronze < b.medal_gold + b.medal_silver + b.medal_bronze ||
                    a.medal_gold + a.medal_silver + a.medal_bronze === b.medal_gold + b.medal_silver + b.medal_bronze && a.medal_gold < b.medal_gold) {
                    return 1
                }
            })
            this.cont += 1;
        } else {
            posicaoTotal = criar.sort((a, b) => {
                if (a.medal_gold + a.medal_silver + a.medal_bronze > b.medal_gold + b.medal_silver + b.medal_bronze ||
                    a.medal_gold + a.medal_silver + a.medal_bronze === b.medal_gold + b.medal_silver + b.medal_bronze && a.medal_gold > b.medal_gold) {
                    return 1
                } else if (a.medal_gold + a.medal_silver + a.medal_bronze < b.medal_gold + b.medal_silver + b.medal_bronze ||
                    a.medal_gold + a.medal_silver + a.medal_bronze === b.medal_gold + b.medal_silver + b.medal_bronze && a.medal_gold < b.medal_gold) {
                    return -1;
                }
            })
            this.cont = 0;
        }
        TabelaDados.limpar()
        TabelaDados.alimentarTabela(posicaoTotal);
    }

    static async ouro() {
        const pais = await Medalhas.requisicao()
        let posicaoOuro

        if (this.cont === 0) {
            posicaoOuro = pais.sort((a, b) => {
                if (a.medal_gold > b.medal_gold || a.medal_gold === b.medal_gold) {
                    return 1;
                } else if (a.medal_gold < b.medal_gold) {
                    return -1
                }
            })
            this.cont += 1;
        } else {
            posicaoOuro = pais.sort((a, b) => {

                if (a.medal_gold > b.medal_gold || a.medal_gold === b.medal_gold) {
                    return -1;
                } else if (a.medal_gold < b.medal_gold) {
                    return 1
                }
            })
            this.cont = 0;
        }
        TabelaDados.limpar()
        TabelaDados.alimentarTabela(posicaoOuro);
    }

    static async prata() {
        const pais = await Medalhas.requisicao()
        let posicaoPrata

        if (this.cont === 0) {
            posicaoPrata = pais.sort((a, b) => {
                if (a.medal_silver > b.medal_silver || a.medal_silver === b.medal_silver) {
                    return 1;
                } if (a.medal_silver < b.medal_silver) {
                    return -1
                }
            })
            this.cont += 1;
        } else {
            posicaoPrata = pais.sort((a, b) => {
                if (a.medal_silver > b.medal_silver || a.medal_silver === b.medal_silver) {
                    return -1;
                } if (a.medal_silver < b.medal_silver) {
                    return 1
                }
            })
            this.cont = 0
        }
        TabelaDados.limpar()
        TabelaDados.alimentarTabela(posicaoPrata)
    }

    static async bronze() {
        const pais = await Medalhas.requisicao()

        let posicaoBronze

        if (this.cont === 0) {
            posicaoBronze = pais.sort((a, b) => {
                if (a.medal_bronze > b.medal_bronze || a.medal_bronze === b.medal_bronze) {
                    return 1;
                } if (a.medal_bronze < b.medal_bronze) {
                    return -1
                }
            })
            this.cont += 1;
        } else {
            posicaoBronze = pais.sort((a, b) => {
                if (a.medal_bronze > b.medal_bronze || a.medal_bronze === b.medal_bronze) {
                    return -1;
                } if (a.medal_bronze < b.medal_bronze) {
                    return 1
                }
            })
            this.cont = 0
        }
        TabelaDados.limpar()
        TabelaDados.alimentarTabela(posicaoBronze);
    }
}

export { Filtrar }
