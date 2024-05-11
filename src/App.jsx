

import AllRoutes from "./AllRoutes";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeProvider";
import Home from "./pages/Home";


function App() {
  const { isDarkMode } = useTheme();

  return (
    <div style={{background : isDarkMode && "#333", color : isDarkMode && "white"  }}>
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;
