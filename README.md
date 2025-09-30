# Tarefa 29 – iOS Tests CI

Este repositório contém o workflow configurado para rodar os testes iOS no **GitHub Actions**.

## 🚀 Como funciona

- O workflow é disparado ao dar push na branch `ci`.
- Ele sobe um serviço **Appium** como container dentro do job.
- Aguarda o Appium iniciar e então executa os testes com **WebdriverIO** no **Sauce Labs**.

## ▶️ Executando
1. Configure no repositório os **Secrets**:
   - `SAUCE_USERNAME`
   - `SAUCE_ACCESS_KEY`
2. Suba o código para a branch `ci`:
   ```bash
   git push origin ci
   ```
3. O GitHub Actions irá iniciar os testes automaticamente.

---
> Autor: Thiago Henrique Leite
