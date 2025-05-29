import React from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className="modal-backdrop fade show">{children}</div>,
        document.body
    );
};

export default ModalPortal;