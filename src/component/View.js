import { useEffect, useState } from 'react';
import NavBar from './Navbar';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'; // for email icon
import WorkIcon from '@mui/icons-material/Work'; // for work icon
import { IMAGE_URL } from '../Url/Url';
import InstallMobileIcon from '@mui/icons-material/InstallMobile'; // for mobile
import LocationOnIcon from '@mui/icons-material/LocationOn'; // for location
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { singleUserData, deleteUser } from '../api/Api';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function View() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [singleData, setSingleData] = useState([]);
    useEffect(() => {
        async function getSingleData() {
            const response = await singleUserData(id);
            setSingleData(response.data)
        }
        getSingleData()
    }, [])

    // for delete user 
    const deleteuser = async (id) => {
        const response = await deleteUser(id);
        console.log(response);
        navigate("/dashboard")
    }
    return (
        <>
            <NavBar />
            <div className='container mt-3'>
                <h1 style={{ fontWeight: 200 }}>Welcome {singleData.employeeName}</h1>
                <Card sx={{ maxWidth: 600 }}>
                    <CardContent>
                        <div className='add_btn mx-2' >
                            <div>
                                <NavLink to={`/edit/${singleData._id}`}><button className='btn btn-primary '><CreateIcon /></button></NavLink>
                                <NavLink to={"/"}><button className='btn btn-danger' onClick={() => deleteuser(singleData._id)}><DeleteIcon /></button></NavLink>
                            </div>
                        </div>
                        <div className='row '>
                            <div className='left_view col-lg-6 col-md-6 col-12  p-4'>
                                <img src={IMAGE_URL + "profile.png"} width={75} alt="profile" />
                                <h3 className='mt-3' >Name: <span> {singleData.employeeName}</span></h3>
                                <h3 className='mt-3' >Age:<span> {singleData.employeeAge}</span></h3>
                                <p className='mt-3'><EmailIcon /> Email:<span> {singleData.employeeEmail}</span></p>
                                <p className='mt-3'><WorkIcon /> Occupation:<span> FullStack Devloper</span></p>
                            </div>
                            <div className='right_view  col-lg-6 col-md-6 col-12'>
                                <p className='mt-5 pt-5'><InstallMobileIcon /> Mobile: <span>{singleData.employeePhone}</span></p>
                                <p className='mt-3 '><LocationOnIcon />Location: <span>{singleData.employeeAddress}</span></p>
                                <p className='mt-3 p-2'>Description: <span> {singleData.employeeDescription}</span></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}