import css from './index.module.css';
import spin from './spinner.module.css';

interface IProps {
  message: string,
}

const PreBuildedSpinner = () => <div className={spin.lds_ripple}><div></div><div></div></div>;

const Loader = ( { message = "LOADING" } : IProps ) => {
  return (
    <div className={css.container}>
        <div className={css.content}>
          <div className={css.spinnerContainer}> <PreBuildedSpinner /> </div>
          <div className={css.message}>{message.toUpperCase()}</div>
        </div>
    </div>
  )
}
export default Loader