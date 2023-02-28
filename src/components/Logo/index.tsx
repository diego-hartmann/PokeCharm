import css from './style.module.css';

const index = () => {

    // local Component
    const Flame = () => <span className={css.flame}>🔥</span>;
    
    return (
        <div style={{display:'flex', width: '100%', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <Flame />
            <h1 data-style="poke" className={css.title}>PokeCharm</h1>
            <Flame />
        </div>
    )
}

export default index