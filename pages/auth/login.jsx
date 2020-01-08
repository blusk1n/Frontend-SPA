import React from 'react';
import Nav from '../../components/nav';
import  NotAuth from "../../layouts/notAuth"
import {Container, Row, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import "./login.css"


class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div>
            <NotAuth >
                 <Container  >
                    <Row className="justify-content-md-center login">
                        <Col md="4" className="App my-auto " >
                        <h2>Sign In</h2>
                    <Form className="form">
                        <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                        </FormGroup>
                    <Button>Submit</Button>
                    
                    </Form>
                    <a href="/auth/register" ><small>Sign-UP</small></a>    
                    <a href="/auth/forgetPass" className="text-left text-sm-left ml-2" ><small>forget-password</small></a> 
                        </Col>
                    </Row>
                </Container>
            </NotAuth>
        


          
        </div>
    )
    }
}

export default Login;