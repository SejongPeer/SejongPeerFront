import { create } from 'zustand';

const useStore = create(set => ({
  isPopupVisible: false,
  popupMessage: '',
  studyData: null,
  isApplied: false,
  isScrapped: false,
  setPopupVisible: isVisible => set({ isPopupVisible: isVisible }),
  setPopupMessage: message => set({ popupMessage: message }),
  setStudyData: data => set({ studyData: data }),
  setApplied: isApplied => set({ isApplied }),
  setScrapped: isScrapped => set({ isScrapped }),
}));

export default useStore;
