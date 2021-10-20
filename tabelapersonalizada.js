function onLoadingSetFocus(){
    document.getElementById('inputa').focus();   
}

function setFocusResposta()
{
    if(event.keyCode === 13){
        document.getElementById("inputb").focus();        
    }
}
/*-----------------------------------------------------------------------------------*/
var faseTestb = false;
var x = 0;
function btnAddRow()
{
    if(event.keyCode === 13){
        if(faseTestb){  //apertando Enter na caixa de texto após iniciar o teste....
            iniciarFaseTestOrdenado();
        } else {
            var portV = document.getElementById('inputa').value;
            var englV = document.getElementById('inputb').value;    
        
            /* var table = document.getElementsByTagName('table')[0]; */
            var tabelaabody = document.getElementsByName('tabelaabody')[0];
            
            console.log("table = " + tabelaabody);
        
            var newRow = tabelaabody.insertRow(x);
        
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
        
            cell1.innerHTML = portV;
            cell2.innerHTML = englV;
        
            x = x + 1;    
            console.log("x --> " + x);

            /*-----------------------*/
            document.getElementById('inputa').value="";
            document.getElementById('inputb').value="";
            document.getElementById('inputa').focus();

            // document.getElementById('respttxt').innerHTML = "";
        }
    }
}
/*-----------------------------------------------------------------------------------*/
var getarray1 = [];
var getarray2 = [];
var getarray11 = []; 
var getarray22 = []; 
var getarrayBis1 = [];
var getarrayBis2 = [];

var contagemDeRodadas = 0;

var noRandom = false;

function iniciarTest(){





    var table = document.getElementById('tabelaa');
    
    for (var i = 1; i < table.rows.length; i++)
        {      
            getarray1.push(table.rows[i].cells[0].innerHTML);
            getarray2.push(table.rows[i].cells[1].innerHTML);                       
        }  
    if (contagemDeRodadas === 0){
        for (var i = 1; i < table.rows.length; i++)
        {      
            getarrayBis1.push(table.rows[i].cells[0].innerHTML);
            getarrayBis2.push(table.rows[i].cells[1].innerHTML);                       
        }  

    }    
    console.log("getarray xx1 = " + getarray1);
    console.log("getarray xx2 = " + getarray2);

    faseTest = true;

    arrayToInput();

}

function arrayToInput(){
    document.getElementById('inputa').value = getarray1[0];
    document.getElementById('inputb').value = "";
    deleteTable();
    console.log("getarrayBis1 no arrayToInput()" + getarrayBis1)
}

function deleteTable(){
    var  tamanhoTabela = tabelaa.rows.length;
    console.log("tamanhoTabela = " + tamanhoTabela);
    while (tamanhoTabela > 1) 
            {
                document.getElementById("tabelaa").deleteRow(1);
                tamanhoTabela = tamanhoTabela - 1; 
            }

   faseTestb = true;    
   x = 0;  // je remet le compteur x a zero pour initier la phase de test;     
   iniciarFaseTestOrdenado();     
}

function iniciarFaseTestOrdenado(){
    document.getElementById("inputb").focus(); 
    if(event.keyCode === 13){
        faseTestOrdenado();
    }    
}


function faseTestOrdenado(){
    console.log("getarray1.length = " + getarray1.length);
    if (faseTestb){
        console.log("fase test " + faseTestb);
        //document.getElementById('inputa').value=getarray1[x];
        if (document.getElementById('inputb').value ===  getarray2[x]){
            console.log("It looks ok... ");
        }  else {
            console.log("wrong... ");
            getarray11.push(getarray1[x]);
            getarray22.push(getarray2[x]);
            console.log("getarray11 = " + getarray11);
            console.log("getarray22 = " + getarray22);
        }
        if (x === (getarray1.length - 1)){
            console.log("OK Fim");
            document.getElementById('inputa').value="Fim";
            document.getElementById('inputb').value="Fim";
            document.getElementById("inputa").disabled = true;
            document.getElementById("inputb").disabled = true;
        } else {
            x = x + 1;
            document.getElementById('inputb').value="";
            document.getElementById('inputb').focus();  
            document.getElementById('inputa').value=getarray1[x]; 
        }            
    }    
}

