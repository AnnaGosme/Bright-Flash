export default function WomanDetails({ routeProps, data }) {
	const foundCard = () => {
		return data.find((card) => card.id === +routeProps.match.params.id);
	};
	return (
		<div>
			<>
				<img src={foundCard().image} alt="" />
			</>
			<>
				<h1 className="women-title">{foundCard().title}</h1>
			</>
			<>
				<p className="women-years">{foundCard().years}</p>
			</>
			<>
				<p className="women-nationality">{foundCard().nationality}</p>
			</>
			<>
				<p className="women-contribution">{foundCard().contribution}</p>
			</>
		</div>
	);
}
