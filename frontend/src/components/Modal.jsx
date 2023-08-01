import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-2/4 m-auto">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4 text-sky-500 underline">
          Hi there, and Welcome!
        </h2>
        <p className="text-gray-600">
          User log-in and authentication are securely handled by Clerk, a
          trusted authentication provider. Your personal information is
          protected and encrypted to ensure a safe and reliable experience on
          this website. Enjoy exploring the site with peace of mind, knowing
          that your data is in good hands with Clerk.
        </p>
      </div>
    </div>
  );
};

export default Modal;
