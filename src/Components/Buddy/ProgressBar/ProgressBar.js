import React, { useContext, useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";
import { MyContext } from "../../../App.js";

const ProgressBar = (props) => {
  const [step, setStep] = useState(Array(5).fill(false));
  const [canMoveNext, setCanMoveNext] = useState(false);
  const [canMovePrev, setCanMovePrev] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const { setModalOpen } = useContext(MyContext);
  const { setModalContent } = useContext(MyContext);

  const moveRightHandler = () => {
    props.moveNext();
  };
  const moveLeftHandler = () => {
    props.moveBefore();
  };
  const submitHandler = () => {
    setModalOpen(true);
    setModalContent("buddyConfirm");
  };

  useEffect(() => {
    const updateStep = [...step];
    let next = false;
    let prev = false;

    if (props.slide === 0) {
      updateStep[0] = true;
      prev = false;
      if (props.choiceGender !== "") {
        next = true;
        props.slideMove(props.slide + 1);
      }
    }

    if (props.slide === 1) {
      updateStep[1] = true;
      prev = true;
      next = false;
      if (props.grade !== "") {
        next = true;
        props.slideMove(props.slide + 1);
      }
    }
    if (props.slide === 2) {
      updateStep[2] = true;
      prev = true;
      next = false;
      if (props.major !== "") {
        next = true;
        props.slideMove(props.slide + 1);
      }
    }
    if (props.slide === 3) {
      updateStep[3] = true;
      prev = true;
      next = false;
      if (props.gradeDiff.length !== 0) {
        next = true;
      }
    }
    if (props.slide === 4) {
      updateStep[4] = true;
      prev = true;
      next = false;
      if (
        props.phoneNum !== "" &&
        props.phoneNum.length === 11 &&
        props.kakao !== ""
      ) {
        next = true;
      }
    }
    if (props.slide === 5) {
      prev = true;
      next = true;
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
    setStep(updateStep);
    setCanMoveNext(next);
    setCanMovePrev(prev);
  }, [
    props.gender,
    props.choiceGender,
    props.grade,
    props.major,
    props.gradeDiff,
    props.studentNum,
    props.phoneNum,
    props.kakao,
    props.slide,
  ]);

  const nextClass = canMoveNext ? styles.controller : styles.nonController;
  const prevClass = canMovePrev ? styles.controller : styles.nonController;

  return (
    <div className={styles.progressBarWrapper}>
      <div className={styles.test}>
        <div className={styles.controllerWrapper}>
          <button
            className={prevClass}
            onClick={moveLeftHandler}
            disabled={!canMovePrev}
          >
            이전
          </button>
          {isLastPage ? (
            <button className={styles.submitBtn} onClick={submitHandler}>
              제출
            </button>
          ) : (
            <button
              className={nextClass}
              onClick={moveRightHandler}
              disabled={!canMoveNext}
            >
              다음
            </button>
          )}
        </div>
        <div className={styles.barWrapper}>
          {step.map((step, index) => (
            <div
              key={index}
              className={styles.progress}
              style={{
                backgroundColor: step ? "#FF3838" : "#ccc",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
