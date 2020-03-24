import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from '../pages/Login';
import Rate from '../pages/Rate';
import Gallery from './Gallery';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Scene>
							<Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
								<Scene key="login" component={Login} initial={true} />
							</Scene>
							<Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
								<Scene key="Rate" component={Rate} />
							</Scene>
							<Scene key="wait" hideNavBar={true} initial={this.props.isLoggedIn}>
								<Scene key="gallery" component={Gallery} />
							</Scene>
							
					</Scene>
			 </Router>
			)
	}
}