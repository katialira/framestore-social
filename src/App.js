import ThemeContext from "./contexts/ThemeContext";
import "./App.css";
import Header from "./components/Containers/Header";
import Feed from "./components/Feed/Feed";
import { useState } from "react";

function App() {
  const [themeColor, setThemeColor] = useState("#eee");
  return (
    <div className="App">
      <ThemeContext.Provider value={[themeColor, setThemeColor]}>
        <Header />
        <input type="color" onChange={(e) => setThemeColor(e.target.value)} />
        <Feed />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
