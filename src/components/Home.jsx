import React, { useEffect, useState } from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Background from "./Background";
import About from "./About";
import Contact from "./Contact";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import SignOut from "./SignOut";
const Home = () => {
  // only in Safari (browser incompatibility)
  useEffect(() => {
    if (
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    ) {
      const element = document.querySelector(".safari-hiddenF");
      if (element) {
        element.remove();
      }
    }
  }, []);
  useEffect(() => {
    if (
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    ) {
      const element = document.querySelector(".safari-hiddenG");
      if (element) {
        element.remove();
      }
    }
  }, []);

  return (
    <>
      <div className="py-6">
        <div className="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
          <div className="text-lg font-bold items-center">
            {/* Todo */}
            <Link
              to="/todo"
              className="hover:text-selectedText transition-all duration-300"
            >
              <FaCalendarCheck />
            </Link>
          </div>
          <Navbar />
        </div>
      </div>

      {/* body */}
      <div className="font-NotoSerifJP text-black">
        <div>
          {/* background image*/}
          <Background />
          {/* about me*/}
          <About />
          {/* projects */}
        </div>
        <div
          id="projects"
          className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
        >
          <section className="w-full">
            <h2 className="secondary-title">プロジェクト</h2>
            <p className="section-paragraph: text-secondary font-semibold">
              今までに携わってきたプロジェクト
            </p>
            <div className="my-16 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-6 z-20">
              <div className="shadow-sm hover:shadow-xl rounded-md transition-all duration-300">
                <Link
                  to="/projects"
                  state={{ state: "生命保険" }}
                  className="relative"
                >
                  <img
                    src={Image1}
                    alt=""
                    className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
                  ></img>
                  <span className="flex items-center justify-center absolute inset-0 w-full text-gray-200 text-6xl opacity-50 safari-hiddenF">
                    金融系
                  </span>
                </Link>
              </div>
              <div className="shadow-sm hover:shadow-xl rounded-md transition-all duration-300">
                <Link
                  to="/projects"
                  state={{ state: "中間サーバ" }}
                  className="relative"
                >
                  <img
                    src={Image2}
                    alt=""
                    className="w-full h-36 lg:h-72 object-top rounded-md cursor-pointer"
                  ></img>
                  <span className="flex items-center justify-center absolute inset-0 w-full text-gray-200 text-6xl opacity-50 safari-hiddenG">
                    官公庁系
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* skills */}
        <div
          id="skills"
          className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
        >
          <section className="w-full">
            <h2 className="secondary-title">スキル一覧</h2>
            <p className="section-paragraph: text-secondary font-semibold">
              私が習得したスキル
            </p>
            <div className="my-16 items-start">
              <div className="w-full shadow-md p-8 sm:p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:shadow-xl rounded-md transition-all duration-300 cursor-pointer">
                <Link to="/skills" state={{ state: "フロントエンド" }}>
                  <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                    <h3 className="text-3xl font-semibold">
                      フロントエンド開発
                    </h3>
                    <table className="items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                      <tr className="h-15">
                        <th className="text-left py-4 pr-4">言語</th>
                        <td className="py-4 flex items-center flex-wrap gap-3">
                          <div className="badge font-bold">JavaScript</div>
                          <div className="badge font-bold">HTML</div>
                          <div className="badge font-bold">CSS</div>
                        </td>
                      </tr>
                      <tr className="h-15">
                        <th className="text-left py-4 pr-4">
                          フレームワーク（ライブラリ）
                        </th>
                        <td className="py-4 flex items-center  flex-wrap gap-3">
                          <div className="badge font-bold">Tailwind CSS</div>
                          <div className="badge font-bold">react</div>
                          <div className="badge font-bold">JSF</div>
                        </td>
                      </tr>
                      <tr className="h-15">
                        <th className="text-left py-4 pr-4">開発環境</th>
                        <td className="py-4 flex items-center  flex-wrap gap-3">
                          <div className="badge font-bold">IntelliJ IDEA</div>
                          <div className="badge font-bold">VSCode</div>
                          <div className="badge font-bold">Docker</div>
                        </td>
                      </tr>
                    </table>
                    <p className="text-secondary font-semibold">
                      私は主に上記の技術経験があります。
                      <br />
                      詳細はクリックしてください。
                    </p>
                  </div>
                </Link>
              </div>

              <div className="w-full shadow-md p-8 sm:p-16 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:shadow-xl rounded-md transition-all duration-300 cursor-pointer">
                <Link to="/skills" state={{ state: "バックエンド" }}>
                  <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                    <h3 className="text-3xl font-semibold">バックエンド開発</h3>
                    <table className="items-center w-full justify-start gap-3 lg:w-auto mt-6 mb-8">
                      <tr className="h-15">
                        <th className="text-left py-4 pr-4">言語</th>
                        <td className="py-4 flex items-center flex-wrap gap-3">
                          <div className="badge font-bold">JavaScript</div>
                          <div className="badge font-bold">Java</div>
                          <div className="badge font-bold">SQL</div>
                        </td>
                      </tr>
                      <tr className="h-15">
                        <th className="text-left py-4 pr-4">
                          フレームワーク（ライブラリ）
                        </th>
                        <td className="py-4 flex items-center  flex-wrap gap-3">
                          <div className="badge font-bold">Node.js</div>
                          <div className="badge font-bold">JSF</div>
                          <div className="badge font-bold">Hibernate</div>
                        </td>
                      </tr>
                      <tr className="h-15">
                        <th className="text-left py-4 pr-4">開発環境</th>
                        <td className="py-4 flex items-center  flex-wrap gap-3">
                          <div className="badge font-bold">SpringFramework</div>
                          <div className="badge font-bold">PostgreSQL</div>
                          <div className="badge font-bold">AWSクラウド</div>
                        </td>
                      </tr>
                    </table>
                    <p className="text-secondary font-semibold">
                      私は主に上記の技術経験があります。
                      <br />
                      詳細はクリックしてください。
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* contact */}
        <Contact />
        <div className="mt-32 container flex justify-end items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <SignOut />
        </div>
      </div>

      <footer className="border-t border-black container  flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="footer_contents">
          <div className="footer_logo hover:text-selectedText transition-all duration-300 pt-3">
            <a href="">Naoto Yoshikawa Portfolio</a>
          </div>
          <p className="copyright pb-3">
            ©️2025 naoto yoshikawa. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Home;
