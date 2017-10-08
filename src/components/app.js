import React from 'react';
import Login from './auth/login';

export default class App extends React.Component {
	render() {
		return (
			<div className="container h-100">
        <Login />
			</div>
		);
	}
}
