import React, { Component } from 'react';

class CvForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			adress: '',
			phone: '',
			school: '',
			degree: '',
			graduation: '',
			employer: '',
			jobTiltle: '',
			startDate: '',
			endDate: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.submit(this.state);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className="container mt-4">
				<h4>Applicant Information</h4>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						onChange={this.handleChange}
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={this.state.name}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Emalil</label>
					<input onChange={this.handleChange} type="email" className="form-control" id="email" name="email" />
				</div>
				<div className="form-group">
					<label htmlFor="address">Address</label>
					<input
						onChange={this.handleChange}
						type="text"
						className="form-control"
						id="address"
						name="address"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input onChange={this.handleChange} type="tel" className="form-control" id="phone" name="phone" />
				</div>
				<h4>Education</h4>
				<div className="form-group">
					<label htmlFor="school">School</label>
					<input
						onChange={this.handleChange}
						type="text"
						className="form-control"
						id="school"
						name="school"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="degree">Degree</label>
					<input
						onChange={this.handleChange}
						type="text"
						className="form-control"
						id="degree"
						name="degree"
					/>
				</div>

				<div className="form-group">
					<label htmlFor="graduationYear">Grraduation Year</label>
					<input
						onChange={this.handleChange}
						type="date"
						className="form-control"
						id="graduationYear"
						name="graduation"
					/>
				</div>
				<h4>Work Experience</h4>
				<div className="form-group">
					<label htmlFor="employer">Employer</label>
					<input
						onChange={this.handleChange}
						type="text"
						className="form-control"
						id="employer"
						name="employer"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="jobTitle">Job Title</label>
					<input
						onChange={this.handleChange}
						type="text"
						className="form-control"
						id="jobTitle"
						name="jobTitle"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="startDate">Start Date</label>
					<input
						onChange={this.handleChange}
						type="date"
						className="form-control"
						id="startDate"
						name="startDate"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="endtDate">End Date</label>
					<input
						onChange={this.handleChange}
						type="date"
						className="form-control"
						id="endtDate"
						name="endDate"
					/>
				</div>
				<button className="btn btn-primary btn-lg mt-3 ">Submit</button>
			</form>
		);
	}
}

export default CvForm;
