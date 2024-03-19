let sounds; // Array to hold all Audio objects
const audioHTML = document.getElementById('myaudio');

const btnList = document.querySelectorAll('.btn');
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', function() {
        if(btnList[i].classList.contains('stop')) {
            stopSounds();
        } else {
            playSound(i);
        }
    });
}

function playSound(i){
    let soundName = btnList[i].textContent;
    audioHTML.setAttribute("src",`sounds/${soundName}.mp3`);
    sounds = audioHTML // Add the Audio object to the sounds array
    audioHTML.play();
}

function stopSounds() {
    // Loop through the sounds array and stop each sound
    for (let i = 0; i < sounds.length; i++) {
        sounds.pause();
        sounds.currentTime = 0; // This line sets the sound time back to 0
    }
}