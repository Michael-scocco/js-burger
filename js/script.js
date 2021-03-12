// console.log('hello');
// sulla base di quanto visto a lezione,
// cercare di riprodurre il calcolo del prezzo del panino che parte da 10E,
// a cui vanno aggiunti i costi per gli ingredienti supplementari
// e va applicato un eventuale sconto in base al coupon.


var prezzoBase;//prezzo base panino ma solo dichiarato

var calcolatoreBtn = document.getElementById('calcolatore');

calcolatoreBtn.addEventListener('click', function() {//click è un parametro per la funzione del click di js
//e adesso il guardone(addEventListener) osserverà tutto ciò ke accade al button
    prezzoBase = 10; //prezzo base inizializzato



    // punto 1, vedere se qualcosa è stato selezionato/aggiunto
        //punto 1.1, per vedere se qualcosa è stato selezionato prendiamo tutti gli input
    var caselleSelezionate = document.getElementsByClassName('ingredienti');
    console.log(caselleSelezionate);

        //punto 1.2, prendere uno alla volta, e dire se è vero o falso.... per prenderne uno alla volta creo un ciclo FOR....
    for (var i = 0; i < caselleSelezionate.length; i++) {//questo ciclo FOR serve per verificare quale caselle sono state spuntate, ed i++, va ad incrementare il mio prezzo, corrispondente al DATA-PREZZO, e di conseguenza andrò a stampare il mio prezzo totale su HTML

        var caselleSelezionateSpunte = caselleSelezionate[i]; //creo la variabile per tirarmi via il [i], questo passaggio è fondamentale, perchè io non posso fare la proprietà .checkeda tutti gli elementi, ma solo a quel elemento ke va a cercare dentro di lui, ke è caselleSelezionateSpunte.
        var spuntata = caselleSelezionateSpunte.checked;      //creo la variabile senza portarmi dietro .checked
            console.log(caselleSelezionateSpunte, caselleSelezionateSpunte.checked);//.checked è un parametro js, che serve per verificare se è spuntato o meno la casella

        //punto 1.3, se un'ingrediente è selezionato, dobbiamo aggiungere il suo prezzo al prezzo prezzo base
        if(spuntata){ // se la variante "spuntata" viene cliccata, allora verrà sommata, insieme al prezzoBase, così da aumentarne il valore effettivo.
            prezzoBase += parseInt(caselleSelezionateSpunte.dataset.prezzo);// operazione di somma riguardante le caselle spuntate
        }
    }//for
    console.log(prezzoBase);

    //punto 2, andiamo a stampare in HTML il prezzo totale del panino. (che in HTML sono gli span con il simbolo E)
        //punto 2.1, quindi andiamo a creare in HTML, un id, e lo prendiamo con il getElementById.
        var prezzoStampatoInHtml = document.getElementById('prezzo-da-stampare');
        prezzoStampatoInHtml.innerHTML = prezzoBase;

    // punto 3, creare i coupon, per avere uno sconto del 20%.
        // punto 3.1, creare un array, con i codici di sconto.
        var coupons =['akMV201413', 'sfv060220', 'm280287ms']; //queste sono le stringe di copuon accettate dal mio sistema per avere lo sconto

        var trovatoSconto = false; //metodo booleano, mi creo una varibile sempre falsa per confrontarla dentro il mio for(cioè if), dove andrò a scrivere se è vera
        var burgerSconto = document.getElementById('burger-coupon').value//(.value, per tirarci fuori il contenuto testuale, ke lutente è andatoa digitare nell'area dedicata a lui)
        //dato ke abbiamo un array, andiamo a creare il nostro for, per creare una sequenza nel cercare le nostre stringe ammesse dal sistema ed inserite dall'utente.
        for (var i = 0; i < coupons.length; i++) {

            var coupon = coupons[i];//creo la variabile, per non portarmi dietro il quadrato i, e perchè lo uso come cercatore all'interno dell'array.

            //adesso cosa devo fare? devo andare a confrontare questa stringa (burgerSconto) con il (coupon). quindi, devo chiedere se il coupon e uguale a burgerSconto, quindi in quel caso devo segnare se ho trovato qualcosa di vero, perche al di fuori del for mi vado a creare una variabile falsa.
            if (burgerSconto == coupon) {

                trovatoSconto = true;
            }
        }
        // al di fuori del for, come ultima analisi vado a chiedere, se è stato trovato, (quindi se all'interno dell'array, ho trovato una stringa identica fornita dall'utente, vado a DECREMENTARE il mio prezzoBase, di quantità pari al 20%)
        if (trovatoSconto) {
            // punto 3.2, creare la formula sconto.
            prezzoBase -= prezzoBase / 100 * 20; // prezzoBase = prezzoBase - (prezzoBase / 100 * 20).
        }
        console.log(coupon, trovatoSconto, prezzoBase);

});//addEventListener

