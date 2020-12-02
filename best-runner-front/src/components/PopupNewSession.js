import React from 'react';
import FormSession from './Form'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useFormik} from 'formik';
import { addSession } from '../redux/actions';
import { connect } from 'react-redux';

//модальное окно для добавления новой тренировки
function PopupNew(props) {
  const {
    modal,
    toggle
    } = props;

    const formik = useFormik({
    initialValues: {
        id: Date.now().toString(),
        date: '',
        distance: '',
        comment: '',
        type: 'Бег',
    },
    
    onSubmit: values => {
        props.addSession(values);
        formik.resetForm();
        },
    });
   
    return (
    <div>
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Добавить новую тренировку</ModalHeader>
            <ModalBody>
                <FormSession formik={formik} toggle={toggle}/>
            </ModalBody>
        </Modal>
    </div>
    );
}

const mapDispatchToProps = {
    addSession
}
    
export default connect(null, mapDispatchToProps)(PopupNew)