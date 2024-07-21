import { create } from 'zustand';
const usePopupStroe = create(set => ({
  isPopupVisible: false,
  popupMessage: '',
  popupTitle: '',
  setPopupVisible: isVisible => set({ isPopupVisible: isVisible }),
  setPopupMessage: message => set({ popupMessage: message }),
  setPopupTitle: title => set({ popupTitle: title }),
}));

export default usePopupStroe;