//punto 4, facciamo in modo, che quando vado nelle immagini, attivo il click anke su di loro, tutto questo deve andare fuori dallo stalker ke usavamo prima ma dobbiamo creare un altro grande occhio ke osserverà sempre se i li vengono cliccati.
    //punto 4.1 dove andiamo in HTML a prendere un eventuale tag, che ci fa fare l'evento click alle immagini?Sono gli li.
        // ps, cerchiamo un modo di non ripetere il codice sei volte, dato ke si sono sei caselleSelezione, quindi andiamo a leggere tutti i li.
    var listaImmagini = document.getElementsByTagName('tagName')('li');//sto prendendo tutti I TAG li, essendo una lista è come se fosse un array, quindi devo andarmi a prendere un iessimo elemento e lo faccio con il for.
    for (var i = 0; i < lis.length; i++)

        var listaImmagine = listaImmagini[i]; //quindi mi creo la mia varibile per cercare ogni singolo elemento all'interno

        listaImmagine.document.addEventListener('click', function() {// in questo modo se io vado a loggare con console.log('listaImmagine click'); mi farà vedere che se clicco qualunque parte della li mi crea un evento click;
            // ora in questo momento siamo in un li generico, per capire esattamte in quale li, siamo dobbiamo usare la parola magica (this) questa parola è davvero magica, è usata in tantissime forme, ma in questo caso la usiamo per far in modo ke mi rappresenta l'elemento all'interno della lista che l'utente mi ha cliccato, esempio se l'utente mi clicca su uovo, mi compare l'uovo
            //.children, è una ulteriore proprietà che ci permette di accedere agli elementi figli dell'elemento selezionato, se io adesso vado a cliccare nell'immagine in HTML, nel console.log(), mi farà vedere sia l'immagine ke l'input, perchè sono entrambi figli dell'elemento selezionato li, di conseguenza io voglio solo che mi prende il figlio input, allora a children gli vado a mettere [1], perchè img a valore 0, dato che dobbiamo ricordarci ke array, parte da zero, si anche questi due figli fanno parte di un array, quindi input è il secondo figlio caon valore indice 1
            var listaImmagineCliccata = this;// è elemento che l'utente a cliccato, es: se l'utente a cliccato su uova, allora il mio intero li è this
            var listaImmagineFigli = this.children;// scritto così sto prendendo tutti e due i figli di li;
            var listaImmagineFiglo = listaImmagineFigli[1];// in questo modo vado a prendere solo un figlio ed è il mio input, che è l'elemento in cui voglio lavorare

            // console.log(this, this.children);

            listaImmagineFiglo.checked = !listaImmagineFiglo.checked;// vuol dire: se clicco su listaImmagineFiglo.checked è uguale a dire l'incotrario di(con ! vuol dire incontrario di..., cioè ! trasforma il vero in un falso ed un falso in un vero)!listaImmagineFiglo.checked, quindi se era cliccata mi diventa non cliccata e viceversa, cioè tutto questo mi fa mettere e togliere la spunta

        });
    }







// la variante calcolatoreBtn sta a significare, che quando vado a cliccare il bottone, parte questa (funzione), calcolatoreBtn.addEventListener('click', function(){}), la quale racchiude tutto l'esecutivo svolto(lui è lo stalker),
//
// P.S., per richiamarmi il bottone da HTMl uso questa parola magica/keywords(le parole viola, in questo caso var), con il suo modulo(parole blu con le parentesi), var calcolatoreBtn = document.getElementById('calcolatore');.
//
// dopo di che, se voglio vedere in js, qualcosa che è stato selezionato dal cliente, in questo caso richiamo le classi dagli input(che opportunamente ho dato una classe uguale ad ogniuno), con questa parola magica e modulo:
// var caselleSelezionate = document.getElementsByClassName('ingredienti');, dove in HTML, ho dato come classe ingredienti agli input degli li(che sarebbero i quadratini).
// Adesso che le abbiamo selezionate, ci facciamo un ciclo "for" sopra, verifico attraverso la var spuntata = caselleSelezionateSpunte.checked; che il loro stato sia vero o falso, ciò è determinato , che se sono cliccate sono vere altrimenti false
// in HTML, abbiamo associato il prezzo ad data-price, e per vederlo in js, lo andiamo a scrivere così: parseInt(caselleSelezionateSpunte.dataset.prezzo), ci mettiamo in parseInt, perchè altrimenti non possiamo fare la somma, ma nascerebbe una concatenizzazione.
//
// Per stampare il prezzo a video, andiamo a creare un id, in HTML, dove ci interessa ke appaia il prezzo, e lo andiamo a catturare semplicemente con il getElementById.
//
// Adesso andiamo a creare le sessione dello sconto, che è un array e vediamo come si compone:
