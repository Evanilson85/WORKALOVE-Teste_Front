# APP Form students - Vaga Desenvolvedor Frontend Pleno

Este projeto é um formulário de cadastro de estudantes do ensino superior, desenvolvido com React.js. Ele permite coletar e validar informações dos estudantes e exibir os dados cadastrados em uma lista de cards.

🛠️ Tecnologias Utilizadas

React.js

Axios (para requisições HTTP)

Yup (para validação de formulários)

Formik (para gerenciamento de formulários)

Zustand (para gerenciamento global de estado)

Prettier (para formatação de código)

ESLint (para padronização de código)

Injeção de Dependência

Clean Architecture

MVVM (Model-View-ViewModel)

📋 Requisitos

O formulário coleta as seguintes informações obrigatórias:

Nome completo (mínimo 2 palavras, máximo 255 caracteres)

E-mail (validado conforme formato de e-mail)

Data de nascimento (mínimo 14 anos)

Instituição de ensino (máximo 255 caracteres)

Curso (selecionado a partir de uma API pública)

Cidade e Estado (selecionados a partir da API do IBGE)

Foto (arquivo JPG/PNG, máximo 1MB)

Redes Sociais

Tipo: Facebook ou LinkedIn

URL: link válido (mínimo 1, máximo 2 redes sociais)

Após o cadastro, os estudantes são exibidos em uma lista de cards lateral, atualizada dinamicamente a cada novo registro.

🚀 Como Executar o Projeto

1. Clone o repositório

git clone https://github.com/Evanilson85/WORKALOVE-Teste_Front.git
cd app

2. Instale as dependências

pnpm install

3. Execute o projeto

pnpm dev

O aplicativo estará disponível em http://localhost:5173.

🌎 APIs Utilizadas

Cursos: Dados Recife

Cidades e Estados: IBGE API

📦 Deploy

O projeto está hospedado na Vercel: [Link do Deploy](https://workalove-teste-front.vercel.app/)

🐳 Docker

Construir a imagem Docker

docker build -t app-form .

Rodar o container

docker run -p 3300:80 app-form

O aplicativo estará disponível em http://localhost:3300/.

📂 Estrutura do Projeto

app/
├─ public/
│ └─ vite.svg
├─ src/
│ ├─ domain/
│ │ ├─ entities/
│ │ ├─ repositories/
│ │ │ ├─ city.repository.ts
│ │ │ ├─ course.repository.ts
│ │ │ └─ state.repository.ts
│ │ └─ use-cases/
│ │ ├─ get-city.usecases.ts
│ │ ├─ get-courses.usecases.ts
│ │ └─ get-state.usecases.ts
│ ├─ infra/
│ │ ├─ http/
│ │ │ ├─ api/
│ │ │ │ └─ axios.ts
│ │ │ └─ repository/
│ │ │ ├─ mappers/
│ │ │ │ ├─ mappers.city.ts
│ │ │ │ ├─ mappers.course.ts
│ │ │ │ └─ mappers.state.ts
│ │ │ ├─ axios-city.repository.ts
│ │ │ ├─ axios-course.repository.ts
│ │ │ └─ axios-state.repository.ts
│ │ ├─ presentation/
│ │ │ ├─ components/
│ │ │ │ ├─ button/
│ │ │ │ │ ├─ button.style.ts
│ │ │ │ │ └─ button.tsx
│ │ │ │ ├─ form/
│ │ │ │ │ ├─ file.validation.tsx
│ │ │ │ │ ├─ input.validation.style.ts
│ │ │ │ │ ├─ input.validation.tsx
│ │ │ │ │ └─ select.validation.tsx
│ │ │ │ ├─ input/
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ input.file.tsx
│ │ │ │ │ ├─ input.root.tsx
│ │ │ │ │ ├─ input.select.tsx
│ │ │ │ │ ├─ input.style.ts
│ │ │ │ │ └─ input.text.tsx
│ │ │ │ └─ label/
│ │ │ │ ├─ label.style.ts
│ │ │ │ └─ label.tsx
│ │ │ ├─ page/
│ │ │ │ └─ home/
│ │ │ │ ├─ components/
│ │ │ │ │ ├─ cards/
│ │ │ │ │ │ ├─ card-container.tsx
│ │ │ │ │ │ ├─ card-photo.tsx
│ │ │ │ │ │ ├─ card-text.tsx
│ │ │ │ │ │ ├─ card.style.ts
│ │ │ │ │ │ └─ index.ts
│ │ │ │ ├─ home.page.tsx
│ │ │ │ ├─ home.style.ts
│ │ │ │ ├─ home.view.tsx
│ │ │ │ └─ schema.ts
│ │ └─ state/
│ │ └─ zustand/
│ │ └─ form.state.ts
│ ├─ main.tsx
│ └─ vite-env.d.ts
├─ .dockerignore
├─ .eslintignore
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ Dockerfile
├─ eslint.config.js
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tsconfig.json
└─ vite.config.ts
