import React, {useEffect} from "react";
import {Modal, Button} from "react-bootstrap";

type AlertModalProps = {
  show: boolean,
  onClose: () => void,
  title: string,
  message: string,
  showConfirm: boolean,
  showCancel: boolean,
  confirmText: string,
  cancelText: string,
  onConfirm: () => void,
  onCancel: () => void,
  closeOnEsc: boolean,
}

const AlertModal = ({
  show = false,
  onClose = () => { },
  title = "Atenção",
  message = "",
  showConfirm = true,
  showCancel = false,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  onConfirm = () => { },
  onCancel = () => { },
  closeOnEsc = true,
}:AlertModalProps) => {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEsc) {
        onClose?.();
      }
    };

    if (typeof document !== "undefined") {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [closeOnEsc, onClose]);

  const handleConfirm = () => {
    onConfirm?.();
    onClose?.();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose?.();
  };

  return (
    <Modal show={show} onHide={onClose} backdrop="static" keyboard={false} centered>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        {showCancel && (
          <Button variant="secondary" onClick={handleCancel}>
            {cancelText}
          </Button>
        )}
        {showConfirm && (
          <Button variant="primary" onClick={handleConfirm}>
            {confirmText}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
