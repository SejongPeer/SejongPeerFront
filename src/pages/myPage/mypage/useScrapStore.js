// src/store/useStudyStore.js
import { create } from 'zustand';

const useScrapStore = create(set => ({
  posts: [],
  modalOpen: false,
  setPosts: posts => set({ posts }),
  setModalOpen: modalOpen => set({ modalOpen }),
}));

export default useScrapStore;

