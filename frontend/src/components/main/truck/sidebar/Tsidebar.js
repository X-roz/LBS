import SidebarTruck from "./sidebarTruck";
import { useHistory } from "react-router";
import SpaSharpIcon from '@mui/icons-material/SpaSharp';

const TSidebar = ()=>{

    const history=useHistory();

    return(
        <div className='t-sidebar'>
            <SpaSharpIcon id="t-head-icon" /> 
           <p>freight booking</p>
           <ul className="t-sidebarlist">
               {SidebarTruck.map((val,key)=>{

                   return <li key={key} 
                              className="t-row"
                              id={window.location.pathname === val.link ? "t-active" : "" }
                              onClick = {()=>{history.push(val.link);}}>
                             {" "}
                             <div id="t-icon">{val.icon}</div>
                             <div id="t-title">{val.title}</div>
                          </li>
               })}
           </ul>
        </div>
    );
}


export default TSidebar;

