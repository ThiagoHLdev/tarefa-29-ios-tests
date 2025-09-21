# Tarefa 29 - Testes de Aplicações iOS

Este projeto contém uma suíte de testes automatizados para o aplicativo LojaEBAC (iOS).

## Objetivo
Automatizar o fluxo completo de compra no app:
1. Login
2. Acessar área Browse (Busca)
3. Selecionar um produto
4. Adicionar ao carrinho
5. Adicionar endereço (se não existir)
6. Ir para o pagamento
7. Finalizar checkout

## Estrutura do Projeto
```
tarefa-29-ios-tests
│
├── app
│   ├── LojaEBAC-sim.app       # Para rodar em simuladores iOS
│   └── LojaEBAC.ipa           # Para rodar em devices reais ou Sauce Labs
│
├── tests
│   ├── login.test.js
│   ├── browse.test.js
│   ├── carrinho.test.js
│   └── checkout.test.js
│
├── wdio.conf.js
├── package.json
└── README.md
```

## Pré-requisitos
- Node.js instalado ([Download Node.js](https://nodejs.org/))
- Appium instalado globalmente:
```bash
npm install -g appium
```
- WebdriverIO configurado no projeto

## Como instalar as dependências
```bash
npm install
```

## Como rodar os testes
Com o simulador rodando:
```bash
npx wdio
```

## Executando no Sauce Labs
Configure suas credenciais no `wdio.conf.js` e utilize o arquivo `LojaEBAC.ipa`.
