import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type CardModalProps = {
  gender: string;
  status: string;
  show: boolean;
  setShow: (a: boolean) => void;
};

function CardModal({ gender, status, show, setShow }: CardModalProps) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{gender}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{status}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardModal;
