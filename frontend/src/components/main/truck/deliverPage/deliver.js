import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Deliver = ()=>{

    
    const location = useLocation();
    const truck_no=location.state.truckNo
    const validate = localStorage.getItem("tvalidate")
    const [apiCallDone,setApiCallDone]=useState(false)
    const [message,setMessage]=useState('')

    const history = useHistory();

    const [truckCheck,setTruckCheck]=useState(true)
    const [loadprovider_name,setLoadName]=useState('')
    const [company_name,setCompanyName]=useState('')
    const [load_email,setLoadEmail]=useState('')
    const [goods_name,setGoodsName]=useState('');
    const [amount,setAmount]=useState('');
    const [tons,setTons]=useState('')
    const [due_date,setDue]=useState('')
    const [from,setFrom]=useState('');
    const [pick_address,setPickUp]=useState('');
    const [from_phone_number,setFromPh]=useState('')
    const [from_state,setFromState]=useState('')
    const [to,setTo]=useState('');
    const [drop_address,setDrop]=useState('');
    const [to_phone_number,setToPh]=useState('')
    const [to_state,setToState]=useState('')
    const [load_id,setLoadId]=useState("")
    const [driver1_name,setDriver1Name]=useState("")
    const [driver1_number,setDriver1no]=useState("")
    const [driver2_name,setDriver2Name]=useState("")
    const [driver2_number,setDriver2no]=useState("")

    const[truckprovider_name,setTruckName]=useState('');
    

    useEffect(()=>{

        if(!apiCallDone)
        {
            const query={
                truck_no:truck_no,
                email:validate
            }

            axios({
                method:"GET",
                url:"http://localhost:4000/trucklogin/get-truckload",
                params:query
            }).then(res=>{
                if(res.data.status==="true")
                {
                    setGoodsName(res.data.details.goods_name);
                    setAmount(res.data.details.amount)
                    setDue(res.data.details.due_date)
                    setTons(res.data.details.tons)
                    setLoadName(res.data.details.loadprovider_name);
                    setFrom(res.data.details.from)
                    setPickUp(res.data.details.pick_address)
                    setFromPh(res.data.details.from_phone_number)
                    setFromState(res.data.details.from_state)
                    setCompanyName(res.data.details.company_name)
                    setTo(res.data.details.to)
                    setDrop(res.data.details.drop_address)
                    setToPh(res.data.details.to_phone_number)
                    setToState(res.data.details.to_state)
                    setLoadId(res.data.details.load_id)
                    setTruckName(res.data.details.truckprovider_name)
                    setMessage("")
                    setLoadEmail(res.data.details.load_email)

                    setDriver1Name(res.data.details.driver1_name)
                    setDriver1no(res.data.details.driver1_number)
                    setDriver2Name(res.data.details.driver2_name)
                    setDriver2no(res.data.details.driver2_number)
                }
                else if(res.data.status === "false")
                {
                    setTruckCheck(false)
                }
            })

            setApiCallDone(true)
        }
    },[apiCallDone,truck_no,validate])


    const backButton =()=>{
        history.push('/booking/truck-providers')
    }

    const handleSubmit = ()=>{
    
        const query={
            load_id:load_id,
            name:truckprovider_name,
            email:load_email,
            goods_name:goods_name,
            truck_no:truck_no
        }

        axios({
            method:"PATCH",
            url:"http://localhost:4000/trucklogin/deliverstatus",
            params:query
        }).then(res=>{
            if(res.data.status === "true")
            {
                setMessage("updated Successful")
                history.push('/booking/truck-providers')
            }
            else
            {
                setMessage("something went wrong")
            }
        })
    }

    return(
        <div id="d-con">
           <p id="msg">{message}</p>
           <button id="back" onClick={backButton}> <KeyboardBackspaceIcon />  </button>
           {
               truckCheck ? 
               (
                <div id="book-box">
                <p id="googs">{company_name} -- &gt; {loadprovider_name} &nbsp;&nbsp;&nbsp; Goods : {goods_name}</p>
                <p>Load Id : {load_id}</p>
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

                <p id="googs">
                    {truckprovider_name} -- &gt; {truck_no}
                </p>

                <div>
                    <p>Driver's Name : {driver1_name}</p>
                    <p>Ph : {driver1_number}</p>
                    {driver2_name === "" ?
                     (<p></p>) :(
                        <div>
                            <p>2nd Driver's Name{driver2_name}</p> 
                            <p> ph: {driver2_number}</p>
                        </div>
                    )
                    }
                </div>
        

                <button id="dk" onClick={handleSubmit}>Delivered</button>
                </div>
               ) : (
                   <div id = "book-box">
                       <p id="empty">Hurry up !! To Book the Loads</p>
                   </div>
               )
           }
    </div>
    )
}


export default Deliver;