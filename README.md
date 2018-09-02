# Maple #

## Localhost serveur
`npm i` obligatoire au départ. S'assurer d'avoir NodeJS sur la machine.<br> 
Lancer `ng serve` puis se connecter sur `http://localhost:4200/`.<br>
`ng serve --port 99990` pour se connecter sur un port différent.

## Commandes
Générer des modules et composants : <br>
`ng g component (c)`<br>
`ng g module (m)`<br>
`ng g m --routing (pour le routage)`<br>

## Build
`ng build --prod` pour builder dans /dist avant de mettre en prod

## Deploy sur firebase
A. `firebase login` : si nécessaire de se connecter.<br> 

B. `ng build --prod`<br>
C. `firebase init` avec le hosting et database, <br>

<ul><li>replace public par <b>dist/maple</b></li>
<li>configure as a single page : <b>YES</b> (Important : permet la redirection vers notfound)</li>
<li>Overwrite index.html : <b>NO</b> (On conserve l'index généré par angular)</li>
</ul>

D. `firebase deploy` <br>

#Kill port 4200

- netstat -a -o -n<br>
- Chercher le PID de 127.0.0.1:4200
- taskkill /F /PID *monPid*

