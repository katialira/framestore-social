import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Containers/Header";
import { FrameStoreProvider } from "./contexts/FrameStoreContext";
import HomeView from "./routes/HomeView";
import LoginView from "./routes/LoginView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FrameStoreProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/login" element={<LoginView />} />
          </Routes>
        </FrameStoreProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
