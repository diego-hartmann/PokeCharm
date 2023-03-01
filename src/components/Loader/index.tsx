// style
import css from './index.module.css';

// wheel css importing
import spin from './spinner.module.css';

// 'wheel' css importing
import circle from './circle.module.css';

interface IProps {
  message?: string,
}

// extractiong into internal components for  organization propouses.
const Spiner = () => <div className={spin.lds_ripple}><div></div><div></div></div>;
const Circle = () => <div className={circle.lds_circle}><div></div></div>;

// The loader comp itself
/**
 * Renders a Loader component that covers the screen
 * @param message is the text displayed on loading. Default: 'Loading...' 
 * @returns 
 */
const Loader = ( { message = "Loading..." } : IProps ) => {
  return (
    <div className={css.container}>
        <div className={css.content}>
          <div className={css.iconsContainer}>
            {/* spinners */}
            <div className={css.spinnerContainer}> <Spiner /> </div>
            <div className={css.circleContainer}> <Circle /> </div>
          </div>
          {/* message */}
          <div data-style={'poke'} className={css.message}>{message.toUpperCase()}</div>
        </div>
    </div>
  )
}
export default Loader