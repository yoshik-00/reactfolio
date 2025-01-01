import "./App.css";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/Notfound";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Todo from "./pages/Todo";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAuth = queryParams.get("isAuthenticated");

  useEffect(() => {
    if (isAuth === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuth]);
  return (
    <Routes>
      {/* 未認証 */}
      {!isAuthenticated ? (
        <Route path="/*" element={<Auth setAuth={setIsAuthenticated} />} />
      ) : (
        <>
          {/* 認証済 */}
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Todo" element={<Todo />} />
        </>
      )}
      {/* NotFound */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
