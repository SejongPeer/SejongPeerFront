import style from './StudyList.module.css';
import heart from '../../../assets/image/heart.png';
import comment from '../../../assets/image/comment.png';
import picture from '../../../assets/image/image.png';

const StudyListPost = ({ post }) => {
  const { title, createdAt, hasImage, categoryName } = post;

  return (
    <div className={style.post_wrapper}>
      <div className={style.post_top}>
        <div className={style.tag_wrapper}>
          <div className={style.category}>
            <p>{categoryName}</p>
          </div>
        </div>

        <div className={style.date}>{createdAt}</div>
      </div>

      <div className={style.post_middle}>
        <p className={style.title}>{title}</p>
        {hasImage && (
          <img src={picture} alt="hasImage" className={style.image_icon} />
        )}
      </div>

      <div className={style.post_bottom}>
        <div className={style.like}>
          <img src={heart} alt="like" className={style.like_icon} />
          <p className={style.like_number}>0</p>{' '}
          {/* 예시로 0을 넣었습니다. 실제 좋아요 수가 있다면 변경하세요 */}
        </div>
        <div className={style.comment}>
          <img src={comment} alt="comment" className={style.comment_icon} />
          <p className={style.comment_number}>0</p>{' '}
          {/* 예시로 0을 넣었습니다. 실제 댓글 수가 있다면 변경하세요 */}
        </div>
      </div>
    </div>
  );
};

export default StudyListPost;
