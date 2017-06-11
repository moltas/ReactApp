import React from 'react';
import { Route } from 'react-router';

import App from './components/App/App';
import HomePage from './components/HomePage';

export default (
	<div>
		<Route path="/" component={App} />
		<Route path="/test" component={HomePage} />
	</div>
);
