import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import axios from "axios";
const AddLoad = ()=>{

    const [message,setMessage] =useState("");
    const validate = localStorage.getItem('validate');
    const [from,setFrom] = useState("")
    const [to,setTo] = useState("")
    const [load_id,setLoadId]=useState('');
    const [goods_name,setGoodsName]=useState("")
    const [pick_address,setPickAddress]=useState('')
    const [drop_address,setDropAddress]=useState("")
    const [amount,setAmount] =useState("")
    const [from_phone_number,setFromPhone]=useState("")
    const [to_phone_number,setToPhone]=useState("")
    const [from_state,setFromState]=useState('');
    const [to_state,setToState]=useState('');
    const [due_date,setDueDate]=useState('');
    const [tons,setTons]=useState();

    const handleSubmit =(e)=>{
        e.preventDefault();
        const loadDetails = {load_id,goods_name,amount,tons,from,to,pick_address,drop_address,from_phone_number,to_phone_number,from_state,to_state,due_date}
        
        const query = {
            email:validate
        }
        axios({
            method:"POST",
            url:"http://localhost:4000/loaddetails/add-user-load-details",
            params:query,
            data:loadDetails
        }).then((res)=>{
            if(res.data.status === "id")
            {
                setMessage("load id already exists try different");
                setTimeout(function(){
                    setMessage("");
                },3000);
            }
            else if(res.data.status === "true")
            {
                setMessage("load details added successfully");
                setTimeout(function(){
                    setMessage("");
                },3000);
            }
            else{
                setMessage("oops problem in adding load details")
                setTimeout(function(){
                    setMessage("")
                },4000);
            }
        }).catch((err)=>{
            console.log(err);
        })
    }

    

    return(
        <div  id="container">
            <Sidebar />
            
            <div id="add-page-content">
                <div id="add-top">
                    <h2>ADD LOADS</h2>
                    <p>{message}</p>
                </div>
                <br />
                <br />
            <form onSubmit={ handleSubmit}>
                <p>Goods Details</p>
                <div id="goods-box">
                    <label>Load ID</label>
                    <input 
                        type="text" 
                        required        
                        value = { load_id }
                        onChange = { (e)=>setLoadId(e.target.value)}
                    />
                    <label>Goods Name</label>
                    <input 
                        type="text" 
                        required        
                        value = { goods_name }
                        onChange = { (e)=>setGoodsName(e.target.value)}
                    />
                    <label>No of Tons</label>
                    <input 
                        type="number" 
                        required
                        value = { tons }
                        onChange = { (e)=>setTons(e.target.value)}
                    />
                    <label>Amount per Tons</label>
                    <input 
                        type="number" 
                        required
                        value = { amount }
                        onChange = { (e)=>setAmount(e.target.value)}
                    />
                     <label>Due Date</label>
                    <input 
                        type="number" 
                        required
                        value = { due_date }
                        onChange = { (e)=>setDueDate(e.target.value)}
                    />
                </div>
                <p>From Details</p>
                <div id="from-box">
                    <label>City</label>
                    <input 
                        type="text" 
                        required
                        value = { from }
                        onChange = { (e)=>setFrom(e.target.value)}
                    />
                    <label>Pick up Address</label>
                    <input 
                        type="text" 
                        required
                        value = { pick_address }
                        onChange = { (e)=>setPickAddress(e.target.value)}
                    />
                    <label>Phone Number</label>
                    <input 
                        type="text" 
                        required
                        value = { from_phone_number }
                        onChange = { (e)=>setFromPhone(e.target.value)}
                    />
                    <label>State</label>
                    <input 
                        type="text" 
                        required
                        value = { from_state }
                        onChange = { (e)=>setFromState(e.target.value)}
                    />   
                </div>
             <br />
             <br />
                <p id="box-heading">To Details</p>
                <div id="to-box">     
                    <label>City</label>
                    <input 
                        type="text" 
                        required
                        value = { to }
                        onChange = { (e)=>setTo(e.target.value)}
                    />
                    <label>Drop Address</label>
                    <input 
                        type="text" 
                        required
                        value = { drop_address }
                        onChange = { (e)=>setDropAddress(e.target.value)}
                    />

                    <label>Phone Number</label>
                    <input 
                        type="text" 
                        required
                        value = { to_phone_number }
                        onChange = { (e)=>setToPhone(e.target.value)}
                    />
                    <label>State</label>
                    <input 
                        type="text" 
                        required
                        value = { to_state }
                        onChange = { (e)=>setToState(e.target.value)}
                    />

                </div>
                <button id="button">Add Load</button>
            </form>
            </div>
        </div>
    )
}


export default AddLoad;
