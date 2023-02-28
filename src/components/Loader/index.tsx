import css from './index.module.css';
import spin from './spinner.module.css';

interface IProps {
  message: string,
}

const PreBuildedSpinner = () => <div className={spin.lds_ripple}><div></div><div></div></div>;

const Loader = ( { message = "Loading..." } : IProps ) => {
  return (
    <div className={css.container}>
        <div className={css.content}>
          <PreBuildedSpinner />
          <div className={css.message}>{message}</div>
        </div>
    </div>
  )
}
export default Loader