function calcular(){
    let nome = document.getElementById('nome')
    let alt = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let res = document.getElementById('resultado')

    res.innerHTML = ''

    if(nome.value.length == 0 || alt.value.length == 0 || peso.value.length == 0){
        window.alert('Preencha todos os campos para calcular o IMC')
    } else {
        let altura = Number(alt.value)
        let p = Number(peso.value)
        let imc = p/altura**2
        let classificacao = ''

        if(imc < 18.5){
            classificacao = 'abaixo do peso.'
        } else if (imc < 25){
            classificacao = 'com o peso ideal. Parabéns.'
        } else if (imc < 30){
            classificacao = 'levemente acima do peso.'
        } else if (imc < 35){
            classificacao = 'com obesidade grau I.'
        } else if (imc < 40){
            classificacao = 'com obesidade grau II.'
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!'
        }

        res.innerHTML = `${nome.value} seu IMC é: ${imc.toFixed(2)} e você está ${classificacao}`
    }
}