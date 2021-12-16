import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import {Button, Card} from 'react-bootstrap';

export default class EditProfile extends Component {
    render() {
        return (
            <div style={{justifyContent: 'center', alignItems: 'center', display:'flex' }}>
                <Card bg="dark" text="white" style={{ width: '18rem', justifyContent: 'center', alignItems: 'center', display:'flex' }}>
                    <Card.Header>Edit Profile</Card.Header>
                    <Card.Body>
                        <Formik>
                            <Form>
                                <label htmlFor="first" className="form-label">First name</label>
                                <Field name="first" className="form-control"/>
                                <br/>
                                <label htmlFor="last" className="form-label">Last Name</label>
                                <Field name="last" className="form-control"/>
                                <br/>
                                <label htmlFor="email" className="form-label">Email</label>
                                <Field name="email" className="form-control"/>
                                <br/>
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field name="password" className="form-control" type="password"/>
                                <br/>
                                <label htmlFor="password" className="form-label">Confirm</label>
                                <Field name="password" className="form-control" type="password"/>
                                <br/>
                                <Button variant = "warning" type="submit">Login</Button>
                            </Form>
                        </Formik>  
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
