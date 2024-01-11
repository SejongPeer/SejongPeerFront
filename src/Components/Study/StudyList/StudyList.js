import { useState } from "react"
import style from "./StudyList.module.css"
import heart from "../../../Assets/heart.png"
import comment from "../../../Assets/comment.png"
import select from "../../../Assets/select.png"

const StudyList = () => {
    const [posts, setPosts] = useState([
        {
            title: "같이 A+ 맞을 사람 구함",
            member: "1/4",
            like: 16,
            comment: 3,
            date: "24.02.04",
            tags: [
                { name: "학교수업", type: "tag_class" },
                { name: "수업이름", type: "tag" }
            ]
        },
        {
            title: "프로젝트 팀원 모집",
            member: "2/5",
            like: 20,
            comment: 5,
            date: "24.02.06",
            tags: [
                { name: "공모전", type: "tag_contest" },
                { name: "대기업 공모전", type: "tag" }
            ]
        }
    ]);

    return <div className={style.container}>
        <div className={style.header}></div>
        <div className={style.filter_box}>
            <div className={style.filter}>
                <span>스터디</span>
                <img src={select} alt="select" className={style.select}/>
            </div>
            <div className={style.filter}>
                <span>모집인원</span>
                <img src={select} alt="select" className={style.select}/>
            </div>
            <div className={style.filter}>
                <span>모집여부</span>
                <img src={select} alt="select" className={style.select}/>
            </div>
        </div>
        {posts.map((post, index) => (
            <div key={index} className={style.post_wrapper}>
                <div className={style.post_top}>
                    <div className={style.tag_wrapper}>
                        {post.tags && post.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className={style[`${tag.type}`]}>
                            <span>{tag.name}</span>
                        </div>
                        ))}
                    </div>

                    <div className={style.date}>{post.date}</div>
                </div>

                <div className={style.post_middle}>
                    <p className={style.title}>{post.title}</p>
                    <p className={style.member}>{post.member}</p>
                </div>

                <div className={style.post_bottom}>
                    <div className={style.like}>
                        <img src={heart} alt="like" className={style.like_icon}/>
                        <span className={style.like_number}>{post.like}</span> 
                    </div>
                    <div className={style.comment}>
                        <img src={comment} alt="comment" className={style.comment_icon}/>
                        <span className={style.comment_number}>{post.comment}</span>
                    </div>
                </div>
            </div>
        ))}
        <div className={style.write_btn}>모집글 작성</div>
        
    </div>
}

export default StudyList