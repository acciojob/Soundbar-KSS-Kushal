let sounds = []; // Array to hold all Audio objects

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
    let audio = new Audio(`sounds/${soundName}.mp3`);
    sounds.push(audio); // Add the Audio object to the sounds array
    audio.play();
}

function stopSounds() {
    // Loop through the sounds array and stop each sound
    for (let i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0; // This line sets the sound time back to 0
    }
}