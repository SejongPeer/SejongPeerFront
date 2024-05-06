import { useNavigate } from 'react-router-dom';

import Loadinglogo from './LoadingLogo';

import style from './StartLoading.module.css';

const StartLoading = () => {
  const navigate = useNavigate();
  const MainHandler = () => {
    navigate('/main');
  };

  return (
    <div className={style.container}>
      <button onClick={MainHandler} className={style.start}>
        <Loadinglogo />
        {/*<img className={style.textLogo} src={logo} alt="logo" />*/}
      </button>
    </div>
  );
};

export default StartLoading;
