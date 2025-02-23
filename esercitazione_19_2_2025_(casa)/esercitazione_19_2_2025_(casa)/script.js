// Variabile globale per tenere traccia dell'audio attualmente in riproduzione
let audioCorrente = null;

// Creazione degli oggetti che contengono i dettagli di ogni canzone
let canzone1 = {
    Titolo: "Non so chi ha creato il mondo",  // Titolo della canzone
    Immagine_disco: "immagini/il_filo_rosso.png",  // Percorso dell'immagine dell'album
    Informazioni: "non ho info );",  // Informazioni sulla canzone
    Audio: "audio_canzoni/Non so chi ha creato il mondo.mp3",  // Percorso del file audio
    Link: "https://www.youtube.com/embed/rHfsup-SE6M?list=PLSBWvYm8t6ubClLnnCAdNG4meMnIScQD_"  // URL del video YouTube
};

let canzone2 = {
    Titolo: "Il filo rosso",
    Immagine_disco: "immagini/non_so_chi.png",
    Informazioni: "non ho info neanche su lui );",
    Audio: "audio_canzoni/ALFA - il filo rosso.mp3",
    Link: "https://www.youtube.com/embed/jYcaxxbiwUo"
};

let canzone3 = {
    Titolo: "Vabbè ciao",
    Immagine_disco: "immagini/vabbe_ciao.png",
    Informazioni: "su lui forse -:",
    Audio: "audio_canzoni/ALFA - Vabbè ciao (Official Video).mp3",
    Link: "https://www.youtube.com/embed/9SVK9ND1t58"
};

// Imposta il titolo delle canzoni nelle rispettive sezioni HTML
document.getElementById("canzone1").innerText = canzone1.Titolo;
document.getElementById("canzone2").innerText = canzone2.Titolo;
document.getElementById("canzone3").innerText = canzone3.Titolo;

// Imposta le immagini delle canzoni
document.getElementById("immagine1").src = canzone1.Immagine_disco;
document.getElementById("immagine2").src = canzone2.Immagine_disco;
document.getElementById("immagine3").src = canzone3.Immagine_disco;

// Aggiunge un event listener al pulsante "Info" della prima canzone
document.getElementById("info1").addEventListener("click", function() {
    let infoDiv = document.getElementById("informazioni1");
    // Se il div delle informazioni è nascosto o vuoto, lo riempiamo e lo mostriamo
    if (infoDiv.style.display === "none" || infoDiv.innerText === "") {
        infoDiv.innerText = canzone1.Informazioni;
        infoDiv.style.display = "block";
    } else {
        // Altrimenti lo nascondiamo
        infoDiv.innerText = "";
        infoDiv.style.display = "none";
    }
});

// Aggiunge un event listener al pulsante "Info" della seconda canzone
document.getElementById("info2").addEventListener("click", function() {
    let infoDiv = document.getElementById("informazioni2");
    if (infoDiv.style.display === "none" || infoDiv.innerText === "") {
        infoDiv.innerText = canzone2.Informazioni;
        infoDiv.style.display = "block";
    } else {
        infoDiv.innerText = "";
        infoDiv.style.display = "none";
    }
});

// Aggiunge un event listener al pulsante "Info" della terza canzone
document.getElementById("info3").addEventListener("click", function() {
    let infoDiv = document.getElementById("informazioni3");
    if (infoDiv.style.display === "none" || infoDiv.innerText === "") {
        infoDiv.innerText = canzone3.Informazioni;
        infoDiv.style.display = "block";
    } else {
        infoDiv.innerText = "";
        infoDiv.style.display = "none";
    }
});

// Funzione per fermare l'audio corrente prima di avviare una nuova riproduzione
function stopAudio() {
    if (audioCorrente !== null) {
        audioCorrente.pause();  // Ferma l'audio
        audioCorrente.currentTime = 0;  // Riporta l'audio all'inizio
    }
}

// Aggiunge un event listener al pulsante "Play" della prima canzone
document.getElementById("play1").addEventListener("click", function() {
    stopAudio();  // Ferma qualsiasi audio in riproduzione
    audioCorrente = new Audio(canzone1.Audio);  // Carica il file audio
    audioCorrente.play();  // Riproduce il file audio
});

// Aggiunge un event listener al pulsante "Play" della seconda canzone
document.getElementById("play2").addEventListener("click", function() {
    stopAudio();
    audioCorrente = new Audio(canzone2.Audio);
    audioCorrente.play();
});

// Aggiunge un event listener al pulsante "Play" della terza canzone
document.getElementById("play3").addEventListener("click", function() {
    stopAudio();
    audioCorrente = new Audio(canzone3.Audio);
    audioCorrente.play();
});

// Imposta il link dei video YouTube all'interno degli iframe
document.getElementById("video1").src = canzone1.Link;
document.getElementById("video2").src = canzone2.Link;
document.getElementById("video3").src = canzone3.Link;
