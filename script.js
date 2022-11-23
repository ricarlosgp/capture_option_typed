/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

alert(`Olá mundo! Me chamo ricarlosgp@gmail.com e sou estudante de desenvolvimento web front-end. Nesse script estou exibindo um neu de opções e exibindo-o.
Abraços!`)

let option //variável de controle
let items = [] //aqui é uma variável que recebe uma lista vazia ou array
//while ou enquanto(option for diferente da opção 3) { execute ou faça meu escopo abaixo}
while(option != 3) {
 
  //reatribua a variável option para receber, convertendo em número-Number e exibir em tela (todo o meu prompt())
  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))
//A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case. Switch = troca


  //trocar(option)
  switch(option) {
    case 1: // se caso a opção seja 1 faça a sequência de código abaixo
      let item = prompt("Digite o nome do item") //let item exibe em tela ou prompt a mensagem("Digite o nome do item") em seguida vai ser cadasrtrado o item pelo .push
      items.push(item) //aqui irei cadastrar um item. Dentro da variável ITEMS irei colocar a variável ITEM. O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. 
      break //break=quebra. Se eu não colocar o break ele passará para o próximo case automaticamente até encontrar um break se não, vai ser loop infinito e vai travar o navegador. Aí ele volta para o While que é o menu de opções
    case 2: //caso a opção escolhida seja a 2 faça a sequência de códigos abaixo

      if(items.length == 0) {//se(a quantidade de itens ou items.lenght for igual a zero 0 ou seja, se no case 1 eu não tiver cadastrado nada faça um alert exibindo o texto "Não existem itens cadastrados"). Esse items é do escopo do switch.
        alert("Não existem itens cadastrados")
      } else { //senão for igual a zero ou seja, se tiver sido cadastrado algo no item 1 faça um alert exibindo o (items) digitado na opção 1
        alert(items) //mostre(items) digitado na opção 1
      }
      break //quebra e volte para o while que é o menu de opções
    case 3: //caso a opção escolhida tenha sido a 3 coloque um alert "Tchau!" 
      alert("Tchau!")
      break //quebra e volte para o while que é o menu de opções

    default: //se eu não informar nenhuma das opções: 1,2 ou 3 exiba uma alert ("Opção inválida. Tente novamente")
      alert("Opção inválida. Tente novamente")
  }

}