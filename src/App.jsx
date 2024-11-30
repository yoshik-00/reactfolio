import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./pages/Notfound";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Todo" element={<Todo />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
