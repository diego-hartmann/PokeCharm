import './anim.css';

const random = (max : number) => (Math.random() * max );

const isMobile = () => {
    const m = (val:any) => navigator.userAgent.match(val);
    return (
        m(/Android/i) || m(/webOS/i) || m(/iPhone/i)
        || m(/iPad/i) || m(/iPod/i) || m(/BlackBerry/i)
        || m(/Windows Phone/i)
    )
} 

/**
 * Animates a list of html elements.
 * @param customAttr the 'data-stuff' attr (without 'data-', only 'stuff');
 */
export default (customAttr:string) => {

    // does not apply animation on mobile for performance propouses
    if(isMobile()) return;
    
    // getting all elements from their plain html
    const els = Array.from(document.querySelectorAll(`[data-${customAttr}]`));
            
    els?.forEach( el  => {
        
        // random delay on animate each el so they dont look all the same. 
        setTimeout(()=>{

            // applying animation to all elements to warn user.
            el.classList.add('shake');
            
            // removing animation after it is over.
            setTimeout(()=>{
                el.classList.remove('shake');
                // css anim duration.
            }, 820)
        
        }, random(300))

    });
}