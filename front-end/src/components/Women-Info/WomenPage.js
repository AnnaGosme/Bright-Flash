export default function WomenPage({ data }) {
	return (
		<div className="women-page">
			{data.map((info) => (
				<h1 className="women-title">{info.title}</h1>
			))}
			<>
				{data.map((info) => (
					<p className="women-years">{info.years}</p>
				))}
			</>
			<>
				{data.map((info) => (
					<p className="women-nationality">{info.nationality}</p>
				))}
			</>
			<>
				{data.map((info) => (
					<p className="women-contribution">{info.contribution}</p>
				))}
			</>
		</div>
	);
}
