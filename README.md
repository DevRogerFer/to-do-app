# ✅ To-Do App | Rogério Fernandes

![Status](https://img.shields.io/badge/status-ativo-22c55e?style=for-the-badge)
![Deploy](https://img.shields.io/badge/deploy-vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-1a1a2e?style=for-the-badge&logo=vite&logoColor=646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0f172a?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![React Query](https://img.shields.io/badge/React_Query-1a1a2e?style=for-the-badge&logo=reactquery&logoColor=FF4154)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-1a1a2e?style=for-the-badge&logo=reacthookform&logoColor=EC5990)
![Axios](https://img.shields.io/badge/Axios-1a1a2e?style=for-the-badge&logo=axios&logoColor=5A29E4)

---

## 📖 Sobre o Projeto

Aplicação de gerenciamento de tarefas (To-Do) desenvolvida com React, Vite e Tailwind CSS. Permite criar, visualizar, editar e excluir tarefas com diferentes status — _not started_, _in progress_ e _done_ —, além de exibir um dashboard com resumo geral das atividades.

O projeto foi construído com foco em boas práticas de desenvolvimento front-end, separação de responsabilidades e gerenciamento de estado do servidor via React Query.

---

## ✨ Funcionalidades

- 📋 Listagem de tarefas com filtro por status
- ➕ Adição de novas tarefas com validação de formulário
- ✏️ Edição e atualização de tarefas existentes
- 🗑️ Exclusão de tarefas
- 📊 Dashboard com resumo de tarefas por status
- 🔍 Visualização detalhada de cada tarefa
- 🔔 Notificações toast com feedback de ações
- 🎨 Interface responsiva e estilizada com Tailwind CSS

---

## 🚀 Stack

| Tecnologia                                             | Descrição                                   |
| ------------------------------------------------------ | ------------------------------------------- |
| [React 18](https://react.dev/)                         | Biblioteca para construção de interfaces    |
| [Vite](https://vitejs.dev/)                            | Build tool e servidor de desenvolvimento    |
| [Tailwind CSS](https://tailwindcss.com/)               | Estilização utilitária                      |
| [TanStack React Query](https://tanstack.com/query)     | Gerenciamento de estado do servidor e cache |
| [React Router DOM](https://reactrouter.com/)           | Roteamento client-side                      |
| [React Hook Form](https://react-hook-form.com/)        | Gerenciamento de formulários                |
| [Axios](https://axios-http.com/)                       | Cliente HTTP                                |
| [json-server](https://github.com/typicode/json-server) | API REST fake para desenvolvimento          |
| [Sonner](https://sonner.emilkowal.ski/)                | Notificações toast                          |
| [Husky](https://typicode.github.io/husky/)             | Git hooks para qualidade de código          |

---

## 🗂️ Estrutura do Projeto

```
src/
├── assets/         # Fontes e ícones
├── components/     # Componentes reutilizáveis
├── hooks/
│   └── data/       # Hooks de dados (React Query)
├── keys/           # Chaves de queries e mutations
├── lib/            # Configuração do Axios
└── pages/          # Páginas da aplicação
```

---

## ⚙️ Rodando Localmente

**Pré-requisitos:** Node.js 18+

```bash
# Clone o repositório
git clone https://github.com/DevRogerFer/to-do-app.git

# Acesse a pasta do projeto
cd to-do-app

# Instale as dependências
npm install

# Inicie a API fake (json-server)
npm run server

# Em outro terminal, inicie o servidor de desenvolvimento
npm run dev
```

---

## 🌐 Produção

A versão de produção está disponível na Vercel:

🔗 **[to-do-app-devrogerfer.vercel.app](https://to-do-app-devrogerfer.vercel.app)**

---

## 👨‍💻 Autor

Rogério Fernandes Siqueira

- LinkedIn: https://www.linkedin.com/in/devrogerfer
- GitHub: https://github.com/DevRogerFer

---

Se este projeto te ajudou, deixe uma estrela no repositório. ⭐
