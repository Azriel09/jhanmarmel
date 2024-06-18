import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HomeContainer from "./components/Home_container";
import { SectionProvider } from "./context/section_context";
function App() {
  return (
    <SectionProvider>
      <Routes>
        <Route path="/" element={<HomeContainer />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </SectionProvider>
  );
}

export default App;
