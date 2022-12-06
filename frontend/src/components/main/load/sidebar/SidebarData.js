import FaceIcon from '@mui/icons-material/Face';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';


const SidebarData =[
    {
        title:"Profile",
        icon:<FaceIcon />,
        link:"/booking/user-profile-for-load"
    },
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/booking/load-providers"
    },
    {
        title:"Loads",
        icon:<MenuBookIcon />,
        link:"/booking/user-load-details"
    },
    {
        title:"Add Load",
        icon:<AddShoppingCartTwoToneIcon />,
        link:"/booking/add-load"
    }
]

export default SidebarData;