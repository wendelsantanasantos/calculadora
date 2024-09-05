
let valor1 = '';
let valor2 = '';
let operador = '';
let visor = document.getElementById('painel');
let historic = document.getElementById('historico')
let valores = [];
let histo = []
let list= window.document.getElementById('lis')
let showHistorico = false
let clock = document.querySelector("#hist").addEventListener("click" , function(){
  if(showHistorico === false){
    list.classList.remove("remove")
    showHistorico = true
  }
  else{
    list.classList.add("remove")
    showHistorico = false
  }
})


function adicionar(num) {
  if (!operador) {
    valor1 += num;

  } else {
    valor2 += num;
    
  }
  visor.value += num;

}

function operar(op) {

    if (operador && valor2 !== '') { // Se já temos um operador e um valor2, calculamos antes de continuar
      calcular()}
      
    if(!operador){
       operador = op;
       visor.value += op;
    }
    else{
     operador = op
     visor.value = valor1 + operador
    }
  }


//adicionando nos valores e historico 
function calcular() {
  if (valor1 !== '' && valor2 !== '' && operador !== '') {

    let v1 = parseFloat(valor1)
    let v2 = parseFloat(valor2)
    histo.push(v1,v2)

    

 //operações

    let resultado;
    switch (operador) {
      case '+':
        resultado = v1 + v2;
        break
      case '-':
        resultado = v1 - v2;
        break
      case '*':
        resultado = v1 * v2;
        break
       case '/':
        resultado = v1 / v2;
        break 
      case '**':
        resultado = v1 ** v2;
        break
      case '%':
        resultado = v1 % v2;
        break
    }

    //crinado o painel do historico

   
    if (resultado !== '') {

        item = document.createElement('p');
        item.textContent += `${histo[0]} ${operador} ${histo[1]} = ${resultado} `;
        
        historic.value = item.textContent
        
    }
    if (item.textContent !== '') {
        list.appendChild(item);
        histo = []
    }

    visor.value = resultado;
    valores = []; // Limpar array de valores para futuras operações
    valor1 = resultado.toString(); // Definir valor1 como o resultado para possíveis operações subsequentes
    valor2 = '';
    operador = ''
  }}

function delet(){
  
  valor1 = ''
  valor2 = ''
  operador = ''
  painel.value = ''
  historic.value = '' 
  list.textContent = ''
}

function ponto(){
 let point = '.'
  if (valor1 !== '' && operador == '' && /*verificando se o valor 1 nao inclui o valor point */!valor1.includes(point)){
    valor1 += point
    painel.value += point
  }

  if(valor2 !== '' && !valor2.includes(point)){
    valor2 += point
    painel.value += point
  }
}

function voltar(){

  if(operador === ""){
    if(valor1 !== ""){
      valor1 = valor1.slice(0, -1);
      visor.value = valor1;
      operador = ""
    }
  }

  else if(operador!=="" && valor2 ===""){
  operador = ""
  visor.value = valor1
  }

  else{
  if(valor2 !==""){
    valor2 = valor2.slice(0, -1);
      visor.value = valor1 + operador + valor2;
  }
}
}


