import Sidebar from "../sidebar/sidebar";
import UseFetch from "../useFetch";
import { useState,useEffect } from "react";
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import ControlPointIcon from '@mui/icons-material/ControlPoint';


const LoadProvider =  () => {
    
    const [apiCallDone,setApiCallDone] = useState(false)
    const validate = localStorage.getItem('validate');
    const [data_check,setDataCheck]=useState('');
    const [company_name,setCompanyName] = useState("");
    const [data,setData] = useState([]);
    const [loading,setLoading]=useState(false);
    
    

    useEffect(() => {
        if(!apiCallDone){
            UseFetch("http://localhost:4000/loaddetails/get-user-load-details",validate)
            .then(res=>{
                setDataCheck((res.data.status === "false")?false:true)
                if(data_check === true)
                {
                    setCompanyName(res.data.userLoadDetails[0].company_name)
                    setData(res.data.userLoadDetails)
                    setLoading(true)
                   
                } 
                else
                {
                    setCompanyName(res.data.company_name);
                    setLoading(true)
                }
                setApiCallDone(true)
            }).catch(err=>{console.log(err+"fetch not working")})
        }
    },[data_check,data,validate,apiCallDone,loading])
    

    return ( 
    
        <div id="outer-container">
            <Sidebar />
            <div id="content">
                <div id="top">
                    <h2>{ company_name } </h2>
                    <p id="icon"> <NotificationsActiveTwoToneIcon />&nbsp;&nbsp;&nbsp; Notification </p>
                </div>
                
                {loading ? (
                    <div>
                        {data_check ? ( <p></p> ) : (  <div id="no-load"><h3><ControlPointIcon /></h3> <p>Need to add loads</p> </div>) }
                    </div>
                ) : (

                    <div id="no-load">
                        <p>Loading .... </p>
                    </div>

                )}
                
                {data.map(load => (
                <div className="load_preview"  key={load.load_id} >
                    <div id="goods">{ load.goods_name } - {load.tons}tons</div>
                    <div id="from">From : { load.from }</div>
                    <div id="to">To : { load.to }</div>
                    <div id="price">Price/tons : {load.amount}</div>
                    <button id="status">{ load.status }</button>
                    <br />
                </div>
                ))}

            </div>
        </div>

    );

} 

export default LoadProvider;