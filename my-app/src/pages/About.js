import '../App.css';
import './About.css';
import about_back1 from '../images/about_back1.png'
import phone_about1 from '../images/phone_about1.png'

function About() {
  return (
    <div className="about">
       <img src={about_back1} alt="" class="fullscreen-img"/>
       <img src={phone_about1} alt="" class="smallscreen-img"/>

        <p className="text">
        ARE YOU LOOKING FOR CONCERT BUDDIES?<br/>
        <br/>
        WANT TO BUY/SELL CONCERT TIX?<br/>
        AYSE IS THE PERFECT PRODUCT TO AMPLIFY
        YOUR SOCIAL EXPERIENCE!<br/>
        <br/>
        COMING TO THE APPLE STORE IN THE SPRING!<br/>
        <br/>
        IN THE MEAN TIME, FOLLOW US ON INSTAGRAM AND 
        FILL OUT <br/><a href="https://forms.gle/kcWvPBU47DkwAcFf6">THIS FORM</a> SO 
        THAT WE CAN CONNECT YOU W/ OTHER BRUINS!<br/>
        </p>
        
    </div>
);
}

export default About;