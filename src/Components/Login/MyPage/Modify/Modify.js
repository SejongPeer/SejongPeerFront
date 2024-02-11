import styles from "../Modify/Modify.module.css";

const Modify = () => {
  return (
    <div className={styles.container1}>
      <div style={{ display: "flex", gap: "2%" }}>
        <p style={{ fontWeight: "700", marginBottom: "0px" }}>정보 수정</p>
        <p style={{ color: "#ff4b4b" }}>*각 정보 클릭 시, 수정 가능</p>
      </div>
      <div className={styles.container2}></div>
      <div className={styles.container3}>
        <div style={{ display: "flex", gap: "2%" }}>
          <p style={{ fontWeight: "700", marginBottom: "0px" }}>내 학과</p>
          <p style={{ color: "#ff4b4b" }}>
            *학과 정보는 새로운 학기에 수정 가능합니다.
          </p>
        </div>
        <p
          style={{
            color: "#555555",
            fontWeight: "700",
            marginBottom: "0px",
            marginTop: "0px",
          }}
        >
          소프트웨어학과
        </p>
      </div>
      <button className={styles.modify}>
        <p style={{ fontWeight: "400", fontSize: "1.3em" }}>수정하기</p>
      </button>
    </div>
  );
};

export default Modify;
