import { create } from 'zustand';

const useStore = create(set => ({
  isPopupVisible: false,
  popupMessage: '',
  studyData: null,
  isApplied: false,
  isScrapped: false,
  scrapCount: 0, // 스크랩 수 상태 추가
  setPopupVisible: isVisible => set({ isPopupVisible: isVisible }),
  setPopupMessage: message => set({ popupMessage: message }),
  setStudyData: data => set({ studyData: data }),
  setApplied: isApplied => set({ isApplied }),
  setScrapped: isScrapped => set({ isScrapped }),
  setScrapCount: count => set({ scrapCount: count }), // 스크랩 수 설정 함수 추가
}));

export default useStore;
