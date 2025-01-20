import "./App.css";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/Notfound";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Todo from "./pages/Todo";
import Auth from "./pages/Auth";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const { isAuth } = useSelector((store) => store.auth);
  return (
    <Routes>
      {/* unauthenticated */}
      {!isAuth ? (
        <>
          <Route path="/*" element={<Auth />} />
        </>
      ) : (
        <>
          {/* authenticated */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/todo" element={<Todo />} />
          {/* NotFound */}
          <Route path="/*" element={<NotFound />} />
        </>
      )}
    </Routes>
  );
};

export default App;
