describe('Checkout', () => {
    it('Deve completar fluxo de checkout', async () => {
        await $('~checkoutButton').click();
        await $('~adicionarEndereco').click();
        await $('~confirmarEndereco').click();
        await $('~finalizarCompra').click();
        await expect($('~pedidoConfirmado')).toBeDisplayed();
    });
});
