import React from 'react';
import './header.css';
import logo from './jww-logo.png';

class Header extends React.Component {
	
	render() {
		return(
			<div className='header'>
				<img src={logo} className='logo' alt="John Webber Woodwork logo" />
			</div>	
		)
	}

}
export default Header;