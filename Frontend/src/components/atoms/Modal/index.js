import BsModal from 'react-bootstrap/Modal';
import { Button } from '@material-ui/core';

const Modal = ({
    show,
    handleClose,
    Error,
    setmodelName,
    setmodelYear,
    setmodelLocation,
    setmodelSkill,
    Value,
    modelName,
    modelYear,
    modelLocation, 
    modelSkill,
    setError
}) => {
    return <BsModal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <BsModal.Header closeButton>
            <BsModal.Title className="ModelTitle">Add Person</BsModal.Title>
        </BsModal.Header>
        <BsModal.Body>
            <input className={Error === 'Name' ? 'ModelfeildError' : 'Modelfeild'} onChange={(e) => setmodelName(e.target.value)} placeholder="Name" />
            <input className={Error === 'Year' ? 'ModelfeildError' : 'Modelfeild'} onChange={(e) => setmodelYear(e.target.value)} placeholder="Years of experience" />
            <input className={Error === 'Location' ? 'ModelfeildError' : 'Modelfeild'} onChange={(e) => setmodelLocation(e.target.value)} placeholder="Current location" />
            <input className={Error === 'Skill' ? 'ModelfeildError' : 'Modelfeild'} onChange={(e) => setmodelSkill(e.target.value)} placeholder="Skills" />
        </BsModal.Body>
        <BsModal.Footer>
            <Button className="ModelButton" variant="dark" onClick={handleClose}>
                <h6 className="ModelCancel">Close</h6>
            </Button>
            <Button variant="primary" onClick={_ => Value(modelName, modelYear, modelLocation, modelSkill, setError)}>
                <h6 className="ModelSubmite" >Submit</h6>
            </Button>

        </BsModal.Footer>
    </BsModal>
}

export default Modal;