import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from "./Navbar";
import { Row } from "react-bootstrap";
import { useContext, useState } from "react";

// importing addData from use context for its use
import { addData } from "../context/ContextProvider";
// for react-tostify
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from "react-toastify";
import { signup } from "../api/Api";
export default function Signup() {
    const  navigate = useNavigate()
    //using context 
    const { userData, setUserData } = useContext(addData);
    
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })

    // const [errorForm, setErrorForm] = useState({
    //     name: "",
    //     email: "",
    //     password: "",
    // })


    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const signupForm = form;
        const response = await signup(signupForm); // calling api and sending form data into it
        localStorage.setItem("user-info", JSON.stringify(response))
        setUserData(response);
        // navigate("/login")

        // Object.keys(signupForm).forEach(v => {
        //     if (signupForm[v] = "") {
        //         setErrorForm((preState) => ({ ...preState, [v]: "Required Field" }))
        //     }
        // })

        // if (Object.values(signupForm).every((v) => v !== "")) {
        //     toast.success("Form submitted");
        // }
        // else {
        //     toast.error("Required Field")
        // }
    }


    return (
        <>
            <NavBar />
            {
                userData ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>success!</strong> User Added successfully!!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            <div className="container pt-4 pb-4">
            <h1>Sigup Here</h1>
                <div>
                    <Form onSubmit={handleSubmit} >
                        <Row>
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12 " controlId="formBasicName">
                                <Form.Label>Name </Form.Label>
                                <Form.Control type="name" onChange={handleChange} name="name" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={handleChange} name="email" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPhone">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={handleChange} placeholder="Enter password" name="password" />
                            </Form.Group>

                            <Button variant="danger" type="submit" onSubmit={handleSubmit}> 
                               <Link to="/login"> Submit</Link>
                            </Button>
                            
                        </Row>
                        <br />
                            <h6>allready a user <Link to="login">Login here</Link></h6>
                            
                            <h6><Link to="/forget">forget password</Link></h6>
                    </Form>
                    {/* <ToastContainer

                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    /> */}

                </div>
            </div>
        </>
    )
}