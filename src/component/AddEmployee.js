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
import { addEmployeeData } from "../api/Api";
export default function AddEmployee() {

    //using context 
    const { userData, setUserData } = useContext(addData);
    const navigate = useNavigate();



    const [form, setForm] = useState({
        employeeName: "",
        employeeEmail: "",
        employeeAge: "",
        employeePhone: "",
        employeeAddress: "",
        employeeDescription: ""
    })

    // const [errorForm, setErrorForm] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     address: "",
    //     description: ""
    // })


    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const signupForm = form;
        const response = await addEmployeeData(signupForm); // calling api and sending form data into it
        // localStorage.setItem("user-info", JSON.stringify(response)) we dont need this 
        setUserData(response);
        navigate("/dashboard")

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
                <div>
                    <Form onSubmit={handleSubmit} >
                        <Row>
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12 " controlId="formBasicName">
                                <Form.Label>Name </Form.Label>
                                <Form.Control type="name" onChange={handleChange} name="employeeName" placeholder="Enter employee name" />


                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={handleChange} name="employeeEmail" placeholder="Enter employee email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="text" onChange={handleChange} placeholder="Enter employee Age" name="employeeAge" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" onChange={handleChange} placeholder="Enter employee Phone" name="employeePhone" />

                            </Form.Group>
                           
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" onChange={handleChange} placeholder="Enter address" name="employeeAddress" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" onChange={handleChange} placeholder="Enter description" name="employeeDescription" />

                            </Form.Group>

                            <Button variant="primary" type="submit" onSubmit={handleSubmit}>
                                Submit
                            </Button>
                        </Row>
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