import { useState } from "react";
import Headers from '../headers/Header'
import axios from 'axios'
import { useHistory } from "react-router";

const TruckLogin = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [err,setErr]=useState('')
    const history =useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const loginDetails={email,password};
        
        axios({
            method:"POST",
            url:"http://localhost:4000/trucklogin/get-trucklogin-details",
            data:loginDetails
        }).then((res)=>{
            if(res.data.status === "OK")
            {
                const validate = res.data.key;
                localStorage.setItem('tvalidate',validate);
                history.push('/booking/truck-providers');
            }
            if(res.data.status === "NO" )
            {
                setErr(res.data.message);
            }
        }).catch((err)=>{console.log(err)});

    }

    return ( 
        <div className="contentLogin">
            <Headers />
            <h2>Truck login </h2>
            <div className="create">
            <form onSubmit={handleSubmit}>
            <label>E mail</label>
            <input 
                type="text" 
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Password</label>
            <input 
                type="password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <br />
            <p>{err}</p>
            <button>login</button>
            <br />
            <br />
            <div className="link">
                <a href="/booking/signup-for-truck">Create an account for Truck Providers</a>
            </div>

        </form>
        </div>
        
        </div>
     );
}
 
export default TruckLogin;