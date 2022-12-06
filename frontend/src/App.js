import './App.css'

import Home from "./components/home/Home"
import About from "./components/headers/About-Us";
import Contact from "./components/headers/Contact-Us";

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import LoadLogin from "./components/login/loadlogin";
import TruckLogin from "./components/login/truckLogin";

import LoadSignup from "./components/signup/loadSignup";
import TruckSignup from "./components/signup/truckSignup";

import LoadProvider from "./components/main/load/homepage/load";
import AddLoad from './components/main/load/addloadPage/addload';
import LoadProfile from './components/main/load/profile/profile';
import Loads from './components/main/load/loadspage/loadspage';
import DetailsPage from './components/main/load/detailsPage/detailspage';


import TruckProvider from "./components/main/truck/homepage/truckhome";
import Show from './components/main/truck/showpage/show';
import AddTruck from './components/main/truck/addtruckPage/addtruck';
import Tprofile from './components/main/truck/profile/Tprofile';
import Book from './components/main/truck/bookPage/book';
import Deliver from './components/main/truck/deliverPage/deliver';


import './components/login/login.css'
import './components/signup/signup.css'

import './components/main/load/homepage/load.css'
import './components/main/truck/homepage/truckhome.css'

import './components/main/load/addloadPage/addload.css'
import './components/main/truck/addtruckPage/addtruck.css'

import './components/main/load/profile/profile.css'
import './components/main/truck/profile/Tprofile.css'

import './components/main/load/loadspage/loadspage.css'
import './components/main/truck/showpage/show.css'

import './components/main/truck/bookPage/book.css'
import './components/main/truck/deliverPage/deliver.css'
import './components/main/load/detailsPage/detailspage.css'


import './components/home/home.css'
import './components/headers/headers.css'
import './components/login/login.css'
import './components/main/load/sidebar/sidebar.css'
import './components/main/truck/sidebar/Tsidebar.css'


function App() {
  return (
    <div className="app">
        <Router>
          <div>
          <Switch>
              <Route exact path = '/'>
                <Home />
              </Route>
              <Route exact path = '/booking/about-us'>
                <About />
              </Route>
              <Route exact path = '/booking/contact-us'>
                <Contact />
              </Route>
              <Route exact path = '/booking/login-for-load'>
                <LoadLogin />
              </Route>
              <Route exact path = '/booking/login-for-truck'>
                <TruckLogin />
              </Route>
              <Route exact path = '/booking/signup-for-load'>
                <LoadSignup />
              </Route>
              <Route exact path = '/booking/signup-for-truck'>
                <TruckSignup />
              </Route>
              <Route exact path = '/booking/load-providers'>
                <LoadProvider />
              </Route>
              <Route exact path = '/booking/add-load'>
                <AddLoad />
              </Route>
              <Route exact path = '/booking/user-profile-for-load'>
                <LoadProfile />
              </Route>
              <Route exact path = '/booking/user-load-details'>
                <Loads />
              </Route>
              <Route exact path = '/booking/load-details-page'>
                <DetailsPage />
              </Route>
              <Route exact path = '/booking/truck-providers'>
                <TruckProvider />
              </Route>
              <Route exact path = '/booking/loads'>
                <Show />
              </Route>
              <Route exact path = '/booking/book-loads'>
                <Book />
              </Route>
              <Route exact path = '/booking/truck-loads-deliver'>
                <Deliver />
              </Route>
              <Route exact path = '/booking/add-truck'>
                <AddTruck />
              </Route>
              <Route exact path = '/booking/user-profile-for-truck'>
                <Tprofile />
              </Route>
          </Switch>
          </div>
        </Router>
      </div>
    
  );
}

export default App;
