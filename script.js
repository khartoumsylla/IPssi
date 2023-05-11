// Exercice 1 - Générateur de mot de passe
function generatePassword() {
  // Récupérer les options sélectionnées
  var length = parseInt(document.getElementById("length").value);
  var includeNumbers = document.getElementById("includeNumbers").checked;
  var includeUppercase = document.getElementById("includeUppercase").checked;
  var includeLowercase = document.getElementById("includeLowercase").checked;
  var includeSpecial = document.getElementById("includeSpecial").checked;

  // Définir les caractères possibles en fonction des options sélectionnées
  var chars = "";
  if (includeNumbers) chars += "0123456789";
  if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (includeSpecial) chars += "!@#$%^&*()_+";

  // Générer le mot de passe
  var password = "";
  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Afficher le mot de passe généré
  document.getElementById("password").value = password;
}

// Exercice 2 - Convertisseur de température
function convertirTemperature() {
    // Récupérer la valeur de l'input contenant la température
    var temperature = document.getElementById("temperature").value;
  
    // Récupérer la valeur de l'input contenant l'unité de la température
    var unite = document.getElementById("unite").value;
  
    // Convertir la température en fonction de l'unité sélectionnée
    if (unite === "celsius") {
      var fahrenheit = (temperature * 9 / 5) + 32;
      document.getElementById("resultat").innerHTML = temperature + " degrés Celsius = " + fahrenheit + " degrés Fahrenheit";
    } else if (unite === "fahrenheit") {
      var celsius = (temperature - 32) * 5 / 9;
      document.getElementById("resultat").innerHTML = temperature + " degrés Fahrenheit = " + celsius + " degrés Celsius";
    }
  }
  
// Exercice 3 - Générateur de citations
const quotes = [
	{
		quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
		author: "Gandhi"
	},
	{
		quote: "La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre comment danser sous la pluie.",
		author: "Sénèque"
	},
	{
		quote: "La folie, c'est de faire toujours la même chose et de s'attendre à un résultat différent.",
		author: "Albert Einstein"
	},
	{
		quote: "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.",
		author: "Dalai Lama"
	},
	{
		quote: "La simplicité est la sophistication suprême.",
		author: "Leonardo da Vinci"
	}
];

const generateBtn = document.getElementById("generate-btn");
const popup = document.getElementById("popup");
const quoteText = document.getElementById("quote");
const closeBtn = document.getElementById("close-btn");

function getRandomQuote() {
	const index = Math.floor(Math.random() * quotes.length);
	return quotes[index];
}

function showPopup() {
	popup.style.display = "block";
}

function hidePopup() {
	popup.style.display = "none";
}

function generateQuote() {
	const randomQuote = getRandomQuote();
	quoteText.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
	showPopup();
}

generateBtn.addEventListener("click", generateQuote);
closeBtn.addEventListener("click", hidePopup);

// Exercice 4 - Dark Mode
function toggleDarkMode() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}

// Exercice 5 - Menu burger
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("show");
});

