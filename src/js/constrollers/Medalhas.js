//Utilizar o fetch para recuperar a quantidade de medalhas de cada país;
class Medalhas {
    static async requisicao() {

        const response = await fetch('https://kenzie-olympics.herokuapp.com/paises')
        const data = await response.json()

        return data
    }
}

export { Medalhas }