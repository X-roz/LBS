import { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router";

const LoadSignup = () => {
    
    const [first_name,setFirstname] = useState('');
    const [last_name,setLastname] = useState('');
    const [company_name,setCompanyname] = useState('');
    const [gender,setGender] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [company_phone_number,setCompanynumber] = useState('');
    const [company_address,setAddress] = useState('');
    const [err,setErr] =useState("")
    const history=useHistory()

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        
        const loadsignupDetails = { first_name,last_name,company_name,gender,email,password,company_phone_number,company_address};

        console.log(loadsignupDetails);
        axios({
            method:"POST",
            url:"http://localhost:4000/loadsignup/add-loadsignup-details",
            data:loadsignupDetails
        }).then((res)=>{
            if(res.data.status === "OK")
            {
                history.push('/booking/login-for-load')
            }
            else{
                setErr(res.data.message);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    return ( 
        <div className="contentSignup">
            <h2>load Signup page</h2>
            <div className="create">
                <form  onSubmit = { handleSubmit }>
                    <label>First Name</label>
                    <input 
                        type="text" 
                        required
                        value = { first_name }
                        onChange = { (e)=>setFirstname(e.target.value)}
                    />
                    <label>last Name</label>
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
                    <label>Gender</label>
                    <br />
                    <select 
                        value = { gender }
                        onChange={(e)=>setGender(e.target.value)}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="others">others</option>
                    </select>
                    <br />
                    <br />
                    <label>email</label>
                    <input 
                        type="text" 
                        required
                        value = { email }
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                     <p>{ err }</p>
                    <label>password</label>
                    <input 
                        type="password" 
                        required
                        value = { password }
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label>Company Phone Number</label>
                    <input 
                        type="text" 
                        required
                        value = { company_phone_number }
                        onChange={(e)=>setCompanynumber(e.target.value)}
                    />
                    <label>Company Address</label>
                    <input 
                        type="text" 
                        required
                        value = { company_address }
                        onChange={(e)=>setAddress(e.target.value)}
                    />
                    <button>Signup</button>
                </form>
            </div>
        </div>
     );
}
 
export default LoadSignup;