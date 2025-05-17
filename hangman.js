const words = ["myoneandonlydee"];
let selectedWord = "",
	guessedLetters = [],
	wrongGuesses = 0;
const maxWrongGuesses = 6;
let guessCount = document.querySelector(".guess");
function startGame() {
	(selectedWord = words[Math.floor(Math.random() * words.length)]),
		(guessedLetters = []),
		(wrongGuesses = 0),
		(document.getElementById("message").textContent = ""),
		displayWord(),
		createLetterButtons();
}
function displayWord() {
	const e = selectedWord
		.split("")
		.map((e) => (guessedLetters.includes(e) ? e : "_"))
		.join(" ");
	(document.getElementById("word").textContent = e),
		e.includes("_") ||
			((document.getElementById("message").textContent =
				"Congratulations! You won!"),
			disableAllLetters());
}
function createLetterButtons() {
	const e = document.getElementById("letters");
	e.innerHTML = "";
	"abcdefghijklmnopqrstuvwxyz".split("").forEach((t) => {
		const s = document.createElement("div");
		(s.textContent = t),
			(s.className = "letter"),
			(s.onclick = () => guessLetter(t)),
			e.appendChild(s);
	});
}
function guessLetter(e) {
	guessedLetters.includes(e) ||
		(guessedLetters.push(e),
		selectedWord.includes(e)
			? displayWord()
			: (wrongGuesses++,
			  (guessCount.textContent = "" + (maxWrongGuesses - wrongGuesses)),
			  wrongGuesses >= maxWrongGuesses &&
					((document.getElementById(
						"message"
					).textContent = `Game Over! The word was: ${selectedWord}`),
					disableAllLetters())),
		updateLetterButtons());
}
function updateLetterButtons() {
	document.querySelectorAll(".letter").forEach((e) => {
		guessedLetters.includes(e.textContent) &&
			(e.classList.add("guessed"), (e.onclick = null));
	});
}
function disableAllLetters() {
	document.querySelectorAll(".letter").forEach((e) => {
		e.classList.add("guessed"), (e.onclick = null);
	});
}
(guessCount.textContent = maxWrongGuesses),
	document.addEventListener("DOMContentLoaded", startGame),
	document.getElementById("restart-btn").addEventListener("click", startGame);
