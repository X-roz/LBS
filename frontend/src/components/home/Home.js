import Headers from '../headers/Header'

const Home = () => {

    return ( 
        <div className="homepage">
            <Headers />
            <div className="load">
                 <a href="/booking/login-for-load">LOAD PROVIDERS</a>
            </div>
            <div className="truck">
                <a href="/booking/login-for-truck">TRUCK PROVIDERS</a>
            </div>
        </div>
        
        
     );
}
 
export default Home;