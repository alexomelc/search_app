import React, {Component} from 'react';
import data from '../data/sdks'
import SearchPanel from './filters/index'
import ResultPanel from './result/'

class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data,
			filteredData: data.results,
			search: '',
			activeValue: ''
		}
	}

	searchByInputHandler = (event) => {
		this.setState({search: event.target.value})
		const {results} = this.state.data
		let filteredData = results.filter(val => val.title.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
		this.setState({filteredData: filteredData})
	}

	showByTagHandler = (val) => {
		const results = Object.assign([], this.state.data.results)
		let filteredData = results.filter(value => value.tags.includes(val))
		this.setState({filteredData: filteredData})
	}

	changeActiveStatus = (val) => {
		this.setState({activeValue: val})
	}

	isActiveSearchStatus = (val) => {
		return (val === this.state.activeValue) ? 'active' : 'default'
	}

	showAllHandler = () => {
		const results = Object.assign([], this.state.data.results)
		this.setState({filteredData: results})
	}

	render() {
		const {results} = this.state.data;
		const filteredData = this.state.filteredData;
		filteredData.sort((a, b) => {
			let aName = a.title.toLowerCase();
			let bName = b.title.toLowerCase();
			return (aName < bName) ? -1 : 1

		})
		let tagsSet = new Set()
		results.map(val => val.tags.forEach(val => tagsSet.add(val)))
		let tagsArray = Array.from(tagsSet).sort()

		return (
			<div className="Wrapper">
				<SearchPanel
					searchByTag={this.showByTagHandler}
					searchByInput={this.searchByInputHandler}
					showAll={this.showAllHandler}
					tagsArray={tagsArray}
					changeActiveStatus={this.changeActiveStatus}
					isActiveSearchStatus={this.isActiveSearchStatus}
				/>
				<ResultPanel filteredData={filteredData}/>
			</div>
		);
	}
}

export default Wrapper;

