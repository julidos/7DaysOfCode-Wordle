document.addEventListener('DOMContentLoaded', () => {
    fetch('palavras.json')
        .then(response => response.json())
        .then(data => {
            const palavras = data.palavras;
            const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
            console.log(palavraAleatoria);
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        })
});