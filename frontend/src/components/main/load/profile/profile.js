import Sidebar from "../sidebar/sidebar"
import { useState,useEffect } from "react";
import UseFetch from "../useFetch";
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from 'react-router'

const LoadProfile = ()=>{

    const validate = localStorage.getItem('validate');
    const [first_name,setFirstname] = useState('');
    const [last_name,setLastname] = useState('');
    const [company_name,setCompanyname] = useState('');
    const [email,setEmail] = useState('');
    const [company_phone_number,setCompanynumber] = useState('');
    const [company_address,setAddress] = useState('');
    const history = useHistory()
    useEffect(() => {
        UseFetch("http://localhost:4000/loadprofile/get-profile-data",validate)
        .then(res=>{

            setFirstname(res.data.profileData[0].first_name);
            setLastname(res.data.profileData[0].last_name)
            setCompanyname(res.data.profileData[0].company_name)
            setEmail(res.data.profileData[0].email)
            setCompanynumber(res.data.profileData[0].company_phone_number)
            setAddress(res.data.profileData[0].company_address)


        }).catch(err=>{console.log(err+"fetch not working")})

    },[validate])

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        const loadsignupDetails = { first_name,last_name,company_name,email,company_phone_number,company_address};
        console.log(loadsignupDetails);
    
    }

    const logout = ()=>{
        localStorage.clear('validate');
        history.push('/')
    }

    return(
    <div id="profile-container">
        <Sidebar />
            
        <div id="profile-page-content">
            <div id="profile-top">
                <h2>Hi there,</h2>
                <button onClick={ logout }><LogoutIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
            <div id="profile-box">
            <form  onSubmit = { handleSubmit }>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        required
                        value = { first_name }
                        onChange = { (e)=>setFirstname(e.target.value)}
                    />
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        required
                        value={ last_name }
                        onChange={(e)=>setLastname(e.target.value)}
                    />
                    <label>Company Name</label>
                    <input 
                        type="text" 
                        required
                        value={ company_name }
                        onChange={(e)=>setCompanyname(e.target.value)}
                    />
                    <label>e-mail</label>
                    <input 
                        type="text" 
                        required
                        value = { email }
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label>Company Phone Number</label>
                    <input 
                        type="text" 
                        required
                        value = { company_phone_number }
                        onChange={(e)=>setCompanynumber(e.target.value)}
                    />
                    <label >Company Address</label>
                    <input 
                        type="text" 
                        required
                        value = { company_address }
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                    <br />
                    <button>&nbsp;&nbsp;Update the details&nbsp;&nbsp;</button>
                </form>
            </div>
        </div>
    </div>
    )
}


export default LoadProfile;