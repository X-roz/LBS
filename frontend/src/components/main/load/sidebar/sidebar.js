import SidebarData from "./SidebarData";
import { useHistory } from "react-router";
import SpaSharpIcon from '@mui/icons-material/SpaSharp';

const Sidebar = ()=>{

    const history=useHistory();

    return(
        <div className='sidebar'>
           <SpaSharpIcon id="head-icon" /> 
           <p>freight booking</p>
           <ul className="sidebarlist">
               {SidebarData.map((val,key)=>{

                   return <li key={key} 
                              className="row"
                              id={window.location.pathname === val.link ? "active" : "" }
                              onClick = {()=>{history.push(val.link);}}>
                             {" "}
                             <div id="icon">{val.icon}</div>
                             <div id="title">{val.title}</div>
                          </li>
               })}
           </ul>
        </div>
    );
}


export default Sidebar;

