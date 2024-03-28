import style from './StudyList.module.css';
import heart from '../../../assets/heart.png';
import comment from '../../../assets/comment.png';
import picture from '../../../assets/image.png';

const StudyListPost = props => {
  return (
    <div className={style.post_wrapper}>
      <div className={style.post_top}>
        <div className={style.tag_wrapper}>
          {props.post.tags &&
            props.post.tags.map((tag, tagIndex) => (
              <div key={tagIndex} className={style[`${tag.type}`]}>
                <span>{tag.name}</span>
              </div>
            ))}
        </div>

        <div className={style.date}>{props.post.date}</div>
      </div>

      <div className={style.post_middle}>
        <p className={style.title}>{props.post.title}</p>
        <p className={style[`member_${props.post.state}`]}>
          {props.post.member}
        </p>
      </div>

      <div className={style.post_bottom}>
        <div className={style.like}>
          <img src={heart} alt="like" className={style.like_icon} />
          <span className={style.like_number}>{props.post.like}</span>
        </div>
        <div className={style.comment}>
          <img src={comment} alt="comment" className={style.comment_icon} />
          <span className={style.comment_number}>{props.post.comment}</span>
        </div>
      </div>
    </div>
  );
};

export default StudyListPost;
