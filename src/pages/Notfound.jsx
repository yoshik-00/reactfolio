// src/pages/NotFound.js
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-lg">お探しのページは見つかりませんでした。</p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded"
        >
          ホームに戻る
        </a>
      </div>
    </div>
  );
};

export default NotFound;
