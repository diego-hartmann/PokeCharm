## Description
Search for your favorite Pokémon on [PokeCharm](https://poke-charm.vercel.app)! This is a web application that shows Pokémons and their information, such as names, images and descriptions.

## Deployment
[PokeCharm](https://poke-charm.vercel.app) is available on https://poke-charm.vercel.app.

## Data origin:
This web application is a [PokeAPI](https://pokeapi.co/) client. It displays the data for each Pokémon from their oficial API.

## Techs used to this project and steps of their installations:
1. [Yarn](https://yarnpkg.com/): First, it was decided to use Yarn for fast package managment,

2. [TypeScript](https://www.typescriptlang.org/): then, the project was initialized with TypeScript for type safety. 

3. [ContextAPI](https://reactjs.org/docs/context.html): useContext hook was choosen to manage state context (it is a native feature in react). 

4. [Axios](https://axios-http.com/ptbr/docs/intro): Axios over FetchAPI due to cleanner syntax. It is used to the get the pokémon list.

5. [Jest](https://jestjs.io/): Jest was added into dependencies so the components and functions can be tested. 

6. [Router](https://reactrouter.com/en/main): ```yarn add react-router-dom localforage match-sorter sort-by``` to donwload the dependencies for route managment.



## Functional requirements:
✔️ The user should be able to see a main screen with a list of all Pokémons (with 
corresponding name and image for each of them).

⚠️ In the main page: apply pagination in the list of Pokémons.

⚠️ From the main page, while clicking a Pokémon, the user should be able to navigate to 
another page containing the details of that Pokémon.

⚠️ In the Pokémon details page, the user should see at least 6 descriptions, the image and 
the name of one Pokémon.

⚠️ In the Pokémon detail page, the user should be able to favorite the Pokémon.

⚠️ From the main page, the user should be able to navigate to another page. This page 
should contain a list of the favorite Pokémons (with corresponding name and image for each 
of them).

## Technical requirements:
✔️ The application should be implemented in React.

✔️ To get the list of Pókemons and their details, use the PokéAPI: https://pokeapi.co/ (see 
documentation for more details).

⚠️ Usage of the local storage to handle the list of favorite Pokémons.

⚠️ Usage of any UI framework adapted to React (Examples: Bootstrap, Semantic UI).

⚠️ The app should be responsive (adapt UI so it can be displayed in different screen sizes).

⚠️ The code should contain comments.

✔️ The application code should be submitted in GitHub.

✔️ On the README file of GitHub, should be mentioned the following information: small 
description of the application, functional and technical requirements accomplished, 
technologies used, and the steps of installation.

### Plus:
✔️ Apply any UI for all the components.

✔️ Add any extra libraries / frameworks / dependencies.

⚠️ Hooks, State Management, Router.

⚠️ Unit tests in functions and components.