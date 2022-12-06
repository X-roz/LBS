import axios from "axios"
import { useEffect,useState } from "react"
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const DetailsPage = ()=>{

    //const validate = localStorage.getItem("validate")
    const [apiCallDone,setApiCallDone]=useState(false)
    const history = useHistory();
    const location = useLocation();
    const load_id=location.state.load_id;
    const status=location.state.status;

    const [name,setName]=useState("")
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
    const [company_name,setCompanyName]=useState('')

    const [driver1_name,setDriver1Name]=useState("")
    const [driver1_number,setDriver1no]=useState("")
    const [driver2_name,setDriver2Name]=useState("")
    const [driver2_number,setDriver2no]=useState("")

    const[truckprovider_name,setTruckName]=useState('');
    const [loadprovider_name,setLoadName]=useState('')
    const [truck_no,setTruck]=useState("")

    useEffect(()=>{
        
        if(!apiCallDone)
        {
            const query = {
                load_id:load_id
            }

            console.log(status,load_id)

            if(status === "unbooked")
            {
                axios({
                    method:"GET",
                    url:"http://localhost:4000/loaddetails/get-loadbyid",
                    params:query
                }).then(res=>{
                    if(res.data.status === "true")
                    {
                        setName(res.data.loadbyId[0].name);
                        setGoodsName(res.data.loadbyId[0].goods_name);
                        setAmount(res.data.loadbyId[0].amount)
                        setDue(res.data.loadbyId[0].due_date)
                        setTons(res.data.loadbyId[0].tons)
                       
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
                })
            }
            else if(status === "booked" || status === "delivered")
            {
                
                axios({
                    method:"GET",
                    url:"http://localhost:4000/trucklogin/truckload-by-id",
                    params:query
                }).then(res=>{
                        
                        setLoadName(res.data.loadbyId[0].loadprovider_name);    
                        setGoodsName(res.data.loadbyId[0].goods_name);
                        setAmount(res.data.loadbyId[0].amount)
                        setDue(res.data.loadbyId[0].due_date)
                        setTons(res.data.loadbyId[0].tons)
                       
                        setFrom(res.data.loadbyId[0].from)
                        setPickUp(res.data.loadbyId[0].pick_address)
                        setFromPh(res.data.loadbyId[0].from_phone_number)
                        setFromState(res.data.loadbyId[0].from_state)
                        setCompanyName(res.data.loadbyId[0].company_name)
                        setTo(res.data.loadbyId[0].to)
                        setDrop(res.data.loadbyId[0].drop_address)
                        setToPh(res.data.loadbyId[0].to_phone_number)
                        setToState(res.data.loadbyId[0].to_state)  
                        setTruck(res.data.loadbyId[0].truck_no)
                        setTruckName(res.data.loadbyId[0].truckprovider_name)
                        setDriver1Name(res.data.loadbyId[0].driver1_name)
                        setDriver1no(res.data.loadbyId[0].driver1_number)
                        setDriver2Name(res.data.loadbyId[0].driver2_name)
                        setDriver2no(res.data.loadbyId[0].driver2_number)
                })
            }
        }
        setApiCallDone(true);

    },[apiCallDone,load_id,status])

    const backButton =()=>{
        history.push('/booking/user-load-details')
    }

    return(
        <div id="details-con">
            <button id="back" onClick={backButton}> <KeyboardBackspaceIcon />  </button>
            { status === "unbooked" ? (
                
                <div id="det-box">
                    <p>Name : {name}</p>
                    <p>Company Name : {company_name}</p>
                    <p>load id : {load_id}</p>
                    <p id="goos">{goods_name}</p>
                    <br />
                    <div id="googs-det">
                        <p id="h">Goods Details :</p>
                        <p>Tons : {tons} tons</p>
                        <p>amount per tons :  {amount}</p>
                        <p>Due Date : {due_date} days</p>
                    </div>

                    <div id="from-det">
                        <p id="h">From Details :</p>
                        <p>{from}</p>
                        <p>{pick_address}</p>
                        <p>{from_state}</p>
                        <p>ph : {from_phone_number}</p>
                    </div>

                    <div id="to-det">
                        <p id="h">To Details :</p>
                        <p>{to}</p>
                        <p>{drop_address}</p>
                        <p>{to_state}</p>
                        <p>ph : {to_phone_number}</p>
                    </div>

                    <p id="goos">Status : {status}</p>

                </div>

            ):(<p></p>)}
            { (status === "booked" || status === "delivered") ? (

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

                    <p id="goos">
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
                    <p id="goos">{status}</p>
                </div>
            ) :(<div></div>) }
        </div>
        

    )

}


export default DetailsPage;