import React from 'react';
import PropTypes from "prop-types";

const ResultPanel = ({filteredData}) => {
	return(
		<div className="ResultPanel">
			{filteredData.map(val =>
			<div className="ResultItem" key={val.id}>
				<span className="ResultTitle">{val.title}</span>
				<br/>
				<span className="ResultTag">{val.tags.join(', ')}</span>
			</div>)}
		</div>
	)
}

ResultPanel.propTypes= {
	filteredData: PropTypes.arrayOf(PropTypes.object),
}

export default ResultPanel