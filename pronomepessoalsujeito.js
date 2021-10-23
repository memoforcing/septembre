function transferirListaCompleta(){
    var table1 = document.getElementById("tabelaabody"),
        table2 = document.getElementById("tabelabbody");
       
        console.log("table1.length = " + table1.rows.length);
         
        for (var i = 0; i < table1.rows.length; i++)
            {             
                        
                        
                       var newRow = table2.insertRow(table2.rows.length), /// rows
                            cell1 = newRow.insertCell(0),
                            cell2 = newRow.insertCell(1);
                            
                            
                
                       cell1.innerHTML = table1.rows[i].cells[0].innerHTML;
                       
                       cell2.innerHTML = table1.rows[i].cells[1].innerHTML;
                       
            }           
}
var tamanhoTabela = tabelaa.rows.length;
var r = 0;
function deletarTabelaPrincipal(){
    while (tamanhoTabela > 1) 
            {
                document.getElementById("tabelaa").deleteRow(1);
                tamanhoTabela = tamanhoTabela - 1; 
            }
}
