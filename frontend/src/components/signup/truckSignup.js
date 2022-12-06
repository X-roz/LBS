import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
const TruckSignup = () => {

    const [First_name,setFirstname] =useState('');
    const [Last_name,setLastname] =useState('');
    const [Gender,setGender] =useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [owner_phone_number,setOwnernumber] =useState('');
    const [address,setAddress]=useState('');
    const [err,setErr] =useState("")
    const history = useHistory();
    
    const handleSubmit=(e)=>{

        e.preventDefault();
        const signupDetails = {First_name,Last_name,Gender,email,password,owner_phone_number,address};
        console.log(signupDetails)
        axios({
            method: 'post',
            url: 'http://localhost:4000/trucksignup/add-trucksignup-details',
            data: signupDetails
          }).then((res)=>{
            if(res.data.status === "OK")
            {
                console.log(res);
                history.push('/booking/login-for-truck')
            }
            else{
                setErr(res.data.message);
            }
        })
        
    }

    return ( 
        <div className="contentSignup">
            <h2>Truck sign up</h2>
            <div className="create">
                <form onSubmit= { handleSubmit }>
                    <label>First Name</label>
                    <input 
                        type="text"
                        required 
                        value={ First_name }
                        onChange={(e)=>setFirstname(e.target.value)}
                    />
                    <label>Last Name</label>
                    <input 
                        type="text"
                        required
                        value={ Last_name }
                        onChange={(e)=>setLastname(e.target.value)}
                    />
                    <label>Gender :</label>
                    <br />
                    <select
                        value={ Gender }
                        onChange={(e) => setGender(e.target.value)}
                    >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="others">Others</option>
                    </select>
                    <br />
                    <br />
                    <label>email</label>
                    <input 
                        type="text"
                        required
                        value={ email }
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <p>{ err }</p>
                    <label>Password</label>
                    <input 
                        type="password"
                        required
                        value={ password }
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label>Owner Phone Number</label>
                    <input 
                        type="number"
                        required
                        value={ owner_phone_number }
                        onChange={(e)=>setOwnernumber(e.target.value)}
                    />
                    <label>Address</label>
                    <input 
                        type="text"
                        required
                        value={ address }
                        onChange={(e)=>setAddress(e.target.value)}
                    />

                    <button>sign up</button>
                </form>
            </div>
        </div>
     );
}
 
export default TruckSignup;