import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteSession } from '../redux/actions';
import { Button } from 'reactstrap';
import PopupEdit from './PopupEdit'


function Training ({deleteSession, ...props}){
  
  //состояние элемента PopupEdit
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  let {item} = props
    return (
      
        <tr id={item.id}>
          <th>{item.date}</th>
          <td>{item.type}</td>
          <td>{item.distance}</td>
          <td>{item.comment}</td>
          <td>
            <Button style={{marginRight:"20px"}} size="sm" onClick={toggle} color="success" >Edit</Button>
            <Button size="sm" onClick={() => deleteSession(item.id)} color="danger">Del</Button>
            <PopupEdit modal={modal} toggle={toggle} item={item}/></td>
          
        </tr>
    );
    
}

const mapDispatchToProps = {
  deleteSession 
}

export default connect(null, mapDispatchToProps)(Training)