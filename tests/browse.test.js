describe('Busca de produtos', () => {
    it('Deve acessar área Browse e selecionar produto', async () => {
        await $('~browseTab').click();
        await $('~produto-1').click();
        await expect($('~detalhesProduto')).toBeDisplayed();
    });
});
