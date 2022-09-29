import "./App.css";
import Header from "./components/Containers/Header";
import LogIn from "./components/elements/LogIn";
import Feed from "./components/Feed/Feed";
import { FrameStoreProvider } from "./contexts/FrameStoreContext";

function App() {
  return (
    <div className="App">
      <FrameStoreProvider>
        <Header />
        <LogIn />
        <Feed />
      </FrameStoreProvider>
    </div>
  );
}

export default App;
