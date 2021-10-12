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
var x =0;
function btnAddRow()
{
    if(event.keyCode === 13){
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
/*-----------------------------------------------------------------------------------*/
var getarray1 = [];
var getarray2 = [];
function iniciarTest(){
    var table = document.getElementById('tabelaa');
    
    for (var i = 1; i < table.rows.length; i++)
        {
      
            getarray1.push(table.rows[i].cells[0].innerHTML);
            getarray2.push(table.rows[i].cells[1].innerHTML);
            
        }  
    console.log("getarray xx1 = " + getarray1);
    console.log("getarray xx2 = " + getarray2);

    faseTest = true;

    arrayToInput();

}

function arrayToInput(){
    document.getElementById('inputa').value = getarray1[0];
    deleteTable();
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
   iniciarFaseTest(); 
    
}


function iniciarFaseTest(){
    
    if (faseTestb){
        console.log("fase test " + faseTestb);
    }    
    
}


