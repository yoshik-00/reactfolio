import { useLocation } from "react-router";
import BackButton from "../components/BackButton";
import { BiAnchor } from "react-icons/bi";
import data from "../projects.json";
import React from "react";

const Project = () => {
  const location = useLocation();
  const header = location.state;

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

            <div className="my-24 w-full border border-solid border-black grid place-items-center lg:grid-cols-[400px_400px] lg:grid-rows-[400px_400px] xl:grid-cols-[200px_400px_200px_200px] xl:grid-rows-[500px] row-span-4 gap-y-2 gap-x-4">
              <div className="mx-4 border border-solid border-black text-xl text-center font-bold h-full">
                期間
                <div className="text-secondary text-base text-left p-3">
                  {" "}
                  {contents[0].split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="mx-4 border border-solid border-black text-xl text-center font-bold h-full">
                業務内容
                <div className="text-secondary text-base text-left p-3">
                  {" "}
                  {contents[1].split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="mx-4 border border-solid border-black text-xl text-center font-bold h-full">
                役割
                <div className="text-secondary text-base text-left p-3">
                  {" "}
                  {contents[2].split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="mx-4 border border-solid border-black text-xl text-center font-bold h-full">
                開発環境
                <div className="text-secondary text-base text-left p-3">
                  {" "}
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
          <BackButton />
        </section>
      </div>
    </>
  );
};
export default Project;
