
# Projeto iOS Tests - Corrigido

Este projeto contém uma configuração completa para rodar testes iOS com WebdriverIO e Appium.

## Passos locais
```bash
npm install
npx wdio run wdio.conf.js
```

## Passos no GitHub Actions
Secrets necessários:
- SAUCE_USERNAME
- SAUCE_ACCESS_KEY

Workflow configurado para instalar o Appium localmente antes de rodar os testes.
