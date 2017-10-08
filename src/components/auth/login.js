import React from 'react';
import logo from 'images/geosocio-center.png';

export default class Login extends React.Component {
	render() {
		return (
      <div className="row align-items-center h-100">
        <div className="col">
          <div className="row justify-content-center mb-3">
            <div className="col-6">
              <img src={logo} className="img-fluid mx-auto d-block" alt="GeoSoc.io" />
            </div>
          </div>
    			<form>
            <div className="form-group">
              <label htmlFor="value">Email</label>
              <input type="email" className="form-control" name="value" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Go</button>
          </form>
        </div>
      </div>
		);
	}
}
