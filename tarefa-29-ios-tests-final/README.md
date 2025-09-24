
# Projeto iOS Tests

Projeto criado do zero para rodar testes em iOS com WebdriverIO, Appium e GitHub Actions.

## Estrutura do Projeto
- `app/` - Contém o app simulado (placeholder).
- `tests/` - Testes automatizados.
- `.github/workflows/` - Workflow do GitHub Actions.
- `wdio.conf.js` - Configuração do WebdriverIO.

## Como rodar localmente
```bash
npm install
npx wdio run wdio.conf.js
```

## Como rodar no GitHub Actions
- Secrets necessários:
  - `SAUCE_USERNAME`
  - `SAUCE_ACCESS_KEY`
