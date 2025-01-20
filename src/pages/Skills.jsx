import BackButton from "../components/BackButton";
import React, { useEffect, useState } from "react";
import { Code, Server, Star, ExternalLink } from "lucide-react";
import skillsData from "../skills.json";
import { useLocation } from "react-router";
import SkillsModal from "../components/SkillsModal";

const SkillCard = ({ skill }) => {
  const location = useLocation();
  const header = location.state;
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* card header */}
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg">
          {header.state === "バックエンド" ? (
            <Server className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          ) : (
            <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
          )}
        </div>
        <h3 className="ml-3 text-base sm:text-lg font-semibold text-gray-800">
          {skill.name}
        </h3>
      </div>

      {/* skill level */}
      <div className="flex mb-3 space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < skill.level ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* skill detail */}
      <div className="text-sm text-gray-600 flex-grow">
        <div className="space-y-2">
          <p className="flex items-center">
            <span className="font-medium min-w-[5rem]">経験年数:</span>
            <span className="ml-2">{skill.experience}</span>
          </p>
          <p className="flex items-start">
            <span className="font-medium min-w-[5rem]">使用技術:</span>
            <span className="ml-2">
              {skill.details.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </p>
        </div>

        <div className="mt-4">
          <p className="font-medium mb-2">プロジェクト例:</p>
          <ul className="list-disc list-inside space-y-1">
            {skill.projects.map((project, index) => (
              <li key={index} className="text-gray-700 text-sm">
                {project.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line === "医療中間サーバー―解除登録受付結果画面" ? (
                      <SkillsModal param={line} />
                    ) : (
                      line
                    )}
                    <br />
                  </React.Fragment>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const categoryData = skillsData.categories[activeCategory];
  const location = useLocation();
  const header = location.state;
  useEffect(() => {
    if (header.state === "フロントエンド") {
      setActiveCategory("frontend");
    } else if (header.state === "バックエンド") {
      setActiveCategory("backend");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="skill"
      className="container mt-12 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">スキル</h2>
        <p className="section-paragraph:">私が習得したスキル</p>
        <div className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* category */}
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                {categoryData.title}
              </h3>
              <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base">
                {categoryData.description}
              </p>
            </div>
            {/* skill grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {categoryData.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
            <BackButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
