import { create } from 'zustand';

const usePostStore = create(set => ({
  title: '',
  category: 1,
  startDate: null,
  endDate: null,
  memberNum: 1,
  selectedWay: null,
  selectedFrequency: null,
  content: '',
  questionLink: '',
  images: null,
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
  addImage: newImage =>
    set(state => ({
      imges: [...state.imges, newImage],
    })),
  setStudyLink: studyLink => set({ studyLink }),
  setQuestionLink: questionLink => set({ questionLink }),
  setTags: tags => set({ tags }),
}));
export default usePostStore;
