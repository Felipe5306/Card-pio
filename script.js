document.addEventListener('DOMContentLoaded', () => {
    // Se desejar continuar criando os botões "Adicionar ao Carrinho" nas product-card, 
    // mas sem salvar os itens, você pode apenas exibir um alerta.
    document.querySelectorAll('.product-card').forEach(card => {
        if (!card.querySelector('.buy-btn')) {
            const name = card.querySelector('h3').textContent;
            const priceText = card.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('R$ ', '').replace(',', '.'));
            const button = document.createElement('button');
            button.textContent = 'Comprar';
            button.className = 'buy-btn';
            button.onclick = () => alert(`${name} adicionado!`);
            card.appendChild(button);
        }
    });
});