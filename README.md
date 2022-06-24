
# Blog API

  Neste projeto foi desenvolvida uma API Rest e um banco de dados para a produção de conteúdo para um blog! 

  A aplicação foi criada em `Node.js` usando o pacote ORM `Sequelize` para fazer um `CRUD` _(Create, Read, Update, Delete)_ de posts, além disso foi utilizado o `JWT` para autenticação e autorização dos usuários.
 
## Desenvolvido com:
  
  - Node.js
  - Sequelize
  - JSON Web Token
  - API Rest
  - MySQL
  - MSC _(Model, Service, Controller)_
  - Middlewares
  - Joi
  - Express

## O que você verá?

  1. Endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto foi trabalhada a relação entre user e post; 

  3. Foi necessária a utilização de categorias para os posts, trabalhando, assim, a associoação entre tabelas de posts para categories e de categories para posts.
  
  4. As relações entre tabelas seguem o seguinte formato: 

![Entidades da API](https://github.com/FrancoViniciusP/blogs-api/blob/vinicius-pacheco/public/der.png)
