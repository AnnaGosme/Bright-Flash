import Header from "./Header/Header";
import Footer from "../Footer";
import "./About.css";

export default function About() {
  return (
    <div className="container-about">
      <div className="container-title">
        <img
          className="about-us"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1619042510/helenpictures/about_qwcnhh.png"
        />
        <div className="us-cards1">
          <img
            className="Anna"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110721/helenpictures/anna_ke0ith.png"
          />

          <img
            className="Alessandra"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110720/helenpictures/alessandra_ty7yg5.png"
          />
        </div>
        <div className="us-cards2">
          <img
            className="Helen"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110725/helenpictures/helen_owvi3i.png"
          />

          <img
            className="Silvia"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110728/helenpictures/silvia_gxz7wh.png"
          />
        </div>
      </div>
      <div className="container-biography">
        {/* <div className="biography"> */}
        <p className="biography">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}
