// import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import "./About.css";

export default function About() {
  return (
    <div className="container-about">
      <div className="container-title">
        <div className="us-cards1">
          <img
            className="Anna"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110721/helenpictures/anna_ke0ith.png"
            alt="Anna"
          />

          <img
            className="Alessandra"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110720/helenpictures/alessandra_ty7yg5.png"
            alt="Alessandra"
          />
        </div>
        <div className="us-cards2">
          <img
            className="Helen"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110725/helenpictures/helen_owvi3i.png"
            alt="Helen"
          />

          <img
            className="Silvia"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1619110728/helenpictures/silvia_gxz7wh.png"
            alt="Silvia"
          />
        </div>
      </div>
      <div className="container-biography">
      <div className="container-title">
        <img
          className="about-us"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1619042510/helenpictures/about_qwcnhh.png"
        />
        {/* <div className="biography"> */}
        <p className="biography">
          “There are times in our lives when we have to realize our past is
          precisely what it is, and we cannot change it. But we can change the
          story we tell ourselves about it, and by doing that, we can change the
          future.”( Eleanor Brown, The Weird Sisters). The contributions of
          women to the advancement of science, the improvement of society and
          the care of our communities have always been there. Too often they are
          forgotten or overlooked in history books. The statement may be silent,
          but the effect is loud: our children are still being raised with an
          internalised impression than men can achieve more than women. The goal
          of this website is to give women back their rightful place in history.
          We have selected just a few amongst many pioneers, and would love to
          receive contributions to grow our list. By playing a game of memory
          cards, we hope that you will learn about and remember the names and
          contributions of these pioneering women.
        </p>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
}
