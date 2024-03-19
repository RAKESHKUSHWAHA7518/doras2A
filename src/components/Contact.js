import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = ({info}) => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {social_handles,about }= info.user

   const tt= social_handles[0].platform
   console.log(`https://${tt}.com/`);


  // console.log(`https://${social_handles.platform}.com/`);

  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-info-cont">
          {/* Contact left */}
          <div className="contact-info">
            <div className="section_title wow fadeInUp">
              <h2>Let's Connect</h2>
            </div>
            <p className="wow fadeInUp">
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
            <p> {info.user.email}</p>
            <p> {about.phoneNumber}</p>
            <ul className="contact-social wow fadeInUp">
             {social_handles.map((social,index)=>(<li>
                {/* <a href={social.url ? social.url : `https://${social.platform.toLowerCase()}.com`}> */}
                <a href={social.url ? social.url : "https://google.com"}>

                <i className={`fab fa-${social.platform.toLowerCase()}`} /> 
                </a>
              </li>)) 

             }
              {/* <li>
                <a href="">
                <i className='fab fa-instagram' />

                </a>
              </li>
              <li>
                <a href="#">
                   <i className="fab fa-twitter" />
                  <i className={`fab fa-${social_handles[1].platform.toLowerCase()}`} />

                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-dribbble" />
                </a>
              </li>
               <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>  */}
            </ul>
          </div>
          {/* Contact right */}
          <form
            className="contact-form wow fadeInUp"
            onSubmit={(e) => onSubmit(e)}
          >
            <h3>Let's message me and mack something together</h3>

            <input
              type="text"
              className="input-control"
              placeholder="Your Name"
              name="name"
              onChange={(e) => onChange(e)}
              value={name}
            />
            <input
              type="text"
              className="input-control"
              placeholder="Your Email"
              name="email"
              onChange={(e) => onChange(e)}
              value={email}
            />
            <textarea
              className="input-control"
              placeholder="Message"
              defaultValue={""}
              name="message"
              onChange={(e) => onChange(e)}
              value={message}
            />
            <div
              className={error ? "empty_notice" : "returnmessage"}
              style={{ display: error == null ? "none" : "block" }}
            >
              <span>
                {error
                  ? "Please Fill Required Fields"
                  : "Your message has been received, We will contact you soon."}
              </span>
            </div>
            <div className="form-btn">
              <button className="btn primary-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
