import { create } from "zustand";

export interface ReviewType {
  id: number;
  name: string;
  about: string;
  title: string;
  img: string;
}
export interface ReviewStore {
  review: ReviewType[];
  fetchReview: (url: string) => Promise<void>;
}

const useReviewStore = create<ReviewStore>((set) => ({
  review: [],
  fetchReview: async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    set({ review: data });
  },
}));

export default useReviewStore;
