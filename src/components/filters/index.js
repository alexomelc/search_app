import React from 'react';
import PropTypes from "prop-types";

const SearchPanel = ({tagsArray, searchByInput, searchByTag, showAll, isActiveSearchStatus, changeActiveStatus}) => {
	return (
		<div className="SearchPanel">
			<div className="SearchInput" >
				<span
					className={`SearchSelector ${isActiveSearchStatus('search')}`}
					onClick={() => {changeActiveStatus('search')
					}}>
				</span>
				<span className="SearchIcon"></span>
				<input
					placeholder="Search"
					onChange={searchByInput}
					type='text'
				/>
			</div>
			<div className="SearchAllResult">
				<span
					className={`SearchSelector ${isActiveSearchStatus('all')}`}
					onClick={() => {showAll(); changeActiveStatus('all')}}>
				</span>
				<span>All</span>
			</div>
			{tagsArray.map(val =>
				<div
					className="SearchTag"
					key={val}
					onClick={() => {
						searchByTag(val);
					}}>
					<span
						className={`SearchSelector ${isActiveSearchStatus(val)}`}
						onClick={() => {changeActiveStatus(val)}}>
					</span>
					<span>{val}</span>
				</div>
			)}
		</div>
	)
};

SearchPanel.propTypes= {
	tagsArray: PropTypes.arrayOf(PropTypes.string),
	searchByInput: PropTypes.func.isRequired,
	searchByTag: PropTypes.func.isRequired,
	showAll: PropTypes.func.isRequired,
	isActiveSearchStatus: PropTypes.func.isRequired,
	changeActiveStatus: PropTypes.func.isRequired
}

export default SearchPanel