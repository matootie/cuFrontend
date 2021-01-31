# Glass of Milk

This is a web app to help users make healthy food with ingredients they already have.

## Website

[Go to the application] ()

In the project directory, run:

### How Its Healthy

This application helps users not only make healthy recipes, but keep a healthy bank account by utilizing the exact ingredients the user has. All recipes are vegan or vegetarian. 

#### How It Works

Users add items to their fridge, with the amount in grams. The contents of the fridge is queried against the recipe database. Whats returned is a list of recipes ordered by how much of the required ingredients the user has in their fridge. If the user has all of the ingredients to any recipe, the recipes will display at the top, highlighted in green. Recipes with a blue checkmark indicate that it is a verified healthy recipe.

##### Backend

The backend is composed of a strapi api and MeiliSearch running in a docker container in a kubernetes cluster.

[Backend Repo URL](https://github.com/nana-boateng/cuHackend)