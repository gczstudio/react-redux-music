import React from 'react';
import { render } from 'react-dom';
import { Router,browserHistory } from 'react-router';
import Routers from './routers';

render(

		<div>
			<Router history = {browserHistory} routes={Routers}></Router>
		</div>,
		document.getElementById('app')	
	)