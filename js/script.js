/* PARTE 1:
Creare un oggetto che descriva uno studente, con le seguenti proprietà: 
nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte 
le proprietà dell’oggetto.
*/
var output1 = document.getElementById('result');
// Creo la variabile con gli oggetti (key e valore):
var studente = {
// key : valore,
    name : 'Edoardo',
    surname : 'Parisotto',
    age : '21',
}

// Ora mi serve un for in per stampare i vari oggetti contenuti nella var stundente.
for (var key in studente) {
    console.log(key, studente[key]);
    output1.innerHTML += '<li>' +  key + ' ' + studente[key] + '</li>';
}

/* PARTE 2:
Creare un array di oggetti di studenti. 
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
Ricordatevi, è un array, quindi? for.
*/
var output2 = document.getElementById('result2');
var output3 = document.getElementById('result3');

// Aggiunta della array per la parte 2 con all'interno gli studenti che andranno in stampa video:
var classe = {
studentsName : ['Gianni','Lillo','Lello'],
studentsSurname : ['Ciano','Vessato','Bangi']
}

// Ora si cicla su ogno studente all'interno della array:
for (var i = 0; i < classe.studentsName.length; i++) {
    // e si stampa l'indice ciclato all'interno dell'array per tirar fuori i nomi
    console.log(classe.studentsName[i])
    output2.innerHTML += '<li>' + classe.studentsName[i] + '</li>'; 
      
}

for (var x = 0; x < classe.studentsSurname.length; x++) {
    // e si stampa l'indice ciclato all'interno dell'array per tirar fuori i cognomi:
    console.log(classe.studentsSurname[x])
    output3.innerHTML += '<li>' + classe.studentsSurname[x] + '</li>';
    
}
