import css from './style.module.css';

/**
 * Renders the header logo of the website.
 */
const index = () => {
    // logo component itself
    return (
        <div className={css.index}>
            <h1 className={css.poke}>P</h1>
            <span className={css.o} >o</span>
            <h1 className={css.poke}>ke</h1>
            <span className={css.charm}>Charm</span>
        </div>
    )
}

export default index