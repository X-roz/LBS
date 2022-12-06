import axios from 'axios';
import { useState } from 'react';
import TSidebar from '../sidebar/Tsidebar'

const AddTruck = () => {

    const validate = localStorage.getItem('tvalidate');
    const [truck_no,setTruckNo]=useState("")
    const [message,setMessage] =useState("");

    const handleSubmit =(e)=>{

        e.preventDefault();
        const truckNo ={truck_no}
        const query = {
            email:validate
        }

        axios({
            method:"PATCH",
            url:"http://localhost:4000/trucklogin/add-truck-details",
            params:query,
            data:truckNo
        }).then((res)=>{
            if(res.data.status === "true")
            {
                setMessage("truck details updated successfully");
                setTimeout(function(){
                    setMessage("");
                },3000);
            }
            else{
                setMessage("oops problem in adding truck details")
                setTimeout(function(){
                    setMessage("");
                },3000);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div id="tk-container">
            <TSidebar />
            <div id="tk-page-content">
                <div id="tk-top">
                    <h2>ADD LOADS</h2>
                    <p>{message}</p>
                </div>
                <br />
                <br />
                <form id="bb" onSubmit={ handleSubmit}>
                <label>Truck Number</label>
                    <input 
                        type="text" 
                        required        
                        value = { truck_no }
                        onChange = { (e)=>setTruckNo(e.target.value)}
                    />
                    <br />
                    
                     <button >Add Truck</button>
                </form>
            </div>
        </div>
    );

}

export default AddTruck;