function conferirErros(){
    getarray1 = [];
    getarray2 = [];  // deletando os arrays para eles podem ser reusados.
    var tabelaabody = document.getElementsByName('tabelaabody')[0];
    for (var i = 0; i < getarray11.length; i++)
    {  
       console.log("getarray1.length " + getarray11.length);   
       var portV = getarray11[i];
       var englV = getarray22[i];
       console.log("portV " + portV);
       console.log("portV " + englV);  
       
       // vamos inserir o array na tabela
       var newRow = tabelaabody.insertRow(i);
        
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
        
            cell1.innerHTML = portV;
            cell2.innerHTML = englV;

    }  

    document.getElementById("inputa").disabled = false;
    document.getElementById("inputb").disabled = false;
    x = 0;
    getarray11 = [];
    getarray22 = [];
    console.log("getarray11 = " + getarray11);
    contagemDeRodadas = contagemDeRodadas + 1;
}

function recomecarDoZero(){
var getarray1 = [];
var getarray2 = [];
var getarray11 = []; 
var getarray22 = []; 
    console.log("recomecarDoZero() getarray1 =  " + getarray1);
    console.log("recomecarDoZero() getarray11 =  " + getarray11);
    console.log("recomecarDoZero() getarray1 =  " + getarray2);
    console.log("recomecarDoZero() getarray11 =  " + getarray22);  
    console.log("recomecarDoZero() getarrayBis1.length = " + getarrayBis1.length);
    for (i = 0; i < getarrayBis1.length; i++){
        getarray1.push(getarrayBis1[i]);
        getarray2.push(getarrayBis2[i]);       
    } 
    console.log("getarrrrraybis = " + getarrayBis1);
    console.log("getarrrrraybis = " + getarray1);
    x = 0;
    var tabelaabody = document.getElementsByName('tabelaabody')[0];

    for(i = 0; i < getarrayBis1.length; i++){

        

        var portV = getarray1[i]
        var englV = getarray2[i]

        var newRow = tabelaabody.insertRow(i);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
    
        cell1.innerHTML = portV;
        cell2.innerHTML = englV;

}

}



/*-------------------------------------------------------------------------------*/

var arrayrandom1 = [];
var arrayrandom2 = [];
var cleanarray1 =[];
var cleanarray2 =[];
var areadeTransferencia1;
var areadeTransferencia2;

var arrayLimpo1 = "";
var arraylimpo2 = "";

var equalsto = false;

var shaped = 0;

var difTabArray;





function iniciarTestNoRandom(){


    var table = document.getElementById('tabelaa');
    
    for (var i = 1; i < table.rows.length; i++)
        {      
            getarray1.push(table.rows[i].cells[0].innerHTML);
            getarray2.push(table.rows[i].cells[1].innerHTML);                       
        }  
    for (g = 0; g < (getarray1.length*15); g++) {
        var chooseRow =  Math.floor(Math.random() * (getarray1.length));
                arrayrandom1.push(getarray1[chooseRow]); // new
                arrayrandom2.push(getarray2[chooseRow]);
    }    

    console.log(arrayrandom1);
    console.log(arrayrandom2);

   
   
   for (f = 0; f < arrayrandom1.length; f++)
            {
                var equalsto = false;
                areadeTransferencia1 = arrayrandom1[f];
                areadeTransferencia2 = arrayrandom2[f];
                
                console.log("cleanarray.length = " + cleanarray1.length); // ajouté
                
                for (e = 0; e < cleanarray1.length; e++)
                    {
                        if (areadeTransferencia1 == cleanarray1[e])
                            {
                                equalsto = true;
                                { break;}                        
                            }
                    }
                        if (equalsto == false) 
                            {
                                cleanarray1.push(areadeTransferencia1);
                                cleanarray2.push(areadeTransferencia2);
                                
                                arrayLimpo1 = arrayLimpo1 + cleanarray1[e];                              
                                arraylimpo2 = arraylimpo2 + cleanarray2[e];   
                                
                                console.log("cleanarray = " + cleanarray1);                              
                            }
            } 

            noRandom = true; // senão ele vai fazer um test ordenado
            
            
}

           
