describe('Login no aplicativo', () => {
    it('Deve realizar login com sucesso', async () => {
        await $('~username').setValue('usuario_teste');
        await $('~password').setValue('senha_teste');
        await $('~loginButton').click();
        await expect($('~homeScreen')).toBeDisplayed();
    });
});
