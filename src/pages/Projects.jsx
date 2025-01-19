import { useLocation } from "react-router";
import BackButton from "../components/BackButton";
import { BiAnchor } from "react-icons/bi";
import data from "../projects.json";
import React, { useEffect, useState } from "react";
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
  if (header.state === "医療中間サーバ") {
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
    <>
      <div
        id="projects"
        className="container mt-12 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h2 className="secondary-title">プロジェクト</h2>
          <p className="section-paragraph:">今まで携わったプロジェクト</p>
          <div className="m-3">
            <div className="flex items-center space-x-2">
              <BiAnchor />
              <h1 className="background-project text-lg my-12">
                {header.state}
              </h1>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-10">
            <div className="col-span-4">
              <div className="m-4 mt-12 text-md font-bold text-left h-full min-h-[100px]">
                期間
                <div className="text-secondary text-lg text-left p-3">
                  {contents[0].split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                役割
                <div className="text-secondary  text-lg text-left p-3">
                  {contents[2].split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
                開発環境
                <div className="text-secondary  text-lg text-left p-3">
                  {contents[3].split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className=" col-span-6">
              {header.state === "医療中間サーバ" && (
                <YamanoteLineToHamamatsucho />
              )}
              {header.state === "生命保険" && <YamanoteLineToOosaki />}
            </div>
          </div>
          <div className="">
            <div className="m-4 -mt-10 text-md font-bold text-left h-full min-h-[100px]">
              業務内容
              <div className="text-secondary  text-lg text-left p-3">
                {contents[1].split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <BackButton />
        </section>
      </div>
    </>
  );
};
export default Project;
