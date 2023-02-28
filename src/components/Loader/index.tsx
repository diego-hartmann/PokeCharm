import css from './index.module.css';
import spin from './spinner.module.css';
import circle from './circle.module.css';
interface IProps {
  message?: string,
}

const Spiner = () => <div className={spin.lds_ripple}><div></div><div></div></div>;
const Circle = () => <div className={circle.lds_circle}><div></div></div>;

const Loader = ( { message = "Loading..." } : IProps ) => {
  return (
    <div className={css.container}>
        <div className={css.content}>
          <div className={css.iconsContainer}>
            <div className={css.spinnerContainer}> <Spiner /> </div>
            <div className={css.circleContainer}> <Circle /> </div>
          </div>
          <div data-style={'poke'} className={css.message}>{message.toUpperCase()}</div>
        </div>
    </div>
  )
}
export default Loader