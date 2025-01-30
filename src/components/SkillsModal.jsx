import Modal from "react-modal";
import { TiArrowBack } from "react-icons/ti";
import { useState } from "react";
import SearchImage from "../assets/image3.png";
import ListImage from "../assets/image4.png";
import DetailImage from "../assets/image5.png";
import skillsData from "../assets/data/skills.json";
import { IoAlertCircleOutline } from "react-icons/io5";

const SkillModal = ({ param }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  const modalData = skillsData.categories.modal;
  return (
    <>
      <span
        onClick={() => handleOpenModal()}
        className="text-blue-500 underline cursor-pointer hover:text-blue-800"
      >
        {param}
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        className=""
        contentLabel="Skills Modal"
      >
        <div>
          <div className="h-full mt-10 mx-10">
            <span className="text-lg font-bold mb-5 flex text-gray-600 mt-2 items-center">
              <IoAlertCircleOutline className="size-6" />
              以下は、私が業務で作成した画面をFigmaで再現したものです。（業務上関係のある記載はありません。）
            </span>
            <div className="mb-4">
              <img
                src={SearchImage}
                alt="Image"
                className="w-full rounded-md shadow-lg"
              />
              <p className="text-gray-600 my-6">{modalData.item1}</p>
            </div>
            <div className="mb-4">
              <img
                src={ListImage}
                alt="Image"
                className="w-full rounded-md shadow-lg"
              />
              <p className="text-gray-600 my-6"> {modalData.item2}</p>
            </div>
            <div>
              <img
                src={DetailImage}
                alt="Image"
                className="w-full rounded-md shadow-lg"
              />
              <p className="text-gray-600 my-6"> {modalData.item3}</p>
            </div>
          </div>

          <button
            className="flex items-center my-8 text-black px-4 py-2 hover:text-selectedText transition-all duration-300"
            onClick={handleCloseModal}
          >
            <TiArrowBack />
            閉じる
          </button>
        </div>
      </Modal>
    </>
  );
};
export default SkillModal;
