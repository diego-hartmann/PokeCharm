### Deployment
Available on [PokeCharm](https://poke-charm.vercel.app) website.

### Data to serve the frontend:
This web application is a [PokeAPI](https://pokeapi.co/) client. It displays the data for each Pokémon from this oficial API.

### Techs used to this project:
[Axios](https://axios-http.com/ptbr/docs/intro) for fetching to the GET PokeAPI endpoint. 

[ContextAPI](https://reactjs.org/docs/context.html) for handling states.

[Jest](https://jestjs.io/) for testing functions and components.

[Router](https://reactrouter.com/en/main) for swapping pages.

[TypeScript](https://www.typescriptlang.org/) for type safety.

[Yarn](https://yarnpkg.com/) for fast package managment.

Hooks Created
useFetch.ts


### Package Manager:


### Functional requirements:
[] The user should be able to see a main screen with a list of all Pokémons (with 
corresponding name and image for each of them).
[] In the main page: apply pagination in the list of Pokémons.
[] From the main page, while clicking a Pokémon, the user should be able to navigate to 
another page containing the details of that Pokémon.
[] In the Pokémon details page, the user should see at least 6 descriptions, the image and 
the name of one Pokémon.
[] In the Pokémon detail page, the user should be able to favorite the Pokémon.
[] From the main page, the user should be able to navigate to another page. This page 
should contain a list of the favorite Pokémons (with corresponding name and image for each 
of them).

### Technical requirements:
[] The application should be implemented in React.
[] To get the list of Pókemons and their details, use the PokéAPI: https://pokeapi.co/ (see 
documentation for more details).
[] Usage of the local storage to handle the list of favorite Pokémons.
[] Usage of any UI framework adapted to React (Examples: Bootstrap, Semantic UI).
[] The app should be responsive (adapt UI so it can be displayed in different screen sizes).
[] The code should contain comments.
[] The application code should be submitted in GitHub.
[] On the README file of GitHub, should be mentioned the following information: small 
description of the application, functional and technical requirements accomplished, 
technologies used, and the steps of installation.

### Plus:
[] Apply any UI for all the components.
[] Add any extra libraries / frameworks / dependencies.
[] Hooks, State Management, Router.
[] Unit tests in functions and components.