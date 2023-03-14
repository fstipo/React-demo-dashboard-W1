import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header style={{ backgroundColor: "red", color: "#fff" }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#f2f2f2", color: "black" }}>
                {/* <h4>Centered Modal</h4> */}
                <p className='display-6'>
                    Are you sure you want to delete this item?
                </p>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#fbfbfb" }}>
                <button className='btn btn-danger' onClick={props.onDelete}>Yes</button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal >
    );
}



export default ModalDelete;