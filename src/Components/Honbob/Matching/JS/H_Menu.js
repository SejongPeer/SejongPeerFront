import { useState } from "react";
import con from "../CSS/H_Container.module.css";
import style from "../CSS/H_Menu.module.css";
const H_Menu = () => {
    // const [isClicked, setIsClicked] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const menu = ["한식", "양식", "중식", "일식", "학식", "상관없음"]

    const menuChoice = (index) => {
        setClickedIndex(index);
        console.log("선택된 index: ", index);
    }

    return (
        <div className={con.container}>
            <p className={con.title}>원하는 메뉴를 선택해주세요!</p>
            <div className={style.menuContainer}>
                {menu.map((val, index) => (
                    <button
                        key={index}
                        className={`${style.menuBtn}`}
                        onClick={() => menuChoice(index)}
                        style={{ border: index === clickedIndex ? '3px solid red' : '1px solid #e5e5e5', color: index === 4 ? 'red' : "black" }}
                    > {index === 0 || index === 1 || index === 2 || index === 3 ? (
                        <div className={style.menuBox}>
                            <div className={`${style.imgBox} ${style[`item-${index}`]}`}>
                            </div>
                            <div>{val}</div>
                        </div>
                    ) : (
                        val
                    )}</button>
                ))}

            </div>
        </div>);
}

export default H_Menu;