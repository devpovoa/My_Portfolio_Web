# 🚀 Portfólio Web - Apresentação

Este é um projeto de portfólio web criado para apresentação pessoal e profissional, desenvolvido utilizando **React**, **TypeScript**, **Vite**, **React Icons** e **Tailwind CSS**. O projeto também conta com serviços para envio de e-mails, como o **EmailJS**.

## 🛠 Tecnologias Utilizadas

- ⚛️ **React**: Biblioteca para construção da interface de usuário
- 🏷 **TypeScript**: Superset do JavaScript para tipagem estática
- ⚡ **Vite**: Ferramenta de build para projetos modernos em frontend
- 🎨 **React Icons**: Biblioteca de ícones para React
- 💅 **Tailwind CSS**: Framework CSS utilitário para estilização
- 📩 **EmailJS**: Serviço para envio de e-mails diretamente do frontend

## 📥 Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. 📂 Clone este repositório:

   ```bash
   git clone https://github.com/devpovoa/My_Portfolio_Web.git
   ```

2. 📁 Acesse a pasta do projeto:

   ```bash
   cd My_Portfolio_Web
   ```

3. 📦 Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. ▶️ Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

O projeto estará rodando em `http://localhost:5173/`.

## ✉️ Configuração do EmailJS

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. 🔧 Crie um novo **Email Service**
3. 🔑 Obtenha suas credenciais (Service ID, Template ID e Public Key)
4. 📝 Configure seu código no projeto para utilizar o serviço, por exemplo:

   ```tsx
   import emailjs from 'emailjs-com';

   const sendEmail = (e: React.FormEvent) => {
       e.preventDefault();
       emailjs.sendForm(
           'SEU_SERVICE_ID',
           'SEU_TEMPLATE_ID',
           e.currentTarget as HTMLFormElement,
           'SEU_PUBLIC_KEY'
       ).then(
           (result) => {
               console.log('✅ Email enviado com sucesso!', result.text);
           },
           (error) => {
               console.log('❌ Erro ao enviar email:', error.text);
           }
       );
   };
   ```

## 📂 Estrutura do Projeto

```
/
├── src/
│   ├── components/       # 🧩 Componentes reutilizáveis
│   ├── pages/            # 📄 Páginas principais do site
│   ├── services/         # ⚙️ Serviços como EmailJS
│   ├── assets/           # 🖼 Imagens e outros recursos
│   ├── App.tsx           # 🏠 Componente principal
│   ├── main.tsx          # 🚀 Ponto de entrada do React
│   ├── index.css         # 🎨 Estilos globais
├── public/               # 🌍 Arquivos públicos
├── package.json          # 📜 Dependências do projeto
├── vite.config.ts        # ⚡ Configuração do Vite
├── tailwind.config.js    # 🎨 Configuração do Tailwind CSS
└── tsconfig.json         # 📏 Configuração do TypeScript
```

## 🔮 Melhorias Futuras

- ✨ Adição de animações
- 🖥 Implementação de um back-end para maior controle de contatos
- 📈 SEO e otimização de desempenho

------

### 🏆 **Contribuições**

Contribuições são bem-vindas! 🎉 Caso queira adicionar soluções, novos desafios ou melhorias:

1. 🍴 Faça um fork do repositório.

2. 🌿 Crie uma nova branch:

   ```bash
   git checkout -b minha-contribuicao
   ```

3. 📝 Adicione suas contribuições e faça um commit:

   ```bash
   git commit -m "Descrição das alterações"
   ```

4. 📤 Envie as alterações para o seu fork:

   ```bash
   git push origin minha-contribuicao
   ```

5. 🔀 Abra um pull request neste repositório.

------

### 🖋️ **Licença**

Este repositório é destinado a fins educacionais e não possui qualquer relação oficial com o autor ou a editora do livro. O conteúdo aqui desenvolvido é baseado no aprendizado extraído do material, respeitando os direitos autorais.

Este projeto está sob a licença [MIT](LICENSE).
