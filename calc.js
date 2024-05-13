
let contador = 1;
let valor1 = '';
let valor2 = '';
let operador = '';
let visor = document.getElementById('painel');
let historic = document.getElementById('historico')
let valores = [];
let histo = []
let item = document.createElement('option')
let list= window.document.getElementById('lis')


function adicionar(num) {
  if (!operador) {
    valor1 += num;

  } else {
    valor2 += num;
    
  }
  visor.value += num;
}

function operar(op) {
  if (valor1 !== '') {
    if (operador && valor2 !== '') { // Se já temos um operador e um valor2, calculamos antes de continuar
      calcular()}
    operador = op;
    visor.value += op;
  }
}

//adicionando nos valores e historico 
function calcular() {
  if (valor1 !== '' && valor2 !== '' && operador !== '') {
    valores.push(parseFloat(valor1));
    histo.push(parseFloat(valor1))
    valores.push(parseFloat(valor2));
    histo.push(parseFloat(valor2))


 //operações

    let resultado;
    switch (operador) {
      case '+':
        resultado = valores[0] + valores[1];
        break
      case '-':
        resultado = valores[0] - valores[1];
        break
      case '*':
        resultado = valores[0] * valores[1];
        break
       case '/':
        resultado = valores[0] / valores[1];
        break 
      case '**':
        resultado = valores[0] ** valores[1];
        break
      case '%':
        resultado = valores[0] % valores[1];
        break
    }

    //crinado o painel do historico

    item = document.createElement('option');
    if (resultado !== '') {
        item.textContent += `${histo[0]}${operador}${histo[1]}=${resultado} `;

        historic.value = item.textContent
        
    }
    if (item.textContent !== '') {
        list.appendChild(item);
        item.value = contador; // Define um valor para a opção (opcional)
         // Incrementa o contador para distinguir as opções
        contador++
         
        histo = []
    }

    visor.value = resultado;
    valores = []; // Limpar array de valores para futuras operações
    valor1 = resultado.toString(); // Definir valor1 como o resultado para possíveis operações subsequentes
    valor2 = '';
    operador = '';
  }}

function delet(){
  
  valor1 = ''
  valor2 = ''
  operador = ''
  painel.value = ''
  historic.value = ''  
  for (var i = list.options.length - 1; i > 0; i--) {
    list.remove(i);
  }

  
  
}

function ponto(point){
  point = '.'
  if (valor1 !== '' && operador == ''){
    valor1 += point
    painel.value += point
  }
  if(valor2 !== ''){
    valor2 += point
    painel.value += point
  }
}

function voltar(){
  if(valor1 !== '' && operador == '' && valor2 == ''){
      valor1 = ''
      painel.value = valor1
    }
  if(operador !== '' && valor2 == ''){
    operador = ''
    painel.value = valor1
  }
  if(valor1 ,valor2, operador !== ''){
    valor2 = ''
    painel.value = valor1 + operador
  }
  }


