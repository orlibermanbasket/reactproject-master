import { FunctionComponent } from "react";
import { Button, Modal } from "react-bootstrap";

import { deleteCard } from "../services/CardServices";
import { successMsg } from "../services/Feedbacks";

interface DeleteProductModalProps {
    show: boolean;
    onHide: Function;
    cardId: string
    refresh: Function
    cardRemove: boolean
    setCardRemove: Function
}

const DeleteProductModal: FunctionComponent<DeleteProductModalProps> = ({ show, onHide, cardId, refresh, cardRemove, setCardRemove }) => {
    return <>
        <Modal show={show} onHide={() => onHide()} size="sm" centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Card  <i className="fa-solid fa-trash-can text-danger"></i></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    Are you sure do you want remove this card?
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => onHide()}>
                    Cancel
                </Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        deleteCard(cardId)
                            .then((res) => {
                                onHide();
                                refresh();
                                setCardRemove(!cardRemove)

                            })
                            .catch((err) => console.log(err));
                    }}
                >
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default DeleteProductModal;