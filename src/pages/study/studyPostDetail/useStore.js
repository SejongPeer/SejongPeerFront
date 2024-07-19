import { create } from 'zustand';

const useStore = create(set => ({
  isPopupVisible: false,
  popupMessage: '',
  popupTitle: '',
  studyData: null,
  isApplied: false,
  isScrapped: false,
  scrapCount: 0,
  setPopupVisible: isVisible => set({ isPopupVisible: isVisible }),
  setPopupMessage: message => set({ popupMessage: message }),
  setPopupTitle: title => set({ popupTitle: title }),
  setStudyData: data => set({ studyData: data }),
  setApplied: isApplied => set({ isApplied }),
  setScrapped: isScrapped => set({ isScrapped }),
  setScrapCount: count => set({ scrapCount: count }),
}));

export default useStore;
