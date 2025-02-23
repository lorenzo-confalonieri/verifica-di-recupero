let audioCorrente = null;

let canzone1 = {
    Titolo: "Non so chi ha creato il mondo",
    Immagine_disco: "immagini/il_filo_rosso.png",
    Informazioni: "non ho info );",
    Audio: "audio_canzoni/Non so chi ha creato il mondo.mp3",
    Link: "https://www.youtube.com/embed/rHfsup-SE6M?list=PLSBWvYm8t6ubClLnnCAdNG4meMnIScQD_"
};

let canzone2 = {
    Titolo: "Il filo rosso",
    Immagine_disco: "immagini/non_so_chi.png",
    Informazioni: "non ho info nenche su lui );",
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

document.getElementById("canzone1").innerText = canzone1.Titolo;
document.getElementById("canzone2").innerText = canzone2.Titolo;
document.getElementById("canzone3").innerText = canzone3.Titolo;

document.getElementById("immagine1").src = canzone1.Immagine_disco;
document.getElementById("immagine2").src = canzone2.Immagine_disco;
document.getElementById("immagine3").src = canzone3.Immagine_disco;

document.getElementById("info1").addEventListener("click", function() {
    let infoDiv = document.getElementById("informazioni1");
    if (infoDiv.style.display === "none" || infoDiv.innerText === "") {
        infoDiv.innerText = canzone1.Informazioni;
        infoDiv.style.display = "block";
    } else {
        infoDiv.innerText = "";
        infoDiv.style.display = "none";
    }
});

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

function stopAudio() {
    if (audioCorrente !== null) {
        audioCorrente.pause();
        audioCorrente.currentTime = 0;
    }
}

document.getElementById("play1").addEventListener("click", function() {
    stopAudio();
    audioCorrente = new Audio(canzone1.Audio);
    audioCorrente.play();

});

document.getElementById("play2").addEventListener("click", function() {
    stopAudio();
    audioCorrente = new Audio(canzone2.Audio);
    audioCorrente.play();

});

document.getElementById("play3").addEventListener("click", function() {
    stopAudio();
    audioCorrente = new Audio(canzone3.Audio);
    audioCorrente.play();

});




document.getElementById("video1").src = canzone1.Link;  // Set the YouTube video for song 1
document.getElementById("video2").src = canzone2.Link;  // Set the YouTube video for song 2
document.getElementById("video3").src = canzone3.Link;  // Set the YouTube video for song 3