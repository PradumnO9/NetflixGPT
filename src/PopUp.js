import React from "react";
import ReactDom from "react-dom";
import { CgClose } from "react-icons/cg";

const PopUp = ({ children, onClose }) => {
  
  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-80">
        <div className="fixed top-[50%] left-[50%] h-[73%] w-[60%] translate-x-[-50%] translate-y-[-50%]">
          <button
            className="absolute bg-red-700 p-[6px] rounded-md ml-[85%] md:ml-[95%] mt-4 md:mt-3"
            onClick={onClose}
          >
            <CgClose color="white" size={20} />
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("popup-root")
  );
};

export default PopUp;
