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
        <h3>글 작성을 취소하시겠습니까?</h3>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onClose}>
            취소
          </button>
          <button className={styles.confirmButton} onClick={handleConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
