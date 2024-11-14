import "../Contact/Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"
import { useState } from "react"



const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "231b7b46-4269-43e3-a26c-f207e1b20c82");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}

  return (
    <div className="contact">
       <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Nostrum, aspernatur. Tenetur, eligendi nesciunt,
         id quod velit sapiente, non quasi ad suscipit amet magni!</p>
         <ul>
         <li> <img src={mail_icon} alt="" />Contact@urohit</li>
         <li> <img src={phone_icon} alt="" />+587655722</li>
         <li> <img src={location_icon} alt="" />77 nmxwkxo,xiowojxnwx <br /> Ma jwjxm,united state</li>
         </ul>
       </div>
       <div className="contact-col">
          <form  onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder=" Enter your name"required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your Mobile Number" required />
            <label>Write your messages here</label>
            <textarea name="message" rows={6} placeholder=" Enter Your Message" required ></textarea>
            <button type="submit" className="btn dark-btn" >Submit Now <img src={white_arrow} alt="" /> </button>
          </form>
          <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact
