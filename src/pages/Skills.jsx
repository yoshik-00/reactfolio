import BackButton from "../components/BackButton";
import { BiAnchor } from "react-icons/bi";
import { useState } from "react";
import { useLocation } from "react-router";
import data from "../skills.json";

// 正しい記述例
const Skill = () => {
  // const [header, setHeader] = useState();
  const location = useLocation();
  const header = location.state;

  let contents = [];
  if (header.state === "フロントエンド") {
    contents = [
      data.frontend.output.first,
      data.frontend.output.second,
      data.frontend.output.third,
      data.frontend.level.first,
      data.frontend.level.second,
      data.frontend.level.third,
    ];
  } else if (header.state === "バックエンド") {
    contents = [
      data.backend.output.first,
      data.backend.output.second,
      data.backend.output.third,
      data.backend.level.first,
      data.backend.level.second,
      data.backend.level.third,
    ];
  }

  return (
    <div
      id="skill"
      className="container mt-12 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">スキル</h2>
        <p className="section-paragraph:">私が習得したスキル</p>
        <div className="m-12 flex items-center space-x-2">
          <BiAnchor />

          <h1 className="background-skill text-lg">{header.state}</h1>
        </div>
        <div className="items-center justify-center mt-24 grid grid-cols-1 grid-rows-8 gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:gap-4">
          <div className="text-xl skill-cols order-1 lg:order-none lg:col-span-1 p-4 flex justify-center">
            成果物
          </div>
          <div className="text-xl skill-cols order-5 lg:order-none lg:col-span-1 p-4 flex justify-center">
            言語習得度
          </div>
          <div className="text-secondary skill-cols order-2 lg:order-none lg:col-span-1 p-4 flex justify-center">
            {contents[0]}
          </div>
          <div className="text-secondary skill-cols order-6 lg:order-none lg:col-span-1 p-4 flex justify-center">
            {contents[3]}
          </div>
          <div className="text-secondary skill-cols order-3 lg:order-none lg:col-span-1 p-4 flex justify-center">
            {contents[1]}
          </div>
          <div className="text-secondary skill-cols order-7 lg:order-none lg:col-span-1 p-4 flex justify-center">
            {contents[4]}
          </div>
          <div className="text-secondary skill-cols order-4 lg:order-none lg:col-span-1 p-4 flex justify-center">
            {contents[2]}
          </div>
          <div className="text-secondary skill-cols order-8 lg:order-none lg:col-span-1 p-4 flex justify-center">
            {contents[5]}
          </div>
        </div>

        {/* <GiAnchor /> */}

        <BackButton />
      </section>
    </div>
  );
};

export default Skill;
