import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./pages/Notfound";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Todo from "./pages/Todo";
import Auth from "./pages/Auth";
import { useEffect, useState } from "react";

const PrivateRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Auth />;
};

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Auth" element={<Auth />}></Route>
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
// const App = () => {
//   const [
//     , setIsAuthenticated] = useState(false);
//   const [IsFirstVisit, setIsFirstVisit] = useState(true);

//   useEffect(() => {
//     const init = localStorage.getItem("init");
//     if (init) {
//       //初回じゃない
//       setIsFirstVisit(false);
//       console.log("not init");
//     } else {
//       //初回
//       localStorage.setItem("init", "notInit");
//       setIsFirstVisit(true);
//       console.log("init");
//     }
//   }, []);

//   return (
//     <>
//       <Router>
//         <Routes>
//           {/* ログイン */}
//           <Route path="/Auth" element={<Auth setAuth={setIsAuthenticated} />} />
//           {/* ホーム */}
//           <Route
//             path="/"
//             element={
//               IsFirstVisit ? (
//                 <Auth />
//               ) : (
//                 <PrivateRoute
//                   element={<Home />}
//                   isAuthenticated={isAuthenticated}
//                 />
//               )
//             }
//           />

//           {/* カレンダー */}
//           <Route
//             path="/Todo"
//             element={<PrivateRoute element={<Todo />} isAuthenticated="true" />}
//           />
//           {/* プロジェクト */}
//           <Route
//             path="/Projects"
//             element={
//               <PrivateRoute
//                 element={<Projects />}
//                 isAuthenticated={isAuthenticated}
//               />
//             }
//           />
//           {/* スキル */}
//           <Route
//             path="/Skills"
//             element={
//               <PrivateRoute
//                 element={<Skills />}
//                 isAuthenticated={isAuthenticated}
//               />
//             }
//           />
//           <Route path="/*" element={<NotFound />}></Route>
//         </Routes>
//       </Router>
//     </>
//   );
// };

export default App;
