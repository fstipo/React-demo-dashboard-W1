import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete(props) {
    console.log(props)
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: "#f2f3f8", color: "#808080" }} closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#f2f2f2", color: "black" }}>
                {/* <h4>Centered Modal</h4> */}
                <p className='fs-4'>
                    {/* <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> */}
                    <span className='ms-2'> 🚫 Are you sure you want to delete this item?</span>
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