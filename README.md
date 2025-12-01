# ☕ Coffee Blend Template - Cafeteria e E-commerce Moderno

Este é um template de website moderno e de alto desempenho, desenvolvido com **React** e **Styled Components**, focado em cafeterias que buscam combinar um design acolhedor com funcionalidades de e-commerce (carrinho/checkout). O projeto utiliza a biblioteca **Framer Motion** para animações fluidas e o conceito de **Glassmorphism** para uma estética elegante e minimalista.

## ✨ Destaques do Projeto

* **Design Moderno:** Estética Glassmorphism refinada e minimalista.
* **Performance:** Desenvolvido com React, otimizado para carregamento rápido (Vite).
* **E-commerce Leve:** Gerenciamento de estado de carrinho de compras usando **Context API** (não há integração com API de pagamento real).
* **UX Aprimorada:** Animações baseadas em *scroll* com **Framer Motion** e alto contraste para legibilidade.
* **Layout Responsivo:** Experiência perfeita em dispositivos móveis e desktops.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias principais:

* **Frontend:** React (usando Vite para *bundling* rápido)
* **Estilização:** Styled Components (para CSS-in-JS modularizado)
* **Animações:** Framer Motion
* **Roteamento:** React Router DOM
* **Gerenciamento de Estado:** React Context API (para o carrinho)
* **Ícones:** React Icons

---

## 🚀 Como Executar o Projeto

Siga estas instruções para configurar e executar o projeto localmente.

### Pré-requisitos

* Node.js (versão 14 ou superior)
* npm ou yarn

### 1. Clonar o Repositório

```bash
git clone [https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github](https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
cd cafeteria-template
```

### 2. Instalar as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Executar em Modo Desenvolvimento

O projeto será iniciado em modo de desenvolvimento e estará acessível em **http://localhost:5173** (ou porta similar, dependendo do Vite).

```bash
npm run dev
# ou
yarn dev
```

## 📂 Estrutura de Arquivos

A estrutura do projeto segue a convenção de separar componentes, ativos e estilos:

```
src/
├── assets/                  # Imagens e mídias estáticas (logo, hero, about)
├── components/
│   ├── AboutSection/        # Componente Nossa História
│   ├── Cart/                # Componente Sidebar do Carrinho (Modal)
│   ├── Header/              # Componente de Navegação Global
│   ├── HeroSection/         # Componente de Destaque Inicial
│   ├── ProductCard/         # Template para itens de menu e e-commerce
│   └── ...                  # Outros componentes de UI
├── context/
│   └── CartContext.jsx      # Context API para gerenciamento do carrinho
├── styles/
│   ├── GlobalStyles.js      # Reset CSS e estilos globais
│   └── Theme.js             # Definições de cores, fontes e espaçamentos (tema)
├── App.jsx                  # Componente raiz do aplicativo
└── main.jsx                 # Ponto de entrada do React
```

## 🤝 Contribuição e Licença

Este template é um projeto de código aberto. Sinta-se à vontade para enviar pull requests ou abrir issues para sugestões ou correções.
