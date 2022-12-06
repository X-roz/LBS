import Sidebar from "../sidebar/sidebar";
import { useState } from "react";
//import Downshift from "downshift"
import Select from 'react-select'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Loads = ()=>{

    const validate = localStorage.getItem('validate');
    const [title,setTitle]=useState('');
    const [status,setStatus]=useState('')
    const [data,setData]=useState([]);
    const history = useHistory();
    const [data_check,setDataCheck]=useState(false)

    const action = [
        { value: 'unbooked', label: 'Unbooked Loads' },
        { value: 'booked', label: 'Booked Loads' },
        { value: 'delivered', label: 'delivered Loads' }
      ]

      const handleChange = (selected)=>{
            setStatus(selected.value)
      }

      const getData =( e )=>{
        
            e.preventDefault();
            
            setTitle(status)
            
            const query = {
                email:validate,
                status:status
            }
            console.log(query)
            axios({
                method:"GET",
                url:"http://localhost:4000/loaddetails/get-load-status",
                params:query
            }).then((res)=>{
                if(res.data.status === "true")
                {
                    console.log(res);
                    setDataCheck(true)
                    setData(res.data.LoadDetails)
                }
                else if(res.data.status === "false"){
                    setDataCheck(false)
                }
            })
      }

     const handleClick =(load_id,status,e)=>{
          e.preventDefault()
                    
          history.push({
              pathname:"/booking/load-details-page",
              state:{load_id:load_id,status:status}
          })
      }


    return(
        <div id="load-container">
        <Sidebar />
            
        <div id="load-page-content">
            <div id="load-top">
                <h2>{ title } Loads</h2>
                <form onSubmit={ getData }>
                    <Select id="selop" 
                        onChange={handleChange}
                        options={action} />
                    <button>select</button>
                </form>
            </div>

            <div>
                {data_check ? (<p>
                    {data.map(load => (
                    <div className="load_preview"  key={load.load_id} >
                    <div id="goods">{ load.goods_name } - {load.tons}tons</div>
                    <div id="from">From : { load.from }</div>
                    <div id="to">To : { load.to }</div>
                    <div id="price">Price/tons : {load.amount}</div>
                    <button id="status" onClick={(e) => handleClick(load.load_id,load.status,e)}>{ load.status }</button>
                    <br />
                </div>
                ))}</p>
                ) :(
                    <p id="no-load">
                        { title === "" ? (<p>Select and check the load status </p>) : (<p></p>)}
                        { title === "booked" ? (<p> Loads to be booked </p>) :(<p></p>)}
                        { title === "unbooked" ? (<p>add the loads to book</p>) : (<p></p>)}
                        { title === "delivered" ? (<p> Sit Tight!! Loads will be delivered any time</p>) : (<p></p>)}
                    </p>) }
                </div>
        </div>
        </div>
    );

}

export default Loads;