/* 🏆 Snack 1
Ottieni il titolo di un post con una Promise. */

function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/post/${id}`)
            .then(response => response.json())
            .then(data => resolve(data.title))
            .catch(reject)

    })

    return promessa
}

getPostTitle(1)
    .then(obj => console.log(obj))
    .catch(error => console.error(error))

getPostTitle(2)
    .then(obj => console.log(obj))
    .catch(error => console.error(error))

getPostTitle(3)
    .then(obj => console.log(obj))
    .catch(error => console.error(error))





const risultato = async (id) => {

    const response = await fetch(`https://dummyjson.com/post/${id}`)
    
    const data = await response.json()

    console.log(data)

    const response2 = await fetch(`https://dummyjson.com/user/${id}`)

    const user = await response2.json()
    // console.log(data2)

    const newObject = { ...data, user }

    return newObject

}



risultato(1)
    .then(obj => console.log(obj))
    .catch(error => console.error(error))


/* Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */


//🏆 Snack 2
//Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
    const risultato = new Promise((resolve, reject) => {
        console.log("Sto lanciando il dado...")
        setTimeout(() => {
            if(Math.random() < 0.2){
                reject("Ti sei incastrato! Riprova")
            }else {
                const valore = Math.floor(Math.random() * 6) +1;
                resolve(valore)
            }
        }, 3000)
    })
    
    return risultato
    
}

lanciaDado()
.then(risultato  => console.log("il risultato è :", risultato))
.catch(err => console.error(err))

//🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
//Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".