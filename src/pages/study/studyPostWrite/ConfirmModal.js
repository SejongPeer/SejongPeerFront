// src/components/ConfirmModal.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ConfirmModal.module.css'; // 스타일 파일 추가

const ConfirmModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleConfirm = () => {
    navigate('/study');
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>게시글 작성을 취소하시겠습니까?</h3>
        <p>작성한 내용은 저장되지 않습니다.</p>
        <div className={styles.buttonContainer}>
          <button className={styles.confirmButton} onClick={onClose}>
            계속 작성하기
          </button>
          <button className={styles.cancelButton} onClick={handleConfirm}>
            작성취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
