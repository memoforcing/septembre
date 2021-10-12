

window.onload = function() {
    document.getElementById("inputa").focus();
  };

//************************************************************************************************ */
/*
function setFocusResposta()
{
    if(event.keyCode === 13){
        document.getElementById("inputb").focus();        
    }
}
*/

//************************************************************************************************ */
/*
var x =-1;
function btnAddRow()
{
    if(event.keyCode === 13){
        var portV = document.getElementById('inputa').value;
        var englV = document.getElementById('inputb').value;    
    
       
        var tabelaabody = document.getElementsByName('tabelaabody')[0];
        
        console.log("table = " + tabelaabody);
    
        var newRow = tabelaabody.insertRow(x);
    
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
    
        cell1.innerHTML = portV;
        cell2.innerHTML = englV;
    
        x = x + 1;    

       
        document.getElementById('inputa').value="";
        document.getElementById('inputb').value="";
        document.getElementById('inputa').focus();

       
    }
}
*/
//************************************************************************************************ */
//************************************************************************************************ */
//************************************************************************************************ */
//************************************************************************************************ */
//************************************************************************************************ */


document.getElementById("btnConferir").style.visibility = "hidden";
document.getElementById("btnVerdict").style.visibility = "hidden"; 
//document.getElementById("btnRevisar").style.visibility = "hidden";
document.getElementById("btnStudyMistakes").style.visibility = "hidden";


//************************************************************************** */
function setFocusPerguntaTxt(){
    document.getElementById("perguntaTextArea").focus();
}


var arrayTxtA = [];
var arrayTxtB = [];

function inserindoNoArray(){    

    document.getElementById("questUnderline").style.visibility = "hidden"; // titulo Pergunta deve ser invisivel qd salvar
    document.getElementById("respostaUnderline").style.visibility = "hidden"; // titulo Resposta deve ser invisivel qd salvar

    var arrayTxtAA = document.getElementById("perguntaTextArea").value;  
    var arrayTxtBB = document.getElementById("respostaTextArea").value;    
    
        console.log("arrayTxtB = " + arrayTxtAA);
        arrayTxtA.push(arrayTxtAA);  
        arrayTxtB.push(arrayTxtBB);

        console.log("inserindoNoArray() in arrayTxtA = " + arrayTxtA.length);

    //<input type="text" onfocus="this.value=''" value="Blabla">  --> interessante

    document.getElementById('perguntaTextArea').value = '';
    document.getElementById('respostaTextArea').value = '';

    document.getElementById("perguntaTextArea").focus();

}

/*
function checkAll(){    
    for (var i = 0; i < arrayTxtA.length; i++){
        console.log("contando " + i + " " + arrayTxtA[i]);
        console.log("contando " + i + " " + arrayTxtB[i]);
    }
}
*/
function respostaSetFocus(){
    document.getElementById("respostaTextArea").focus();
}


var contRevisar = 0;
var quantasPerguntas = arrayTxtA.length;
function acabarERevisar(){

    document.getElementById("questUnderline").style.visibility = "visible"; // deve ser visivel qd estudar
    document.getElementById("respostaUnderline").style.visibility = "visible"; // deve ser visivel qd estudar
          

    if (contRevisar < arrayTxtA.length) {
        document.getElementById('perguntaTextArea').value = arrayTxtA[contRevisar];
        document.getElementById('respostaTextArea').value = arrayTxtB[contRevisar];

        document.getElementById('questtxt').innerHTML= arrayTxtA[contRevisar];
        document.getElementById('respttxt').innerHTML = arrayTxtB[contRevisar];
    }    
    else{
        document.getElementById('perguntaTextArea').value = "Finish";
        document.getElementById('respostaTextArea').value = "Finish";
        document.getElementById('questtxt').innerHTML= "";
        document.getElementById('respttxt').innerHTML = "";
        contRevisar = -1;
    }
    contRevisar = contRevisar +1;
}

var contTest = -1;


