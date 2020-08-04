const fs = require('fs');
const playSound = require('play-sound')((opts = {}));

function playDiceSound() {
  const soundsPath = `${__dirname}/sounds/`;

  const diceSounds = fs.readdirSync(soundsPath);

  const sound =
    soundsPath + diceSounds[Math.floor(Math.random() * diceSounds.length)];

  playSound.play(sound, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = playDiceSound;
