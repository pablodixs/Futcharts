
const apiUrl = 'https://api.api-futebol.com.br/v1/campeonatos/10/tabela'
const authToken = 'test_678e568139d49f697686bcac73452d'

window.onload = async () => {
    const response = fetch(apiUrl, {
        headers: new Headers({
            Authorization: `Bearer ${authToken}`,
        })
    })

    .then(response => response.json())
    .then(data => {
        let pos1 = data

        console.log(data)

        // LOOP PARA CRIAR A TABELA
        
        for(let p = 0; p <= data.length; p++){
            let pos2 = data[p]

            // FUNÇÃO PARA MOSTRAR A VARIAÇÃO

            function variacao() {
                let variation = pos2.variacao_posicao

                if(variation > 0) {
                    let alo = `${pos2.variacao_posicao} ▲`
                    return alo;
                } else if(variation < 0){
                    alo = `${pos2.variacao_posicao} ▼`
                    return alo;
                } else {
                    alo = `${pos2.variacao_posicao}`
                    return alo;
                }
            }

            // FUNÇÃO PARA OS ÚLTIMOS JOGOS

            let ultimos = data[p].ultimos_jogos

            // function verify() {
            //     let ultimos = data[p].ultimos_jogos
            
            //     for(let u = 0; u <= ultimos.length; u++) {
            //         if(ultimos[u].includes('v')) {
            //             let resp = 'v'
            //             return resp
            //         } else if(ultimos[u].includes('d')) {
            //             let resp = 'd'
            //             return resp
            //         } else if(ultimos[u].includes('e')) {
            //             let resp = 'e'
            //             return resp
            //         } else {
            //             console.log('ERRO')
            //         }
            //     }
            // }

            // INSERE A TABELA NO HTML

            document.getElementById('table').innerHTML += `
            <tr>
                <td class="n-pos">${pos2.posicao}</td>
                <td class='var-pos'>${variacao()}</td>
                <td><img src="${pos2.time.escudo}" width="25px" height="25px"></td>
                <td class="n-time">${pos2.time['nome_popular']}</td>
                <td>${pos2.pontos}</td>
                <td>${pos2.jogos}</td>
                <td>${pos2.vitorias}</td>
                <td>${pos2.empates}</td>
                <td>${pos2.derrotas}</td>
                <td>${pos2.gols_pro}</td>
                <td>${pos2.gols_contra}</td>
                <td>${pos2.saldo_gols}</td>
                <td>${pos2.aproveitamento}</td>
                <td>${ultimos}</td>
            </tr>`
        }
    })


}