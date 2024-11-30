import { useLocation } from "react-router";
import BackButton from "../components/BackButton";
import { BiAnchor } from "react-icons/bi";
import data from "../project.json";

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

            <div className="my-24 w-full grid place-items-center lg:grid-cols-[400px_400px] lg:grid-rows-[400px_400px] xl:grid-cols-[200px_400px_200px_200px] xl:grid-rows-[500px] row-span-4 gap-y-2 gap-x-4">
              <div className="mx-4 border border-solid border-black text-xl text-center font-bold h-full">
                期間
                <div className="text-secondary text-lg">{contents[0]}</div>
              </div>
              <div className="mx-4 border border-solid border-black text-xl text-center font-bold h-full">
                業務内容
                <div className="text-secondary text-lg">{contents[1]}</div>
              </div>
              <div className="mx-4 border border-solid border-black text-xl text-center font-bold h-full">
                役割
                <div className="text-secondary text-lg">{contents[2]}</div>
              </div>
              <div className="mx-4 border border-solid border-black text-xl text-center font-bold h-full">
                開発環境
                <div className="text-secondary text-lg">{contents[3]}</div>
              </div>
            </div>
            {/* <div className="bg-customGray">
              <table className="w-full career-table">
                <thead>
                  <tr>
                    <th className="career-table w-1/6">期間</th>
                    <th className="career-table w-3/6">業務内容</th>
                    <th className="career-table w-1/6">開発環境等</th>
                    <th className="career-table w-1/6">役割等</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="career-table">2022/07 -2024/12 (30ヶ月)</td>
                    <td className="career-table">
                      【プロジェクト名】
                      <br /> かんぽ生命保険―支払業務システム
                      <br />
                      <br />
                      【システム概要】
                      <br />
                      郵便局などにて受け付けた各種保険金（死亡保険金、入院保険金等）請求書類を各保険金サービスセンターにて、
                      スキャンするところから始まり、保険金支払い可否の判断、未請求保険金の請求案内、支払い判断の点検等まで、
                      保険金支払事務全般をイメージワークフローシステムによって実現しているシステム。
                      <br />
                      <br />
                      【担当業務】
                      <br />
                      上述の請求案内。半期に一度のシステム改修や、問い合わせを契機とした修正を担当し、主に前者のシステム改修において、要件定義、影響調査、オフショアへの製造委託、結合試験までを担当した。
                      <br />
                      <br />
                      【成果】
                      <br />
                      ①半期毎に実施する性能試験を一人で担当し、プロジェクトが変わる際には、マニュアルを作成した。
                      <br />
                      ②IEからEdgeにブラウザ更改した際に、チームの前に立ち外部とやり取りをしながら、細部まで顧客の要求に応えた。
                      <br />
                    </td>
                    <td className="career-table">
                      【システム構成】
                      <br /> JavaServer Faces (JSF) <br />
                      <br />
                      【開発言語】
                      <br />
                      Java、SQL、HTML/CSS、 JavaScript
                    </td>
                    <td className="career-table">
                      副リーダー <wbr />
                      <br />
                      【PJ人数】
                      <br /> 15名（パートナー含む）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
          <BackButton />
          {/* <div
          id="Finance"
          className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
        ></div>
        <section className="p-12 w-full">
          <a
            className="w-btns-group__item button_2W3 w-button ui-button ui-button--secondary-alt-light ui-button--size-md"
            href="/#Finance"
          >
            <span className="border border-solid rounded-xl border-black p-3">
              Finance
            </span>
          </a>
          <div class="my-6 grid row-span-4 gap-y-2">
            <div class="bg-customGray p-4">期間</div>
            <div class="bg-customGray p-4">業務内容</div>
            <div class="bg-customGray p-4">役割等</div>
            <div class="bg-customGray p-4">開発環境等</div>
          </div>
        </section> */}
        </section>
      </div>
    </>
  );
};
export default Project;
