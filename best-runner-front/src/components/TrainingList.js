import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Table } from 'reactstrap';
import Training from './Training';
import { filterList, sortList } from '../redux/actions';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function TrainingList (props) {
  
  //состояние элемента Dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  
  const {sessions, filterBy} = props;
  
  //фильтрация данных
  let filteredSessions 
  if (filterBy === 'all') {
    filteredSessions = sessions.map((item) => <Training item={item} key={item.id} />)
  }
  else {
    filteredSessions = sessions.filter((item) => item.type === filterBy).map((item) => <Training item={item} key={item.id} />)
  }
  
  return (
    <>
    <Table>
      <thead>
        <tr>
          <th className="column dropdown-toggle" caret onClick={() => props.sortList('date')}>Дата</th>
          <th className="column " >
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle style={{color: '#212529'}} caret tag="a" >
                Тип тренировки
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => props.filterList('all')}>Все тренировки</DropdownItem>
                <DropdownItem onClick={() => props.filterList('Бег')}>Бег</DropdownItem>
                <DropdownItem onClick={() => props.filterList('Ходьба')}>Ходьба</DropdownItem>
                <DropdownItem onClick={() => props.filterList('Велосипед')}>Велосипед</DropdownItem>
                <DropdownItem onClick={() => props.filterList('Лыжи')}>Лыжи</DropdownItem>
              </DropdownMenu>
          </Dropdown>
          </th>
          <th className="column dropdown-toggle" onClick={() => props.sortList('distance')} caret>Километраж</th>
          <th >Комментарий</th>
          <th >Редактирование</th>
        </tr>
      </thead>
      <tbody>
        {filteredSessions}          
      </tbody>
    </Table>
    
    </>
  );
}

const mapStateToProps = store => {
  return {
      filterBy: store.filterBy,
      sessions: store.sessions
  }
}
const mapDispatchToProps = {
  filterList, 
  sortList
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingList)
