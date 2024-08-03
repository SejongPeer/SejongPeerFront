import { create } from 'zustand';
const useTimeTableStore = create(set => ({
  tableInfos: [],
  showData: [],
  subjectName: '',

  setTableInfos: tableInfos => set({ tableInfos }),
  setShowData: showData => set({ showData }),
  setSubjectName: subjectName => set({ subjectName }),
}));

export default useTimeTableStore;
