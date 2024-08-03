import { create } from 'zustand';

const usePostStore = create(set => ({
  title: '',
  category: null,
  startDate: '',
  endDate: '',
  memberNum: 1,
  selectedWay: 'FACE_TO_FACE',
  selectedFrequency: 'ONCE_OR_TWICE_A_WEEK',
  content: '',
  questionLink: '',
  studyLink: '',
  tags: [],
  setTitle: title => set({ title }),
  setCategory: category => set({ category }),
  setStartDate: startDate => set({ startDate }),
  setEndDate: endDate => set({ endDate }),
  setMemberNum: memberNum => set({ memberNum }),
  setSelectedWay: selectedWay => set({ selectedWay }),
  setSelectedFrequency: selectedFrequency => set({ selectedFrequency }),
  setContent: content => set({ content }),
  setStudyLink: studyLink => set({ studyLink }),
  setQuestionLink: questionLink => set({ questionLink }),
  setTags: tags => set({ tags }),
}));
export default usePostStore;
