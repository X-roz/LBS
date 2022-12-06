import TSidebar from'../sidebar/Tsidebar'
import LogoutIcon from '@mui/icons-material/Logout';
import { useState,useEffect } from 'react';
import TUseFetch from '../TuseFetch'
import { useHistory } from 'react-router'

const Tprofile = () =>{

    const validate = localStorage.getItem('tvalidate');

    const [first_name,setFirstname] = useState('');
    const [last_name,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [owner_phone_number,setOwnernumber] = useState('');
    const [address,setAddress] = useState('');
    const history = useHistory()
    useEffect(() => {
        TUseFetch("http://localhost:4000/trucksignup/get-trucksignup-details",validate)
        .then(res=>{

            setFirstname(res.data.profileData[0].First_name);
            setLastname(res.data.profileData[0].Last_name)
            setEmail(res.data.profileData[0].email)
            setOwnernumber(res.data.profileData[0].owner_phone_number)
            setAddress(res.data.profileData[0].address)


        }).catch(err=>{console.log(err+"fetch not working")})

    },[validate])


    const handleSubmit = () =>{

    }
    const logout = ()=>{
        localStorage.clear('tvalidate');
        history.push('/')
    }


    return(
        <div id="tprofile-container">
        <TSidebar />
            <div id="tprofile-page-content">
                <div id="tprofile-top">
                    <h2>Hi there,</h2>
                    <button onClick={logout}><LogoutIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
                <div id="tprofile-box">
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
                    <label>e-mail</label>
                    <input 
                        type="text" 
                        required
                        value = { email }
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label> Phone Number</label>
                    <input 
                        type="text" 
                        required
                        value = { owner_phone_number }
                        onChange={(e)=>setOwnernumber(e.target.value)}
                    />
                    <label >Address</label>
                    <input 
                        type="text" 
                        required
                        value = { address }
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                    <br />
                    <button>&nbsp;&nbsp;Update the details&nbsp;&nbsp;</button>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Tprofile;