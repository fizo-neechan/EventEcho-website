import '../App.css';
import './Home.css';
import back1 from '../images/home_back1.png'
import back2 from '../images/home_back2.png'
import phone_back1 from '../images/full_circle_bg.png'
import phone_back2 from '../images/iphone_fullsize.png'

function Home() {
  return (
    <div className="home">
        <div>
            <img src={back1} className="fullscreen-img" alt=""/>
            <img src={back2} className="fullscreen-img" alt=""/>
            <img src={phone_back1} className="smallscreen-img" alt=""/>
            {/*<img src={phone_back2} className="smallscreen-img" alt=""/>*/}
        </div> 
        <div>
            <p className="text">
                A CENTRALIZED PLATFORM<br/>
                TO FIND CONCERT COMPANIONS<br/>
                & BUYING/SELLING<br/>
                TICKETS FOR UCLA STUDENTS<br/>
            </p>
        </div>
    </div>
  );
}

export default Home;