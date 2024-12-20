# [portfolio](https://bastiencornier.com/)

Personal folio made with Hugo, barba.js, anime.js 

## Installation

- docker-compose up
- Hugo server is already running on localhost:1313
- docker compose exec hugo /bin/bash
- cd themes/portfolio
- npm i


## Start

- npm start

If error with gulp like :
```
ReferenceError: primordials is not defined
    at fs.js:40:5
    at req_ (/src/themes/portfolio/node_modules/natives/index.js:143:24)
``` 
You need to run : 
```
npm run preinstall
the re-run : npm i
```

## Ajouter du contenu

### Ajouter une page 

    $ hugo new new-page.md

### Ajouter un article

    $ hugo new articles/new-article.md

## Déploiement

    $ hugo

Génère les fichiers statiques dans public/.


## Aide

    $ hugo help

## La documentation d'Hugo

 https://github.com/gohugoio/hugoDocs. 

# ENVS

## PROD




