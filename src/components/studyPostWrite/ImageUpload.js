import style from './ImageUpload.module.css';
import plus from '../../assets/image/plus_black.png'

const ImageUpload = () => {
    return (
        <div className={style.iamgeContainer}>
            <p>사진 (최대 3개 업로드)</p>
            <div className={style.uploadImgWrapper}>
                <div className={style.image}>
                    <img src={plus} className={style.uploadImg}/>
                </div>
            </div>
        </div>
    )
}

export default ImageUpload;