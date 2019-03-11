import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



class Twitter extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div id="main">
				<div className="profile">
					<img className="img-profile" src="http://www.femalefirst.co.uk/image-library/square/500/1/1024x5347096774193549origin0x11cristianoronaldo.jpg" />
					<div className="profile-info">
						<span className="username">@cristiano</span>
						<span className="name">Cristiano Ronaldo</span>
					</div>
				</div>
				<div className="landing">
					<div className="bar">
						<div className="img-bar">
							<img className="img-profile" src="http://www.femalefirst.co.uk/image-library/square/500/1/1024x5347096774193549origin0x11cristianoronaldo.jpg" />
						</div>
						<div className="myTweet">
							<textarea className="post-tweet" type="text" placeholder="What's Happening?"></textarea>
						</div>
						<div className="btn">
							<button className="btn-tweet">Tweet</button>
						</div>
					</div>
					<div className="tweets">

					</div>
				</div>
			</div>
		);
	}
}

//============================

ReactDOM.render(
	<Twitter />, 
	document.getElementById('root')
);