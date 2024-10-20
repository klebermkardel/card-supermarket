function updateQuantity(button, amount) {
    // Encontrar o input relacionado ao botão clicado
    const input = button.parentNode.querySelector('.quantity');
    let currentValue = parseInt(input.value);
    let newValue = currentValue + amount;

    // Assegurar que o valor não seja menor que 1
    if (newValue < 1) {
        newValue = 1;
    }

    input.value = newValue;
}
