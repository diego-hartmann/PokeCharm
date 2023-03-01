## Intro
This repository is the source code for [PokeCharm](https://poke-charm.vercel.app), a web application that shows Pokémons and their information, such as names, images and descriptions. [PokeCharm](https://poke-charm.vercel.app) is available on https://poke-charm.vercel.app.

<img src="https://static.wikia.nocookie.net/pokemonet/images/8/87/004CharmanderFRLG.png/revision/latest?cb=20130505000902&path-prefix=pt-br" width="10%" height="10%" />

## Techs used to this project and steps of their installations:

- obs: They are listed in order of instalation and usage.

[PokeAPI](https://pokeapi.co/): The original pokémon data. PokeCharm displays the data for each Pokémon from their oficial API.

<img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" width="15%" height="15%" />

[Yarn](https://yarnpkg.com/): First, it was decided to use Yarn for fast package managment.

<img src="https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png" width="50px" height="50px" />

[TypeScript](https://www.typescriptlang.org/): then, the project was initialized with TypeScript for type safety.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="50px" height="50px" />

[ContextAPI](https://reactjs.org/docs/context.html): useContext hook was choosen to manage state context (it is a native feature in React). 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="55px" height="50px" />

[Axios](https://axios-http.com/ptbr/docs/intro) due to clean syntax. It is used to the get the pokémon list.

<img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" width="110px" height="50px" />

[Jest](https://jestjs.io/) was added into dependencies so the components and functions can be tested. 

<img src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png" width="50px" height="50px" />

[Router](https://reactrouter.com/en/main): ```yarn add react-router-dom``` to donwload the dependencies for route managment.

<img src="https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png" width="90px" height="50px" />

[React-Paginate](https://github.com/AdeleD/react-paginate): A ReactJS component to render a pagination.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="55px" height="50px" />

[MaterialUI](https://mui.com/): UI Components lib.

<img src="https://v4.material-ui.com/static/logo.png" width="50px" height="50px" />

[React-Responsive](https://mui.com/) for media-query check inside components.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="55px" height="50px" />


## Functional requirements:
✔️ The user should be able to see a main screen with a list of all Pokémons (with 
corresponding name and image for each of them).

✔️ In the main page: apply pagination in the list of Pokémons.

✔️ From the main page, while clicking a Pokémon, the user should be able to navigate to 
another page containing the details of that Pokémon.

✔️ In the Pokémon details page, the user should see at least 6 descriptions, the image and 
the name of one Pokémon.

✔️ In the Pokémon detail page, the user should be able to favorite the Pokémon.

✔️ From the main page, the user should be able to navigate to another page. This page 
should contain a list of the favorite Pokémons (with corresponding name and image for each 
of them).

## Technical requirements:
✔️ The application should be implemented in React.

✔️ To get the list of Pókemons and their details, use the PokéAPI: https://pokeapi.co/ (see 
documentation for more details).

✔️ Usage of the local storage to handle the list of favorite Pokémons.

✔️ Usage of any UI framework adapted to React (Examples: Bootstrap, Semantic UI).

⚠️ The app should be responsive (adapt UI so it can be displayed in different screen sizes).

✔️ The code should contain comments.

✔️ The application code should be submitted in GitHub.

### Plus:
✔️ Apply any UI for all the components.

✔️ Add any extra libraries / frameworks / dependencies.

✔️ Hooks.

✔️ State Management.

✔️ Router.

⚠️ Unit tests in functions and components.
