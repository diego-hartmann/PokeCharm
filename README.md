## Intro
This repository is the source code for [PokeCharm](https://poke-charm.vercel.app), a web application that shows Pokémons and their information, such as names, images and descriptions. [PokeCharm](https://poke-charm.vercel.app) is available on https://poke-charm.vercel.app.


## PokeAPI:
This web application is a [PokeAPI](https://pokeapi.co/) client. It displays the data for each Pokémon from their oficial API.
<img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width="50%" height="50%" />

## Techs used to this project and steps of their installations:
1. [Yarn](https://yarnpkg.com/): First, it was decided to use Yarn for fast package managment,
<img src="https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png" width="50px" height="50px" />

2. [TypeScript](https://www.typescriptlang.org/): then, the project was initialized with TypeScript for type safety. 
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="50px" height="50px" />

3. [ContextAPI](https://reactjs.org/docs/context.html): useContext hook was choosen to manage state context (it is a native feature in react). 
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="50px" height="50px" />

4. [Axios](https://axios-http.com/ptbr/docs/intro): Axios over FetchAPI due to cleanner syntax. It is used to the get the pokémon list.
<img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" width="90px" height="50px" />



5. [Jest](https://jestjs.io/): Jest was added into dependencies so the components and functions can be tested. 
<img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" width="50px" height="50px" />

6. [Router](https://reactrouter.com/en/main): ```yarn add react-router-dom localforage match-sorter sort-by``` to donwload the dependencies for route managment.
<img src="https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png" width="90px" height="50px" />



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