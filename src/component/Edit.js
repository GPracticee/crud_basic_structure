import { useContext, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from "./Navbar";
import { Alert, Row } from "react-bootstrap";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { editUserData, singleUserData } from '../api/Api';

// context data 
import { updateData } from '../context/ContextProvider';




export default function Edit() {
    const { id } = useParams();
    const navigate = useNavigate()

    const { updateUserdata, setUpdateUserData } = useContext(updateData);




    const [form, setForm] = useState({
        employeeName: "",
        employeeEmail: "",
        employeeAge: "",
        employeePhone: "",
        employeeAddress: "",
        employeeDescription: ""
    })

    const [errorForm, setErrorForm] = useState({
        employeeName: "",
        employeeEmail: "",
        employeeAge: "",
        employeePhone: "",
        employeeAddress: "",
        employeeDescription: ""
    })

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        async function getSingleData() {
            const response = await singleUserData(id);
            //    console.log(response);
            setForm(response.data);
            //    console.log(form)

        }
        getSingleData()
    }, []);

    async function handleUpdate(event) {
        event.preventDefault();
        delete form._id; // for deleting id it should not repeat itself
        const response = await editUserData(id, form);
        setUpdateUserData(response);
        navigate(`/view/${id}`)


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

    // const [singleData, setSingleData] = useState([]);


    return (
        <>
            <NavBar />
            {
                updateUserdata ?
                    <>
                        <Alert className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>success!</strong> User Added successfully!!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </Alert>
                    </> : ""
            }
            <div className="container pt-4 pb-4">
                <div>
                    <Form onSubmit={handleUpdate} >
                        <Row>
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12 " controlId="formBasicName">
                                <Form.Label>Name </Form.Label>
                                <Form.Control type="text" onChange={handleChange} name="employeeName" value={form.employeeName} />


                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={handleChange} name="employeeEmail" value={form.employeeEmail} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPhone">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" onChange={handleChange} name="employeeAge" value={form.employeePhone} />

                            </Form.Group>

                            {/* <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={handleChange} placeholder="Enter password" name="password" value={form.password} />

                            </Form.Group> */}
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" onChange={handleChange} name="employeePhone" value={form.employeePhone} />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" onChange={handleChange} name="employeeAddress" value={form.employeeAddress} />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6 col-md-6 col-12" controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" onChange={handleChange} name="employeeDescription" value={form.employeeDescription} />

                            </Form.Group>

                            <Button variant="primary" type="submit" onSubmit={handleUpdate}>
                                Submit
                            </Button>
                        </Row>
                    </Form>
                    <ToastContainer

                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />

                </div>


            </div>
        </>
    )
}