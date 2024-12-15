import React from "react";
import { TiArrowBack } from "react-icons/ti";

export default function BackButton() {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <button
      className="flex items-center my-8 hover:text-selectedText transition-all duration-300"
      onClick={handleBack}
    >
      <TiArrowBack />
      戻る
    </button>
  );
}
