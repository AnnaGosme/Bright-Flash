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
            src="https://res.cloudinary.com/dg5lakmem/image/upload/v1619095195/Bright%20Flash/Contact-cropped_eg41xz.jpg"
            alt=""
            className="contact-image"
          />
        </div>
        <div className="form-page">
          <form onSubmit={Contact} onSubmit={Clicked}>
            <img
              src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618995903/Bright%20Flash/Contact-us_wazpuz.png"
              alt=""
              className="contact-caption"
            />
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
                  placeholder="Where can I write to you?"
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
                  placeholder="Tell me everything"
                  name="message"
                />
              </div>
              <div className="col-8 form-group mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
