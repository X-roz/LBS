import { useEffect, useState } from 'react';
import TSidebar from '../sidebar/Tsidebar';
import axios from "axios"
import { useHistory } from "react-router";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const TruckProvider = () => {

    const [apiCallDone,setApiCallDone] = useState(false)
    const [name,setName]=useState("")
    const validate = localStorage.getItem("tvalidate");
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const history = useHistory();
    const [msg,setMsg]=useState('')
    const [dataCheck,setDataCheck]=useState(true)

    useEffect(()=>{
        
        if(!apiCallDone){
        const query = {
            email:validate
        }
        axios({
            method:"GET",
            url:"http://localhost:4000/trucklogin/get-truckstatus",
            params:query
        }).then((res)=>{
            if(res.data.status === "true")
            {
                setLoading(false)
                
                setName(res.data.name)
                setData(res.data.trucks)
            }
            else{
                setDataCheck(false)
                setName(res.data.name)
            }
        })
        setApiCallDone(true)
    }
    },[apiCallDone,data,validate])
   
    const handleClick = (truckno,e)=>{
       
        history.push(
            {
                pathname:"/booking/truck-loads-deliver",
                state:{truckNo:truckno}
            }
        )
    }

    const deleteClick = (truck_no,e)=>{
        
        
        const query = {
            email:validate,
            truck_no:truck_no
        }

        axios({
            method:"DELETE",
            url:"http://localhost:4000/trucklogin/delete-truck-details",
            params:query
        }).then(res=>{
            if(res.data.status === "true")
            {
                setMsg("deleted Successfully");
                setTimeout(()=>{
                    setMsg("")
                },3000)
            }
            else
            {
                setMsg("something went wrong");
                setTimeout(()=>{
                    setMsg("")
                },3000)
            }
        })

    }

    return ( 
        <div id="truck-container">
            <TSidebar />
            <div id="tru-content">
                <div id="tru-top">
                    <h2>{ name }</h2>
                    <p>{msg}</p>
                </div>
                {dataCheck ? (
                    <div>
                        {loading ?(<p id="loading">loading...</p>) : (
                    <div>
                        {data.map(truck =>(
                            <div className='truck_preview' key={truck.truck_no}>
                                <div id="number">{ truck.truck_no }</div>
                                <div id="stat">
                                    {truck.truck_status === "Idle" ?(<p id="idle">{ truck.truck_status } </p>) : <p id="prog">{ truck.truck_status } </p> }
                                </div>
                                <button id="view" onClick={(e) => handleClick(truck.truck_no, e)}>View Details</button>
                                <button id="delete" onClick={(e)=>deleteClick(truck.truck_no,e)}><DeleteTwoToneIcon /></button>
                            </div>
                        ))}
                    </div>
                )}
                    </div>
                ) : (<p id="no-load">add truck to book loads </p>)}
            </div>
        </div>
     );
}
 
export default TruckProvider;