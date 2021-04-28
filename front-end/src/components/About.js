// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import "./About.css";

export default function About() {
  return (
    <div className="container-title">
      <img
        className="about-us"
        src="https://res.cloudinary.com/dnefeccae/image/upload/v1619042510/helenpictures/about_qwcnhh.png" alt="about us"
      />
      <div className="us-cards">
        <img
          className="Anna"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110721/helenpictures/anna_ke0ith.png" alt="Anna"
        />

        <img
          className="Alessandra"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110720/helenpictures/alessandra_ty7yg5.png" alt="Alessandra"
        />

        <img
          className="Helen"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110725/helenpictures/helen_owvi3i.png" alt="Helen"
        />

        <img
          className="Silvia"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110728/helenpictures/silvia_gxz7wh.png" alt="Silvia"
        />
        <div className="biography">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
