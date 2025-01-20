import React from "react";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { TiArrowBack } from "react-icons/ti";

const TaskModal = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const selectedDate = params.selectedDate;
  const taskDeadline = params.deadline;
  const [isMultiTasks, setIsMultiTasks] = useState(false);
  //If there are multiple tasks with the same due date and selected date
  useEffect(() => {
    const matchingTasksCount = taskDeadline.filter(
      (date) => date === selectedDate
    ).length;

    setIsMultiTasks(matchingTasksCount > 1);
  }, [taskDeadline, selectedDate]);

  //Get the index of tasks with the same due date and selected date
  const getMatchingIndex = () => {
    return taskDeadline
      .map((value, index) => (value === selectedDate ? index : -1))
      .filter((index) => index !== -1);
  };
  const matchingIndex = getMatchingIndex();

  return (
    <>
      {" "}
      <button
        onClick={handleOpenModal}
        className="text-[0.5rem] text-white bg-red-400 rounded-md font-semibold"
      >
        締切あり
      </button>
      <Modal
        isOpen={isOpen}
        contentLabel="Tasks Modal"
        onRequestClose={handleCloseModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        className=""
      >
        <div className="bg-white rounded-lg m-12">
          <div className="text-xl font-bold mb-4">タスク詳細</div>
          <div className="space-y-3 mb-6">
            <div>
              <label className="font-bold">優先度:</label>{" "}
              <span className="text-gray-700">
                {params.priority[matchingIndex[0]]}
              </span>
            </div>
            <div>
              <label className="font-bold">タスク名:</label>{" "}
              <span className="text-gray-700">
                {params.taskName[matchingIndex[0]]}
              </span>
            </div>
            <div>
              <label className="font-bold">記入日:</label>{" "}
              <span className="text-gray-700">
                {params.taskDate[matchingIndex[0]]}
              </span>
            </div>
            <div>
              <label className="font-bold">対応期日:</label>{" "}
              <span className="text-gray-700">
                {params.deadline[matchingIndex[0]]}
              </span>
            </div>
          </div>
          <div
            className={
              isMultiTasks ? "space-y-3 mb-6" : "space-y-3 mb-6 hidden"
            }
          >
            <div>
              <label className="font-bold">優先度:</label>{" "}
              <span className="text-gray-700">
                {params.priority[matchingIndex[1]]}
              </span>
            </div>
            <div>
              <label className="font-bold">タスク名:</label>{" "}
              <span className="text-gray-700">
                {params.taskName[matchingIndex[1]]}
              </span>
            </div>
            <div>
              <label className="font-bold">記入日:</label>{" "}
              <span className="text-gray-700">
                {params.taskDate[matchingIndex[1]]}
              </span>
            </div>
            <div>
              <label className="font-bold">対応期日:</label>{" "}
              <span className="text-gray-700">
                {params.deadline[matchingIndex[1]]}
              </span>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="flex items-center my-8 text-black px-4 py-2 hover:text-selectedText transition-all duration-300"
              onClick={handleCloseModal}
            >
              <TiArrowBack />
              閉じる
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TaskModal;
