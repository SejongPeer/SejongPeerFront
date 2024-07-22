import style from './ImageUpload.module.css';
import plus from '../../assets/image/plus_black.png';
import close from '../../assets/image/close_with_circle.png';

const ImageUpload = ({
    imgFiles,
    ImgHandler,
    imgRef,
    ImgDeleteHandler
}) => {
    return (
        <div className={style.iamgeContainer}>
            <p>사진 (최대 3개 업로드)</p>
            <div className={style.uploadImgWrapper}>
                {imgFiles.map((imgFile, index) => (
                    <div className={style.imageWrapper} key={index}>
                        <img 
                            src={imgFile}
                            alt='업로드 이미지'
                            className={style.upload}
                        />
                        <img 
                            src={close} 
                            className={style.delete}
                            alt='delete'
                            onClick={() => ImgDeleteHandler(index)}
                        />
                    </div>
                ))}
                {imgFiles.length < 3 && (
                    <form className={style.imageWrapper}>
                        <label className={style.uploadImg} htmlFor='file-upload'>
                            <img src={plus} alt='plus' className={style.upload} />
                        </label>
                        <input 
                            type='file'
                            id='file-upload'
                            accept='image/*'
                            onChange={ImgHandler}
                            ref={imgRef}
                            className={style.hiddenInput}
                            multiple
                        />
                    </form>
                )}
            </div>
        </div>
    )
}

export default ImageUpload;