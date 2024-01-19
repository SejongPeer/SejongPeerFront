import { useContext, useState } from "react"
import style from "./StudyList.module.css"
import select from "../../../Assets/select.png"
import StudyListPost from "./StudyListPost";
import BottomModal from "../../Modal/BottomModal"
import Filter_now from "./Filter_now";
import { MyContext } from "../../../App";
import Filter_Feild from "./Filter_Feild";
import Filter_Member from "./Filter_Member";

const StudyList = () => {
    const [posts, setPosts] = useState([
        {
            title: "같이 A+ 맞을 사람 구함",
            member: "1/4",
            like: 16,
            islike: true,
            image: true,
            comment: 3,
            date: "24.02.04",
            tags: [
                { name: "JAVA 프로그래밍", type: "tag_class" },
                { name: "우미애", type: "tag" }
            ],
            state: "ongoing"
        },
        {
            title: "프로젝트 팀원 모집",
            member: "2/5",
            like: 20,
            comment: 5,
            date: "24.02.06",
            tags: [
                { name: "알고리즘", type: "tag_class" },
                { name: "김교수", type: "tag" }
            ],
            state: "ongoing"
        },
        {
            title: "캡스톤 같은조 할사람 구함",
            member: "모집완료",
            like: 16,
            comment: 3,
            date: "24.02.04",
            tags: [
                { name: "캡스톤 디자인A", type: "tag_class" },
                { name: "송형규", type: "tag" }
            ],
            state: "finish"
        },
    ]);

    const [isClickedStudy, setIsClickedStudy] = useState(false);
    const [isClickedMember, setIsClickedMember] = useState(false);
    const [isClickedOn, setIsClickedOn] = useState(false);
    const { modalOpen, setModalOpen } = useContext(MyContext);

    const modalHandler = () => {
        setModalOpen(!modalOpen)
    }
    const studyFilterHandler = () => {
        setModalOpen(!modalOpen)
        setIsClickedStudy(true)
    }
    const memberFilterHandler = () => {
        setModalOpen(!modalOpen)
        setIsClickedMember(true)
    }
    const onFilterHandler = () => {
        setModalOpen(!modalOpen)
        setIsClickedOn(true)
    }
    const deleteHandler = () => {
        setIsClickedStudy(false)
        setIsClickedMember(false)
        setIsClickedOn(false)
    }

    return <div className={style.container}>
        <div className={style.header}></div>
        <div className={style.filter_box}>
            <div className={style.filter} onClick={studyFilterHandler}>
                <span>스터디</span>
                <img src={select} alt="select" className={style.select}/>
            </div>
            <div className={style.filter} onClick={memberFilterHandler}>
                <span>모집인원</span>
                <img src={select} alt="select" className={style.select}/>
            </div>
            <div className={style.filter} onClick={onFilterHandler}>
                <span>모집여부</span>
                <img src={select} alt="select" className={style.select}/>
            </div>
        </div>

        <div className={style.list_wrapper}>
            {posts.map((post, index) => (
                <StudyListPost 
                    post = {post}
                    index = {index}
                />
            ))}
        </div>
        <div className={style.write_btn}>모집글 작성</div>
        {modalOpen && <BottomModal deleteHandler = {deleteHandler}>
            {isClickedStudy && <Filter_Feild />}
            {isClickedMember && <Filter_Member />}
            {isClickedOn && <Filter_now />}
        </BottomModal>}
    </div>
}

export default StudyList