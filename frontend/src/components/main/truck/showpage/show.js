import TSidebar from '../sidebar/Tsidebar'
import { useState,useEffect } from "react";
import TUseFetch from '../TuseFetch'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useHistory } from "react-router";
import axios from 'axios';

const Show = () =>{

    const [apiCallDone,setApiCallDone] = useState(false)
    const validate = localStorage.getItem('tvalidate');
    const [data_check,setDataCheck]=useState('');
    const [loading,setLoading]=useState(false);
    const [data,setData] = useState([]);
    const history =useHistory();

    useEffect(() => {
        if(!apiCallDone){
            TUseFetch("http://localhost:4000/loaddetails/get-loads",validate)
            .then(res=>{
                setDataCheck((res.data.status === "false")?false:true)
                if(data_check === true)
                {
                    setData(res.data.LoadDetails)
                    setLoading(true)
                } 
                else
                {
                    setLoading(true)
                }
                setApiCallDone(true)
            }).catch(err=>{console.log(err+"fetch not working")})
        }
    },[data_check,validate,apiCallDone])


    const handleClick = (id,e)=>{

        e.preventDefault()
        const query = {
            email:validate
        }
        const action = []
        
        axios({
            method:"GET",
            url:"http://localhost:4000/trucklogin/truck-details",
            params:query
        }).then((res)=>{
            const numbers = res.data.truck[0].truck_details
            const name = res.data.truck[0].name;
            numbers.forEach(element => {
                action.push({value:element,label:element})
            });


            history.push({
                pathname:'/booking/book-loads',
                state:{load_id:id,action:action,name:name}
            })
        })
        
       
        
    }

    return(
        <div id="show-container">
            <TSidebar />
            <div id="show-content">
                <div id="show-top">
                        <h2>Loads</h2>
                </div>

                {loading ? (
                    <div>
                        {data_check ? ( <p></p> ) : (  <div id="no-show"><h3><ControlPointIcon /></h3> <p>No loads to show</p> </div>) }
                    </div>
                ) : (

                    <div id="no-show">
                        <p>Loading .... </p>
                    </div>

                )}


                {data.map(load => (
                <div className="show_preview"  key={load.load_id} >
                    <div id="goods">{ load.goods_name } - { load.tons} tons</div>
                    <div id="from">From : { load.from }</div>
                    <div id="to">To : { load.to }</div>
                    <div id="price">Price/tons : {load.amount}</div>
                    <button id="status" onClick={(e) => handleClick(load.load_id, e)}>{ load.status }</button>
                    <br />
                </div>
                ))}

            </div>
        </div>
    );
}

export default Show;




// const query = {
//     load_id:id
// }
// axios({
//     method:"GET",
//     url:"http://localhost:4000/loaddetails/get-loadbyid",
//     params:query
// }).then((res)=>{
//     if(res.data.status === "true")
//     {
//         console.log(res)
//     }
//     else
//     {

//     }
    
// })


