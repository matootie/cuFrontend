# Glass of Milk

This is a web app to help users make healthy food with ingredients they already have.

## Running Application

npm install

npm start

Go to http://localhost:3000

In the project directory, run:

## Video Demo

https://drive.google.com/file/d/1LKomkXRh_qVhRDm4J584wC8S1GnFK80u/view?usp=sharing

### How Its Healthy

This application helps users not only make healthy recipes, but keep a healthy bank account by utilizing the exact ingredients the user has. All recipes are vegan or vegetarian. 

#### How It Works

Users add items to their fridge, with the amount in grams. The contents of the fridge is queried against the recipe database. Whats returned is a list of recipes ordered by how much of the required ingredients the user has in their fridge. If the user has all of the ingredients to any recipe, the recipes will display at the top, highlighted in green. Recipes with a blue checkmark indicate that it is a verified healthy recipe.

##### Backend

The backend is composed of a strapi api and MeiliSearch running in a docker container in a kubernetes cluster.

https://github.com/nana-boateng/cuHackend
