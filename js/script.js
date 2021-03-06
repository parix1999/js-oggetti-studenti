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
/* PARTE 3:
    Dare la possibilità all’utente, attraverso 3 prompt() 
    - uno per ciascuna proprietà 
    - di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

// Creo un'altra variabile oggetto per fare l'aggiunta:
var newStudent = {
    newPerson : []
}

// ora c'è da fare un prompt con un minimo di interazione da parte dell'utente:
while (newStudent.newPerson.length < 1) {
    // input da parte dell'utente per dare i dati del nuovo studente:
    var newNome = prompt('Inserisci il nome dello studente da aggiungere');
    var newSurname = prompt('Inserisci il cognome del nuovo studente');
    var newAge = prompt('Inserisci in fine la sua età');

    // si pusha il malloppo lasciato dall'utente dentro alla array di oggetti, DANDOLI UN KEY:
    newStudent.newPerson.push({
        nome1 : newNome,
        cognome1 : newSurname,
        età1 : newAge
    });
    console.log(newStudent)
}






