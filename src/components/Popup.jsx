import  { Button, Form } from 'react-bootstrap';
import Template from './Template'
import './styles/styles.css'

export default function Popup() {

  return (
    <div className='popup'>
      <Form>

        <Form.Group>
          <Form.Label>Job Title</Form.Label>
          <Form.Control type="text" placeholder="Enter your title." />
        </Form.Group>

        <Form.Group>
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Enter your company." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
    </div>
  )
}
