import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './Spinner.module.css';

export default function LoaderSpiner() {
  return (
    <div className={s.Loader}>
      <Loader
        type="Oval"
        color="#7a262f"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}
