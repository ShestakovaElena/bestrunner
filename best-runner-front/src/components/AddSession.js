import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PopupNew from './PopupNewSession'

function AddSession (props) {
  
  //состояние элемента PopupNew
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <>
      <div>
        <Button color="info" onClick={toggle} >Add new session</Button>
        <PopupNew modal={modal} toggle={toggle}/>
      </div>
    </>
  );
}

export default AddSession
