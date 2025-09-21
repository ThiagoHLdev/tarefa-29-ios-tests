describe('Carrinho de compras', () => {
    it('Deve adicionar produto ao carrinho', async () => {
        await $('~addToCart').click();
        await $('~carrinhoTab').click();
        await expect($('~produtoNoCarrinho')).toBeDisplayed();
    });
});
