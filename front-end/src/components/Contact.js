import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "bright_flash", e.target, "user_tiJzqT1DSJDfcaGluuKTG")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function Clicked() {
    function confirmEmail(e) {
      e.preventDefault();
    }
    alert(
      "Yay! Your email was sent! We will get back to you as soon as possible!"
    );
  }

  return (
    <div>
      <div className="container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/octavian2111/image/upload/v1619646356/contact_jxt00y.jpg"
            alt=""
            className="contact-image"
          />
        </div>
        <div className="form-page">
          <img
            src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618995903/Bright%20Flash/Contact-us_wazpuz.png"
            alt=""
            className="contact-caption"
          />
          <h2 className="contact-text">
            Share your thoughts, tell us about inspiring women you know, or just
            say hi!
          </h2>
          <br></br>
          <form onSubmit={Contact} onSubmit={Clicked}>
            <div className="row pt-5 mx-auto">
              <div className="input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's your name beautiful?"
                  name="name"
                />
              </div>
              <div className="input">
                <input
                  type="email"
                  className="form-control"
                  placeholder="What's your email superstar??"
                  name="email"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What's up?"
                  name="subject"
                />
              </div>
              <div className="input">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Tell me everything..."
                  name="message"
                />
              </div>
              <div className="input">
                <button className="button">
                  <span>Send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
