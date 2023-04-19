import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";
import UpdateCard from "./UpdateCard";

interface UpdateModalCardProps {
    show: boolean
    onHide: Function
    cardId: string
    refresh: Function
}

const UpdateModalCard: FunctionComponent<UpdateModalCardProps> = ({ show, onHide, cardId, refresh }) => {
    return <>
        <Modal
            show={show}
            onHide={() => onHide()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateCard cardId={cardId} refresh={refresh} onHide={() => onHide()} />
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
        </Modal>
    </>
        ;


}

export default UpdateModalCard;