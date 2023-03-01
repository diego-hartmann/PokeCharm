import css from './style.module.css';

/**
 * Renders the header logo of the website.
 */
const index = () => {

    // local Component for organization, with its own animation
    const Flame = () => <span className={css.flame}>🔥</span>;
    
    // logo component itself
    return (
        <div style={{display:'flex', width: '100%', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <Flame />
            <h1 data-style="poke" className={css.title}>PokeCharm</h1>
            <Flame />
        </div>
    )
}

export default index