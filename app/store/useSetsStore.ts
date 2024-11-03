import {create} from 'zustand';

export interface SetsType {
    id:number;
    about:string;
    title:string;
    img:string;
    btn:string;
}
export interface SetsStore {
  sets: SetsType[];
  fetchSets: (url: string) => Promise<void>;
}

const useSetsStore = create<SetsStore>((set) => ({
  sets: [],
  fetchSets: async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    set({ sets: data });
  }
}));

export default useSetsStore;