function test(){    

    //*****************************cuidando da visibilidade dos botões**********************************************
    
    document.getElementById("btnSalvar").style.visibility = "hidden";
    document.getElementById("btnRevisar").style.visibility = "hidden";
    document.getElementById("btnConferir").style.visibility = "visible";
    document.getElementById("btnVerdict").style.visibility = "hidden"; 
    document.getElementById("btnRevisar").style.visibility = "hidden";
    document.getElementById("btnStudyMistakes").style.visibility = "hidden"; 
    document.getElementById("btnTest").style.visibility = "hidden"
    
    //***************************************************************************
        
  var valorArrayInicial = arrayTxtA.length;

  console.log("test length = " + valorArrayInicial);
  console.log("contTest = " + contTest);
  
  if(contTest == valorArrayInicial - 1){  // tirei o arrayTxtA.length para substituir por valorArrayInicial
      alert("Finish");
      document.getElementById("btnStudyMistakes").style.visibility = "visible"; 
  } else {
    contTest = contTest + 1;    
    // vou apenas mostrar a pergunta    
    document.getElementById('perguntaTextArea').value =  arrayTxtA[contTest];
    document.getElementById('respostaTextArea').value = "";
    document.getElementById("respostaTextArea").focus();
    document.getElementById('respttxt').innerHTML = "";
}
       
}


function testando(){    

    console.log("tetB  " + document.getElementById('respostaTextArea').value);

    document.getElementById("questUnderline").innerHTML = "Você respondeu:" 

    document.getElementById("respostaUnderline").innerHTML = "E a resposta é:"

    document.getElementById("questtxt").innerHTML = document.getElementById('respostaTextArea').value;
    document.getElementById('respttxt').innerHTML = arrayTxtB[contTest];
    // vamos comparar o array da resposta do interogator com o array da resposta do usuario
   // let respostaUsuario;
   // let palavraIdentica = 0;
   document.getElementById("btnVerdict").style.visibility = "visible";
  
   document.getElementById("btnConferir").style.visibility = "hidden";


}

function verdict(){   

    var txt;
  if (confirm("Se sua resposta for correta aperte OK. Caso contrário aperte Cancel")) {
      txt = "You pressed OK!";
      arrayTxtA.splice(contTest,1);
      arrayTxtB.splice(contTest,1);
      contTest = contTest - 1;     // se não  decrementar contTest ele vai pular uma pergunta.
      console.log("arrayTxtA " +  arrayTxtA);
  } else {
      txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;

  document.getElementById("btnTest").style.visibility = "visible"; 
  document.getElementById("btnVerdict").style.visibility = "visible"; 
}

function studymistakes(){
    contTest = -1;
    valorArrayInicial = arrayTxtA.length;
    console.log("studymistakes()  contTest " + contTest);
    console.log("studymistakes()  valorArrayInicial " + valorArrayInicial);
}

  
  
/*
1.  Criar perguntas e respostas  ok
2.  Revisar perguntas e respostas ok
3.  Iniciar test. A primeira pergunta aparece. As respostas desapareçam. ok
4.  Pergunta aparece ok
5.  Aperte responder. ok
6.  Aperte ver resposta. ok
7.  A resposta correta apaerece no lado da sua resposta ok
8.  Compare sua resposta com a resposta correta. Avalia. ok
9.  Considera a resposta correta, aperta correto caso contrario aperte errado ok
10. Aperte "Proxima pergunta" ok
11. Quando terminou apenas as perguntas que você errou aparecam caixa de texto
12  Resvise tudo  
13  Iniciar test. A primeira pergunta aparece...
*/


// changing into purple color if you click on the text    START
/*document.getElementById('respttxt').onclick = changeColor;   
    function changeColor() {
        document.body.style.color = "purple";
        return false;
    }   
// changing into purple color if you click on the text    END
*/
/*
    var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
    // Check if a value exists in the fruits array
    if(fruits.indexOf("Mango") !== -1){
        alert("Value exists!")
    } else{
        alert("Value does not exists!")
    }
*/
