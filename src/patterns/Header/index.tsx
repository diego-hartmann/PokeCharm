// subcomponents
import Logo from '../../components/Logo';
import PagesMenu from '../../components/PagesMenu';

// styles
import css from './index.module.css';

/**
 * Common component containing buttons to change page through routes.
 * It also contains the page title component. 
 */
export default ( { pageIndex } : { pageIndex : number } ) => (
    <div className={css.header}>
        <Logo />
        <br></br>
        <PagesMenu pageIndex={pageIndex}/>
        <br></br>
    </div> )