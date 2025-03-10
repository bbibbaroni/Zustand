import "./App.css";
import { create } from "zustand";

interface StoreState {
  count: number;
  up: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  up() {
    set((state: any) => ({ count: state.count + 1 }));
  },
}));

function App() {
  const { count, up } = useStore();
  return (
    <>
      <h1>Hello Zustand</h1>
      <h4>{count}</h4>
      <button
        onClick={() => {
          up();
        }}
      >
        Button
      </button>
    </>
  );
}

export default App;
