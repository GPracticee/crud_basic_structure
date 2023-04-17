import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { addData } from '../context/ContextProvider';
import { updateData } from '../context/ContextProvider';
import { deleteData } from '../context/ContextProvider';
import Table from 'react-bootstrap/Table';
import NavBar from './Navbar';
//for material ui 
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
import { getUserData } from '../api/Api';
import { deleteUser } from '../api/Api';



export default function Dashboard() {
    const [getData, setData] = useState([]);

    // use context
    const { userData, setUserData } = useContext(addData);
    const { updateUserData, setUpdateUserData } = useContext(updateData);
    const { deleteUserData, setDeleteUserData } = useContext(deleteData);

    async function callApi() {
        const response = await getUserData();
        setData(response.data);

    }
    useEffect(() => {
        callApi();
    }, []);

    const deleteuser = async (id) => {
        const response = await deleteUser(id);
        console.log(response);
        setDeleteUserData(response)
        callApi();
    }

    console.log(getData)


    return (
        <>

            <NavBar />

            <div className='container mt-2 '>
                <h2>employee Dashboard</h2>
            </div>
            <div className="mt-5">
                <div className="container">
                    <div className="add_btn ">
                        <NavLink className="btn btn-primary" to="/addemployee">Add data</NavLink>
                    </div>
                    {
                        userData ?
                            <>
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>success!</strong> User Added successfully!!
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            </> : ""
                    }

                    {
                        updateUserData ?
                            <>
                                <div className="alert alert-success alert-dismissible fade show" role="alert">
                                    <strong>success!</strong> User updated successfully!!
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </> : ""
                    }

                    {
                        deleteUserData ?
                            <>
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>success!</strong> Data deleted Succesfully !!!
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            </> : ""
                    }

                    <Table striped bordered hover>
                        <thead className='table-dark'>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>PhoneNo</th>
                                <th>options</th>

                            </tr>
                        </thead>
                        <tbody>
                            {

                                getData.map((obj, value) => {
                                    return (
                                        <>
                                            <tr key={value}>
                                                <td>{value + 1}</td>
                                                <td>{obj.employeeName}</td>
                                                <td>{obj.employeeEmail}</td>
                                                <td>{obj.employeePhone}</td>

                                                <td className='justify-content-between d-flex'>
                                                    <NavLink to={`/view/${obj._id}`}><button className='btn btn-success'><VisibilityIcon /></button></NavLink>
                                                    <NavLink to={`/edit/${obj._id}`}>   <button className='btn btn-primary'><CreateIcon /></button></NavLink>
                                                    <button className='btn btn-danger' onClick={() => { deleteuser(obj._id) }}><DeleteIcon /></button>
                                                </td>
                                            </tr>

                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </Table>

                </div>



            </div>
        </>
    )
}