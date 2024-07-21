import { create } from 'zustand';

const useStore = create(set => ({
  studyData: null,
  isApplied: false,
  isScrapped: false,
  scrapCount: 0,
  setStudyData: data => set({ studyData: data }),
  setApplied: isApplied => set({ isApplied }),
  setScrapped: isScrapped => set({ isScrapped }),
  setScrapCount: count => set({ scrapCount: count }),
}));

export default useStore;
