# Tarefa 29 – iOS Tests

Este repositório contém a configuração limpa para rodar os testes iOS com WebdriverIO e Appium no GitHub Actions.

## 🚀 Estrutura
- `wdio.conf.js` → Configuração do WebdriverIO apontando para Appium local.
- `tests/` → Testes automatizados de exemplo.
- `.github/workflows/ci.yml` → Pipeline do GitHub Actions.

## ▶️ Executando
1. Certifique-se de ter o Appium instalado localmente para rodar em sua máquina.
2. Execute os testes localmente:
   ```bash
   npx wdio
   ```
3. Ao dar push na branch `ci`, o workflow do GitHub Actions rodará automaticamente.

---
> Autor: Thiago Henrique Leite
