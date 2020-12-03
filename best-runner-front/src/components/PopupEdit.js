import React from 'react';
import FormSession from './Form'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useFormik} from 'formik';
import { editSession } from '../redux/actions';
import { connect } from 'react-redux';

//модальное окно для редактирования тренировки
function PopupEdit(props) {
  const {
      modal,
      toggle, 
      item
    } = props;

  const formik = useFormik({
    initialValues: {
        id: item.id,
        date: item.date,
        distance: item.distance,
        comment: item.comment,
        type: item.type,
    },
    
    onSubmit: values => {
      props.editSession(values);
    },
  });
  
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Изменить данные тренировки от {item.date}</ModalHeader>
        <ModalBody>
          <FormSession formik={formik} toggle={toggle}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapDispatchToProps = {
    editSession
  }
    
export default connect(null, mapDispatchToProps)(PopupEdit)