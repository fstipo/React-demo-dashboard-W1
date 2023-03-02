import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header style={{ backgroundColor: "#fbfbfb", color: "#020202" }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are You Sure You Want to Delete This User?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#f2f2f2", color: "black" }}>
                {/* <h4>Centered Modal</h4> */}
                <p className='display-6'>
                    Are you sure you want to delete this item?
                </p>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#fbfbfb" }}>
                <button className='btn btn-default' onClick={props.onDelete}>Yes</button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal >
    );
}



export default ModalDelete;