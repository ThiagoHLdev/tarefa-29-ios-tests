const assert = require('assert');

describe('App iOS EBACShop', () => {
  it('Deve abrir o aplicativo e validar título', async () => {
    const appTitle = await $('~EBACShop');
    assert.ok(await appTitle.isDisplayed(), 'Título não foi exibido');
  });
});
