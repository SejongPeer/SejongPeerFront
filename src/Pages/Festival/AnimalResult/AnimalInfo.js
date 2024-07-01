import ANIMAL_TYPE from '../../../constants/animal/animal_info';
import test from '../../../assets/image/man_wolf.png';
import style from './AnimalResult.module.css';

const AnimalInfo = props => {
  const result = ANIMAL_TYPE.find(a => a.id === props.type);

  return (
    <div className={style.info_wrapper}>
      <img src={result.src} className={style.character} />
      <p className={style.animal_type}>{result.name}상</p>

      <div className={style.wrapper}>
        <p className={style.title}>동물상 특징</p>
        <p className={style.description}>{result.info}</p>
      </div>

      <div className={style.wrapper}>
        <p className={style.title}>대표 연예인</p>
        <p className={style.description}>{result.star}</p>
      </div>
    </div>
  );
};

export default AnimalInfo;
