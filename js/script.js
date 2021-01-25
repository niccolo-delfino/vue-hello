// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt
// dell'attributo.
// Poi aggiungete all'immagine una classe sempre presa dal data.

var app = new Vue({
  el: `#root`,
  data: {
    titolo : 'PLS send help',
    messaggio : 'Ieri sera è uscito il trailer di Godzilla VS Kong e lo avrò già visto 30 volte...',
    submessaggio: 'no, seriamente, aiuto...',
    src: 'https://images.everyeye.it/img-articoli/il-trailer-godzilla-vs-kong-scontro-avvicina-speciale-v11-51721-1280x16.jpg',
    film: 'godzilla vs kong'
  }
})
