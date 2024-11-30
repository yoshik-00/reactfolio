import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <div className="space-x-12 hidden md:flex items-center">
        <a
          href="#home"
          className="hover:text-selectedText transition-all duration-300"
        >
          ホーム
        </a>
        <a
          href="#about"
          className="hover:text-selectedText transition-all duration-300"
        >
          私について
        </a>
        <a
          href="#projects"
          className="hover:text-selectedText transition-all duration-300"
        >
          プロジェクト
        </a>
        <a
          href="#skills"
          className="hover:text-selectedText transition-all dur ation-300"
        >
          スキル一覧
        </a>
        <a
          href="#contact"
          className="hover:text-selectedText transition-all duration-300"
        >
          お問い合わせ
        </a>
      </div>
      <div className="md:hidden hover:text-selectedText transition-all duration-300">
        <button
          id="barbutton"
          onClick={toggleMenu}
          type="button"
          className="fixed top-6 right-6 z-10"
        >
          {/* <i id={bars} className="fa-solid fa-bars"></i> */}
          {/* <img src="../assets/bars.svg" /> */}
          <FaBars />
        </button>
      </div>
      <ul
        id="menu"
        className={`fixed top-0 left-0 z-0 w-full bg-gray-500 opacity-50 text-center font-bold text-white transition-transform ease-linear ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li className="p-1">
          <a href="#home">ホーム</a>
        </li>
        <li className="p-1">
          <a href="#about">私について</a>
        </li>
        <li className="p-1">
          <a href="#projects">プロジェクト</a>
        </li>
        <li className="p-1">
          <a href="#skills">スキル一覧</a>
        </li>
        <li className="p-1">
          <a href="#contact">お問い合わせ</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
