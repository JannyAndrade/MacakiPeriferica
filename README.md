<h1 align="center">
    <br>
    <p align="center">MaKazi Periférica<p>
</h1.>

<div align="center">
<img src="https://user-images.githubusercontent.com/97898121/208215363-0e116c95-faea-429f-b60e-2640158690df.jpg" width="200px" />
</div>


<p align="justify"> Bem vindas(os), ao meu projeto! Sinta-se a vontade para explorar.
            Ele é minha conclusão do curso "Todas em Tech" da {reprograma}. 

    
    
 # 💁🏾‍♀️JUSTIFICATIVA:
    
 <p align="justify"> 
 Eu tenho uma paixão , ela se chama ler e foi daí que meu projeto surgiu . O que eu leio não vem da periferia, sabe por que ? 
 <p align="justify">    
Um autor geralmente investe em uma tiragem mínima de 100 exemplares, algo por volta de R $6.500 para um livro simples, com 100 páginas.
<p align="justify">     
Periféricos não tem esse valor para curtir uma ideia . Então surgiu a MaKazi Periférica . Makazi significa ABRIGO em suaíli, língua africana . 
<p align="justify">    
A periferia precisa de um abrigo onde sua voz e suas ideias serão ouvidas e viraram inspiração .
    
 ## 🔎 SOBRE A API:    
    O projeto Makazi periférica é voltado para cadastros de livros escritos por moradores da periferia e dos guetos.
    Visando servir como um abrigo para suas artes , além de atingir apreciadores da leitura e da arte como um todo . 

 - **Autores**: um espaço de cadastro dos seus trabalhos com seus contatos 
 - **Usuário**: Disponibilidade de acesso e contato para adquirir as obras

  
    
    ###=📳 FUNCIONALIDADES:
    
📚Listar todos os LIVROS;                                        
✍🏾Listar todos os AUTORES da API;          
💻Cadastro, atualização e exclusão de LIVROS;                                             
💻Cadastro, atualização e exclusão de AUTORES;



## 📌 MÉTODOS:
<p align="justify">
Desenvolvida utilizando JavaScript e Node.js, a API conta com dois CRUDs completos que respeitam princípios de SOLID e Clean Code. Utilizando a conexão com bando de dados MongoDB e as rotas foram testadas no **insomnia**.

## 📂 ARQUITETURA MVC
```
 📁Makazi Periferica
   |
   |-  📁 assets
   |-  📁 src
   |    |
        |- 📂config
          |-📑  database.js
   |    |- 📁 controllers
   |         |- 📑 authControllers.js
   |         |- 📑 escritoresControllers.js
             |- 📑 livroControllers.js
             |- 📑 userControllers.js
   |    |-📂  middlewares
             |- 📑 alth.js
   |    |- 📁 models
   |         |- 📑EscritoresSchema.js
   |         |- 📑LivrosSchema.js
             |- 📑UserSchema.js
   |
   |    |- 📁 routes
   |         |- 📑authRoutes.js 
   |         |- 📑makaziRoutes.js
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.me
   |- 📑 server.js
     
```

    
    
    
    
    
    
