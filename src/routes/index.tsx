// importing the routes list
import { routes } from './dummy';

// route api components
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Routes with all the pages needed.
 * @returns the route system to wrap the application.
 */
const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>
          {
            routes.map( ( rt, key ) => <Route key={key} path={rt.path} element={ <rt.comp/> } />)
          }
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;