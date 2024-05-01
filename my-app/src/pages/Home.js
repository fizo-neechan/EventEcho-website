import '../App.css';
import './Home.css';
import back1 from '../images/home_back1.png'
import back2 from '../images/home_back2.png'
import phone_home1 from '../images/phone_home1.png'
import eventecho from '../images/eventecho.png'

function Home() {
  return (
    <div className="home">
        <div>
            <img src={back1} className="fullscreen-img" alt=""/>
            <img src={back2} className="fullscreen-img" alt=""/>
            <img src={phone_home1} className="smallscreen-img" alt=""/>
        </div> 
        <div>
            <img src={eventecho} className="tagline" alt=""/>
            <p className="text">
                A CENTRALIZED PLATFORM<br/>
                TO FIND CONCERT BUDDIES<br/>
                & BUY/SELL TICKETS FOR <br/>
                UCLA STUDENTS!
            </p>
        </div>
    </div>
  );
}

export default Home;