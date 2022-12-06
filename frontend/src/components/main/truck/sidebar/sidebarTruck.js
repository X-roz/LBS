import FaceIcon from '@mui/icons-material/Face';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


const SidebarTruck =[
    {
        title:"Profile",
        icon:<FaceIcon />,
        link:"/booking/user-profile-for-truck"
    },
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/booking/truck-providers"
    },
    {
        title:"Loads",
        icon:<MenuBookIcon />,
        link:"/booking/loads"
    },
    {
        title:"Add Truck",
        icon:<LocalShippingIcon />,
        link:"/booking/add-truck"
    }
]

export default SidebarTruck;