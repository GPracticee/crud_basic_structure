import { useState } from 'react';
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../api/Api';
import { setTokenData } from '../constant/Constant';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {

    
    const navigate = useNavigate(); 
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    async function handleSubmit(event){
        event.preventDefault();
        console.log(form);
        const response = await login(form);
        console.log(response);
        if(response.status === "success"){
            toast.success(response.message)
            setTokenData(response);
            setTimeout(()=>{
                navigate("/dashboard")
            },2000)
        }
        else{
            toast.error(response.message)
        }
    }

    function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value})
    }



    return (
        <>
        <Navbar />
        <div className='container col-lg-5 mt-4 mb-4 '>
        <h1>Login Here</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>

        </>
    )
}