# ToDo App

ToDoApp è un progetto realizzato per l'insegnamento di React Native tramite il libro React: Made Simple! [Disponibile su Amazon](https://www.amazon.it/s?k=React%3A+Made+Simple%21).

## Contenuto

Il seguente progetto contiene una semplice app mobile con funzioni quali l'aggiunta di note nel context, il cambio di stato, la navigazione tra le screen, e la gestione dei dati persistenti tramite l'utilizzo di SQLite.
L'app in sé rappresenta un semplice esercizio incompleto per catapultare la logica di React standard nel mondo delle applicazioni mobile.


## Istruzioni per l'esecuzione

Clona la repository scaricandola dal pulsante verde, o digita il comando seguente:

#### `git clone <link repository>`

Una volta effettuata la copia in locale, scarica le librerie tramite i comandi npm:

#### `npm install` o `npm update`

Avvia il progetto con il comando di start:

#### `npx react-native run-android` per android
#### `npx react-native run-ios` per ios


## Attenzione:

Per compilare l'app per Android, nel file situato nella cartella /android/ chiamato gradle.properties bisognerà specificare i dati utilizzati per la creazione della proprio chiave tramite lo strumento keytool, come indicato nel libro al paragrafo sulla pubblicazione di app per Google Play Store. 
