import React, { Component } from 'react';
import CvForm from './CvForm';
import Cv from './Cv';

class CvMaker extends Component {
	constructor(props) {
		super(props);
		this.state = { info: {}, isSubmited: false };
		this.updateInfo = this.updateInfo.bind(this);
		this.edit = this.edit.bind(this);
	}

	updateInfo(newInfo) {
		this.setState({ info: newInfo, isSubmited: !this.state.isSubmited });
	}

	edit() {
		this.setState({ isSubmited: !this.state.isSubmited });
	}
	render() {
		const {
			name,
			address,
			phone,
			email,
			school,
			degree,
			graduation,
			employer,
			jobTitle,
			startDate,
			endDate
		} = this.state.info;

		return (
			<div>
				<h1 className="text-center text-info display-2">CV MAKER</h1>
				<div className={`container ${this.state.isSubmited ? '' : 'd-none'}`}>
					<Cv
						edit={this.edit}
						name={name}
						address={address}
						phone={phone}
						email={email}
						school={school}
						degree={degree}
						graduation={graduation}
						employer={employer}
						jobTitle={jobTitle}
						startDate={startDate}
						endDate={endDate}
						jobTitle={jobTitle}
					/>
				</div>
				<div className={`container ${this.state.isSubmited ? 'd-none' : ''}`}>
					<CvForm submit={this.updateInfo} />
				</div>
			</div>
		);
	}
}

export default CvMaker;
