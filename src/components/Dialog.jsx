import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ModalPortal from "./ModalPortal";

const Dialog = ({ show, handleClose }) => {
    return (
        show && (
            <ModalPortal>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>About This App</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>This App Lists all the tv shows of world by default. also you can search the name of series to know about it !</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </ModalPortal>
        )
    );
};

export default Dialog;
