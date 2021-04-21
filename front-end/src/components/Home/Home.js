import { useState } from 'react';
import { withRouter } from 'react-router-dom';
//import Footer from "../Footer";
import Home from "./Home.css";


const HomePage = (props) => {

    const [openMenu, setOpenMenu] = useState(false)
         
    const setClassNames = (num) => {
		const classArr = ["m-item"];
		if (openMenu) classArr.push(`open-${num}`)
		return classArr.join(' ')
	}

	const pushToRoute = (route) => {
		props.history.push(route)
		setOpenMenu(false)
	}
 

  return (
	<div className="HomePage">
		<div className={"m-item m-logo"}
			onClick={() => setOpenMenu(!openMenu)}>
			Menu
		</div>
		<div className={setClassNames(1)} onClick={() => pushToRoute("/Home")}>
		Home
		</div>
		<div className={setClassNames(2)} onClick={() => pushToRoute("/Game")}>
		Game
		</div>
		<div className={setClassNames(3)} onClick={() => pushToRoute("/Women")}>
		Women
		</div>
		<div className={setClassNames(4)} onClick={() => pushToRoute("/About")}>
		About
		</div>
		<div className={setClassNames(5)} onClick={() => pushToRoute("/Contact")}>
		Contact
		</div>		
	</div>
  );
}

export default withRouter(HomePage);