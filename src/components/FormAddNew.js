
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const FormAddNew = (props) => {
    return (

        <>
            <Container>
                <br /><br />
                <Form>
                    <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Button variant="primary">Create</Button>
                </Form>
            </Container>
        </>

    )
}
export default FormAddNew;