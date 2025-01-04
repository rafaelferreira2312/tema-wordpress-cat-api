<p align="center">
  <img src="screeenshot.png" alt="imagem do projeto" width="300">
</p>

# WordPress Cat API

Este é um tema WordPress personalizado, desenvolvido para integrar com a API [TheCatAPI](https://thecatapi.com). Ele permite que os usuários pesquisem e visualizem informações sobre raças de gatos, adicionem raças aos favoritos e gerenciem uma lista de favoritos. O projeto foi criado com foco em simplicidade, sem o uso de page builders ou frameworks adicionais.

## Estrutura de Pastas

A estrutura do tema está organizada da seguinte maneira:

```
cat-api-theme/
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       └── cat.jpg
├── inc/
│   └── functions.php
├── page-home.php
├── page-favorites.php
├── single-cat.php
└── style.css
└── README.md
```

### Descrição das Pastas e Arquivos

#### 1. **assets/**
- **css/style.css**: Arquivo destinado para estilos adicionais do tema, mas atualmente está vazio.
- **js/script.js**: Arquivo para scripts JavaScript customizados que serão usados no tema.

#### 2. **cat-api/style.css**
Arquivo principal de estilização do tema. Contém todos os estilos CSS aplicados às páginas e componentes.

#### 3. **functions.php**
Este arquivo contém as funções do tema, como:
- Registro dos estilos e scripts necessários.
- Configuração de menus personalizados.
- Integração com a API TheCatAPI.

#### 4. **index.php**
Template padrão do WordPress que exibe o conteúdo principal do site quando nenhum outro template é aplicável.

#### 5. **search-template.php**
Arquivo responsável por renderizar a página de pesquisa de raças de gatos:
- Realiza requisições à API TheCatAPI para buscar raças com base nos termos inseridos pelo usuário.
- Exibe as informações como nome, descrição e imagem da raça pesquisada.

#### 6. **favorites-template.php**
Arquivo responsável por renderizar a página de favoritos:
- Armazena e exibe as raças favoritas do usuário.
- Permite ao usuário adicionar ou remover raças da lista de favoritos.

#### 7. **header.php**
Cabeçalho do tema. Inclui o menu de navegação e a estrutura inicial do HTML.

#### 8. **footer.php**
Rodapé do tema. Inclui o fechamento das tags HTML e informações adicionais.

#### 9. **single.php**
Arquivo padrão para exibição de posts ou páginas individuais, caso necessário.

## Funcionalidades

### Integração com TheCatAPI
O tema utiliza a API [TheCatAPI](https://thecatapi.com) para buscar informações sobre raças de gatos. As principais funcionalidades incluem:
- Pesquisa de raças.
- Exibição de detalhes como nome, imagem e descrição da raça.
- Gerenciamento de uma lista de favoritos.

### Estilo Personalizado
Todo o estilo do site é controlado pelo arquivo `cat-api/style.css`, permitindo uma personalização centralizada e fácil manutenção.

### Scripts Dinâmicos
Scripts adicionais podem ser adicionados no arquivo `assets/js/script.js` para melhorar a interatividade e a experiência do usuário.

## Como Instalar

1. Faça o download do tema ou clone o repositório:
   ```bash
   git clone https://github.com/rafaelferreira2312/tema-wordpress-cat-api
   ```
2. Faça o upload da pasta do tema para o diretório `wp-content/themes/` do seu site WordPress.
3. Acesse o painel administrativo do WordPress.
4. Vá para **Aparência > Temas** e ative o tema "Cat API".

## Requisitos

- WordPress 5.0 ou superior.
- Chave de API válida do [TheCatAPI](https://thecatapi.com).

## Contribuição
Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Para isso, faça um fork do repositório, realize suas alterações e envie um pull request.
