import {create} from 'zustand';

export interface Burger {
    id:number
    name:string
    about:string
    price:string
    time:string
    add_svg:string
    remove_svg:string
    img:string
}
export interface BurgerStore {
  burgers: Burger[];
  fetchBurgers: (url: string) => Promise<void>;
}

const useBurgerStore = create<BurgerStore>((set) => ({
  burgers: [],
  fetchBurgers: async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    set({ burgers: data });
  }
}));

export default useBurgerStore;
