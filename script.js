const inputCoin = document.querySelectorAll('.coin')
const valueCoin = document.querySelectorAll('.value-coin')

async function getBid() {
    const url = await fetch('http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL')
    const response =  await url.json()

    let newInputCoin = Array.from(inputCoin)

    newInputCoin.forEach((item, index) => {
        item.addEventListener('keyup', (e) => {
           if(index === 0) {
            valueCoin[index].innerHTML = Number((e.target.value) * response.USDBRL.bid).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
           }

           if(index === 1) {
            valueCoin[index].innerHTML = Number((e.target.value) * response.EURBRL.bid).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
           }

           if(index === 2) {
            valueCoin[index].innerHTML = Number((e.target.value) * response.BTCBRL.bid).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
           }
        })
    })
}

getBid()