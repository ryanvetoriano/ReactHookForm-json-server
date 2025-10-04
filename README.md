# Autenticação com React Hook Form e json-server

## 🎯 Objetivo do Projeto

O projeto tem como objetivo gerenciar o acesso de usuários a um sistema, permitindo que novos usuários se cadastrem, façam login e visualizem informações básicas após a autenticação. Ele é construído com **React**, **TypeScript**, **React Hook Form**, **React Router** e estilizado com **TailwindCSS**, seguindo um padrão moderno e minimalista.

---

### **Funcionalidades**

1. **Login**
    - Os usuários podem acessar o sistema informando seu **nome de usuário** e **email**.
    - O sistema valida os dados através de um **JSON Server**.
    - Mensagens de erro são exibidas em caso de usuário não cadastrado ou dados inválidos.
    - Após login bem-sucedido, o usuário é redirecionado para a página **Home** e seus dados são salvos no `localStorage`.

2. **Cadastro**
    - Permite que novos usuários criem uma conta informando **nome**, **nome de usuário** e **email**.
    - Valida se o usuário ou email já está cadastrado.
    - Ao concluir o cadastro, o usuário é redirecionado para a página de login.

3. **Home**
    - Exibe uma mensagem de boas-vindas ao usuário logado, mostrando seu **nome** e **email**.
    - Possui um botão de **sair**, que remove os dados do `localStorage` e retorna à página de login.
    - Caso nenhum usuário esteja logado, exibe uma mensagem informando que o acesso não foi autenticado.

---

## 💻 Tecnologias Utilizadas

- **React + Vite** ⚛️
- **TypeScript**
- **TailwindCSS** 🎨
- **React Router DOM**
- **JSON Server**

---

## 👥 Integrantes

- Ryan Vetoriano – RM 565667 | Turma: 1TDSPF
- Raul Rezende – RM 564002 | Turma: 1TDSPF
- Pietro Donella – RM 561722 | Turma: 1TDSPF
