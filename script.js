function rollDice() {
    const randomNumber = Math.ceil(Math.random() * 6);
    const diceImage = document.getElementById("diceImage");
    diceImage.src = `assets/dice-face-${randomNumber}.png`;
}