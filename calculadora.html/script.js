
const saldo= parseFloat(prompt("Olá digite o seu saldo bancario!!"))

const compra = parseFloat(prompt("Agora digite o valor da compra que deseja realizar!!"))

let saldo_restante =saldo-compra

if(compra <= saldo){
    alert(`sua compra foi realizada com sucesso e o seu saldo é de ${saldo_restante}`)
}

else{

    alert("impossivel a realizaçâo da compra pois o seu saldo é insuficiente+.")


}
