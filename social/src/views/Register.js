import React, { Component } from 'react';
import {Formik, Form, Field} from 'formik';
import {Button, Card} from 'react-bootstrap';
import * as Yup from 'yup';

import axios from 'axios';

const formSchema = Yup.object().shape({
    "first": Yup.string().required("Required"),
    "last": Yup.string().required("Required"),
    "email": Yup.string().required("Required"),
    "password": Yup.string().required("Required"),
    "confirmPassword": Yup.string().required("Required")
     .oneOf([Yup.ref('password'), null], 'Passwords must match')

})

const initialValues = {
    user: '',
    last: '',
    email: '',
    password: ''


}

export default class Register extends Component {

    handleSubmit= ({first, last, email, password}) => {
        axios.post(`http://127.0.0.1:5000/user?first_name=${first}&last_name=${last}&email=${email}&password=${password}`)
        .then(response=>{console.log(response.data)})
    }
    
    render() {
        return (
            <div style={{justifyContent: 'center', alignItems: 'center', display:'flex' }}>
                <Card bg="dark" text="white" style={{ width: '18rem', justifyContent: 'center', alignItems: 'center', display:'flex' }}>
                    <Card.Header>Register</Card.Header>
                    <Card.Body>
                        <Formik initialValues={initialValues}
                                validationSchema={formSchema}
                                onSubmit={
                                    (values)=>{
                                    this.handleSubmit(values);
                                    }
                                }>
                                    <Form>
                                        <label htmlFor="first" className="form-label">First name</label>
                                        <Field name="first" className="form-control"/>
                                        <label htmlFor="last" className="form-label">Last Name</label>
                                        <Field name="last" className="form-control"/>
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <Field name="email" className="form-control"/>
                                        <label htmlFor="password" className="form-label">Password</label>
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
