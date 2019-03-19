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
		this.myRef = React.createRef();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			tweets: []
		}
	}

	handleClick(){
		this.setState({tweets: [...this.state.tweets, {user: '@cristiano', date: new Date().toString(), post: this.myRef.current.value}]});
		console.log(this.state.tweets);
		this.myRef.current.value = '';
        this.myRef.current.focus();
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
							<textarea className="post-tweet" type="text" placeholder="What's Happening?" ref={this.myRef}></textarea>
						</div>
						<div className="btn">
							<button className="btn-tweet" onClick={this.handleClick}>Tweet</button>
						</div>
					</div>
					<div className="tweets">
						{this.state.tweets.map((tweet, key) => 
							<div className="the-tweet" key={key}>
								<div className="img-tweet">
									<img className="img-profile" src="http://www.femalefirst.co.uk/image-library/square/500/1/1024x5347096774193549origin0x11cristianoronaldo.jpg" />
								</div>
								<div className="body-tweet">
									<div className="header-tweet">
										<span className="username">{tweet.user}</span>
										<span className="date">{tweet.date}</span>
									</div>
									<div className="content-tweet">
										<span className="text-tweet">
											{tweet.post}
										</span>
									</div>
								</div>
							</div>
						)}
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