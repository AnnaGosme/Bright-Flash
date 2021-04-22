import Header from "./Header/Header";
import Footer from "../Footer";
import "./About.css";

export default function About() {
	return (
		<div className= "title">
			<img src="https://res.cloudinary.com/dnefeccae/image/upload/v1619042510/helenpictures/about_qwcnhh.png" />
			<div className="us-cards">
				<img className="Anna"src="https://res.cloudinary.com/dnefeccae/image/upload/v1619040654/helenpictures/Captura_de_pantalla_2021-04-14_a_las_14.54.12_curxny.png" />
				<br />
				<img className="Alessandra"src="https://res.cloudinary.com/dnefeccae/image/upload/v1619040654/helenpictures/Captura_de_pantalla_2021-04-14_a_las_14.54.12_curxny.png" />
				<br />
				<img className="Helen"src="https://res.cloudinary.com/dnefeccae/image/upload/v1619040654/helenpictures/Captura_de_pantalla_2021-04-14_a_las_14.54.12_curxny.png"/>
				<br />
				<img className="Silvia"src="https://res.cloudinary.com/dnefeccae/image/upload/v1619040654/helenpictures/Captura_de_pantalla_2021-04-14_a_las_14.54.12_curxny.png"/>
				<div className ="biography">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				</div>
			</div>
		</div>
	);
}
