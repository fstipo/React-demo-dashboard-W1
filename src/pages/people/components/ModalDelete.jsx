import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({ onHide, onDelete, ...props }) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: "#f2f3f8", color: "#808080" }}>

                <Modal.Title id="contained-modal-title-vcenter">
                    Delete item
                </Modal.Title>
                <button type="button" className="btn-close btn-close-dark" aria-label="Close" onClick={onHide} />
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#f2f2f2", color: "black" }}>
                {/* <h4>Centered Modal</h4> */}
                <p className='fs-3'>
                    {/* <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> */}

                    <i className="fas fa-ban" style={{ color: "red" }}></i>
                    <span className='ms-2'> Are you sure you want to delete this item?</span>
                </p>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#fbfbfb" }}>
                <Button className='btn btn-danger' onClick={onDelete}>Yes</Button>
                <Button onClick={onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalDelete;