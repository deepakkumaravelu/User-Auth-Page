import React from 'react'
import { useState } from 'react'
import {Container,Form,Button} from "react-bootstrap"
import '../styles/SignUp.css'
import {Link,useNavigate} from "react-router-dom"
const SignUp = () => {
    const [formData,setFormData]=useState({
name:"",
email:"",
password:""
    })
    const handleChange=()=>{
        
    }
  return (
    <Container>
         <h1>Registration Form</h1>
             <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text " name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password " name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Button variant='primary' type='submit'>Register</Button>
                {/* <p>Already have an account</p> */}
                {/* <Link to="/login">Login</Link> */}
             </Form>
    </Container>
  )
}

export default SignUp