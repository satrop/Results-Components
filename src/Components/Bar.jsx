export const Bar = (props) => {
	return (
		<div className={`bar ${props.extraClass} | border-radius--sm`}>
			<img src={`/iconoir_${props.icon}.svg`} alt="" />
			<div className="bar--title">{props.title}</div>
			<div className="bar--value">
				{props.children} <span> / 100</span>
			</div>
		</div>
	);
};
