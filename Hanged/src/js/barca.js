
function createAlphabet(alphabet, container){
    const btnContainer = document.getElementById(container);
    for (let letter of alphabet.split("")) {
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.setAttribute('data-letra', letter);
        btn.addEventListener('click', function (event) {
            const clickedLetter = event.target.textContent; // Valor de la letra en el botón
            // Llama a tu función de manejo de adivinanzas con la letra
            //handleGuess(clickedLetter);

        });
        btnContainer.appendChild(button);
        
    }
}

// Llama a la función para crear los botones del alfabeto
createAlphabet("QWERTYUIOP", "alphabet-1");
createAlphabet("ASDFGHJKL", "alphabet-2");
createAlphabet("ZXCVBNM", "alphabet-3");
