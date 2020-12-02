import React from 'react';
import { connect } from 'react-redux';
import { addSession } from '../redux/actions';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function FormSession (props) {
  const {
    toggle, 
    formik
  } = props;

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label for="exampleNumber">Distance</Label>
        <Input
          min="0"
          id="distance"
          name="distance"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.distance}
          placeholder="км"
        />
      </FormGroup>

      <FormGroup>
        <Label for="date">Date</Label>
        <Input
          type="date"
          name="date"
          id="date"
          onChange={formik.handleChange}
          value={formik.values.date}
          placeholder="date placeholder"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleSelect">Type</Label>
        <Input 
          type="select" 
          name="type" 
          id="type" 
          value={formik.values.type} 
          onChange={formik.handleChange}>
          <option value="Бег">Бег</option>
          <option value="Ходьба">Ходьба</option>
          <option value="Велосипед">Велосипед</option>
          <option value="Лыжи">Лыжи</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Comment</Label>
        <Input 
          type="textarea"  
          id="comment"
          name="comment"
          onChange={formik.handleChange}
          value={formik.values.comment}/>
      </FormGroup>
      <Button onClick={toggle} color="success" type="submit">Submit</Button>
    </Form>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addSession: session => dispatch(addSession(session))
  }
}

export default connect(null, mapDispatchToProps)(FormSession)