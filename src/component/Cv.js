import React, { Component } from 'react';

class Cv extends Component {
	render() {
		return (
			<div className="container text-center bg-light p-4	">
				<div className="row">
					<div className="col-12">
						<h1 className="text-info mb-3 pb-3 text-center text-uppercase">{this.props.name}</h1>
					</div>
					<div className="bg-dark mt-3 py-4 text-light col">
						<div>
							<h3 className="mb-4 text-info">CONTACT </h3>
							<h5>Address: </h5>
							<p>{this.props.address}</p>
						</div>
						<div>
							<h5>Phone: </h5>
							<p>{this.props.phone}</p>
						</div>
						<div>
							<h5>Email: </h5>
							<p>{this.props.email}</p>
						</div>
					</div>

					<div className="mt-3 col">
						<h3 className="mb-4 text-info">EDUCATION</h3>
						<div>
							<h5>SCHOOL</h5>
							<p>{this.props.school}</p>
						</div>
						<div>
							<h5>DEGREE</h5>
							<p>{this.props.degree}</p>
						</div>
						<div>
							<h5>YEAR OF GRADUATION</h5>
							<p>{this.props.graduation}</p>
						</div>
					</div>

					<div className="mt-3 col">
						<h3 className="mb-4 text-info">WORK EXPERIENCE</h3>
						<div>
							<h5>EMPLOYER</h5>
							<p>{this.props.employer}</p>
						</div>
						<div>
							<h5>JOB TITLE</h5>
							<p>{this.props.jobTitle}</p>
						</div>
						<div>
							<h5>START DATE</h5>
							<p>{this.props.startDate}</p>
						</div>
						<div>
							<h5>END DATE</h5>
							<p>{this.props.endDate}</p>
						</div>
					</div>
				</div>

				<button onClick={this.props.edit} className="btn btn-dark mt-4 pr-5 pl-5">
					EDIT
				</button>
			</div>
		);
	}
}

export default Cv;
