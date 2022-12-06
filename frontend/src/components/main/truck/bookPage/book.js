import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Select from 'react-select'

const Book = ()=>{

    const location = useLocation();
    const history = useHistory();
    const id=location.state.load_id
    const [message,setMessage]=useState('')

    const action = location.state.action
    const validate = localStorage.getItem("tvalidate")

    const truck_email=validate
    const [apiCallDone,setApiCallDone]=useState(false)

    const load_id=id;

    const [goods_name,setGoodsName]=useState('');
    const [amount,setAmount]=useState('');
    const [tons,setTons]=useState('')
    const [due_date,setDue]=useState('')

    const [loadprovider_name,setLoadName]=useState('')
    const truckprovider_name = location.state.name

    const [from,setFrom]=useState('');
    const [pick_address,setPickUp]=useState('');
    const [from_phone_number,setFromPh]=useState('')
    const [from_state,setFromState]=useState('')

    const [load_email,setLoadEmail]=useState('')

    const [to,setTo]=useState('');
    const [drop_address,setDrop]=useState('');
    const [to_phone_number,setToPh]=useState('')
    const [to_state,setToState]=useState('')

    const [company_name,setCompanyName]=useState('')

    const [truck_no,setTruck] =useState([])
    const [driver1_name,setDriver1Name]=useState('');
    const [driver1_number,setDriver1No]=useState('')
    const [driver2_name,setDriver2Name]=useState('');
    const [driver2_number,setDriver2No]=useState('')

    //const [truck_email,setTruckEmail]=useState('')
   

    useEffect(()=>{

        if(!apiCallDone){
        const query = {
            load_id:id
        }
        axios({
            method:"GET",
            url:"http://localhost:4000/loaddetails/get-loadbyid",
            params:query
        }).then((res)=>{
            if(res.data.status === "true")
            {
                
                setLoadEmail(res.data.loadbyId[0].email)
                setGoodsName(res.data.loadbyId[0].goods_name);
                setAmount(res.data.loadbyId[0].amount)
                setDue(res.data.loadbyId[0].due_date)
                setTons(res.data.loadbyId[0].tons)
                setLoadName(res.data.loadbyId[0].name);
                setFrom(res.data.loadbyId[0].from)
                setPickUp(res.data.loadbyId[0].pick_address)
                setFromPh(res.data.loadbyId[0].from_phone_number)
                setFromState(res.data.loadbyId[0].from_state)
                setCompanyName(res.data.loadbyId[0].company_name)
                setTo(res.data.loadbyId[0].to)
                setDrop(res.data.loadbyId[0].drop_address)
                setToPh(res.data.loadbyId[0].to_phone_number)
                setToState(res.data.loadbyId[0].to_state)

            
            }
            else
            {
                console.log("error in fetching load details")
            }
        })
            setApiCallDone(true)
        }
    },[apiCallDone,id,validate])

   
    const backButton =()=>{
        history.push('/booking/loads')
    }

    const selectevent = (selected) =>{
        setTruck(selected.value)
    }

    const handle = (e)=>{
        e.preventDefault()
        console.log(driver1_name,driver1_number,driver2_name,driver2_number,load_email,truck_no,loadprovider_name,truckprovider_name,company_name)

        const truckloadDetails ={driver1_name,
            driver1_number,
            driver2_name,
            driver2_number,
            load_email,
            truck_email,
            truck_no,
            loadprovider_name,
            truckprovider_name,
            company_name,
            load_id,
            goods_name,
            amount,
            tons,
            from,
            to,
            pick_address,
            drop_address,
            from_phone_number,
            to_phone_number,
            from_state,
            to_state,
            due_date} 

            axios({
                method:"POST",
                url:"http://localhost:4000/trucklogin/add-truckload",
                data:truckloadDetails
            }).then((res)=>{
                
                if(res.data.status === "true")
                {
                    setMessage("booked successfully");
                    setTimeout(function(){
                        setMessage("");
                        history.push('/booking/loads')
                    },3000);
                }
                else
                {
                    setMessage(res.data.message);
                    setTimeout(function(){
                        setMessage("");
                    },6000);  
                }
            })
    }

    return(
       <div id="con">
           <p id="msg">{message}</p>
           <button id="back" onClick={backButton}> <KeyboardBackspaceIcon />  </button>
           <div id="book-box">
                <p id="googs">{goods_name}</p>
                <br />
                <div id="googs-book">
                    <p id="h">Goods Details :</p>
                    <p>Tons : {tons} tons</p>
                    <p>amount per tons :  {amount}</p>
                    <p>Due Date : {due_date} days</p>
                </div>

                <div id="from-book">
                    <p id="h">From Details :</p>
                    <p>{from}</p>
                    <p>{pick_address}</p>
                    <p>{from_state}</p>
                    <p>ph : {from_phone_number}</p>
                </div>

                <div id="to-book">
                    <p id="h">To Details :</p>
                    <p>{to}</p>
                    <p>{drop_address}</p>
                    <p>{to_state}</p>
                    <p>ph : {to_phone_number}</p>
                </div>

          <br />

          <form onSubmit={handle} >
              <div id="driver-box">
            <div id="driver">

            <label>Truck No.</label>
            <Select id="se"
                onChange={ selectevent }
                options = { action } />
            
            <label>Driver's Name</label>
                    <input 
                        type="text" 
                        required        
                        value = { driver1_name }
                        onChange = { (e)=>setDriver1Name(e.target.value)}
            />
            <label>Driver's Number </label>
                    <input 
                        type="number" 
                        required
                        value = { driver1_number }
                        onChange = { (e)=>setDriver1No(e.target.value)}
            />
            <label>Driver's Name (Optional)</label>
                    <input 
                        type="text" 
                        value = { driver2_name }
                        onChange = { (e)=>setDriver2Name(e.target.value)}
            />
            <label>Driver's Number (Optional) </label>
                    <input 
                        type="number" 
                        value = { driver2_number }
                        onChange = { (e)=>setDriver2No(e.target.value)}
            />               

            </div>
            </div>
            <button id="bk">Book</button>
          </form>
        
       </div>
    </div>
    )


}

export default Book;