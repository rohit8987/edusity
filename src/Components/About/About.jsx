import "../About/About.css"
import about from "../../assets/about.png"
import play from  "../../assets/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about} alt="" className="about-img" />
              <img src={play} alt="" className="play-icon" 
              onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Architecto natus
             Lorem ipsum, dolor sit amet consectetur adipisicing
             elit. Itaque, vitae? sunt iste atque.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vel iste dolores minus voluptates quo doloribus?</p>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Qui laboriosam perferendis corporis natus quae vero quasi 
             autem! Magnam, exercitationem! Culpa, necessitatibus? Animi 
             nihil velit,
             eveniet harum quia debitis facere aperiam nemo quaerat.</p>
        </div>
    </div>
  )
}

export default About
