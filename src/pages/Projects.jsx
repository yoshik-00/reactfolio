import { useLocation } from "react-router";
import BackButton from "../components/BackButton";
import { BiAnchor } from "react-icons/bi";
import data from "../assets/data/projects.json";
import React, { useEffect } from "react";
import {
  YamanoteLineToOosaki,
  YamanoteLineToHamamatsucho,
} from "../components/Animation";

const Project = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const header = location.state || {};

  let contents = [];
  if (header.state === "中間サーバ") {
    contents = [
      data.government.term,
      data.government.content,
      data.government.role,
      data.government.env,
    ];
  } else if (header.state === "生命保険") {
    contents = [
      data.finance.term,
      data.finance.content,
      data.finance.role,
      data.finance.env,
    ];
  }

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="space-y-6">
          <div>
            <h2 className="secondary-title">プロジェクト</h2>
            <p className="section-paragraph">今まで携わったプロジェクト</p>
          </div>

          <div className="p-4">
            <div className="flex items-center font-semibold text-xl space-x-2">
              <BiAnchor className="flex-shrink-0" />
              <h1 className="background-project text-lg">{header.state}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">期間</h3>
                  <div className="text-secondary text-base sm:text-lg">
                    {contents[0].split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">役割</h3>
                  <div className="text-secondary text-base sm:text-lg">
                    {contents[2].split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">開発環境</h3>
                  <div className="text-secondary text-base sm:text-lg">
                    {contents[3].split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="hidden sm:block lg:col-span-6">
              {header.state === "中間サーバ" && <YamanoteLineToHamamatsucho />}
              {header.state === "生命保険" && <YamanoteLineToOosaki />}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8">
            <h3 className="font-bold text-lg mb-2">業務内容</h3>
            <div className="text-secondary text-base sm:text-lg">
              {contents[1].split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <BackButton />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;
