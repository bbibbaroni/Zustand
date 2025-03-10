import "./App.css";
import { create } from "zustand";

interface storeState {
  count: number;
  up: () => void;
  ten: () => void;
}

const useStore = create<storeState>((set) => ({
  count: 0,
  up() {
    set((state: any) => ({ count: state.count + 1 }));
  },
  ten() {
    for (let i = 0; i < 10; i++) {
      set((state: any) => ({ count: state.count + 1 }));
    }
  },
}));

const Zu = () => {
  const { count, up, ten } = useStore();
  return (
    <>
      <h1>Hello Manager</h1>
      <button onClick={() => up()} disabled={count >= 10 ? true : false}>
        Button
      </button>
      <button onClick={() => ten()} disabled={count >= 10 ? true : false}>
        Button
      </button>
      <h3>{count}</h3>
    </>
  );
};
export default Zu;
