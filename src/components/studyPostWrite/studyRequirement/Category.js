import { useEffect, useState } from 'react';
import usePostStore from '../../../pages/study/studyPostWrite/usePostStore';
import style from '../StudyRequirement.module.css';
import arrow from '../../../assets/image/down_black.png';
 
const Category = ({studyFilterHandler}) => {
    const {category} = usePostStore();
    console.log(category);
    
    const [isPost, setIsPost] = useState(true);
    useEffect(() => {
        if (window.location.pathname.startsWith('/study/modify')) {
        setIsPost(false);
        } else {
        setIsPost(true);
        }
    }, [])

    const modify = () => {
        alert('카테고리는 수정할 수 없습니다!')
    }

    return (
        <div className={style.flexWrapper} onClick={isPost ? studyFilterHandler : modify}>
            <label className={style.label}>
                카테고리
            </label>

            {isPost ? 
            <img
                src={arrow}
                className={style.arrowImg}
                alt="Arrow"
            />
            :
            <p>{category}</p>}
        </div>
    )
}

export default Category;