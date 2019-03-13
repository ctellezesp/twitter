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



class TodoItem extends React.Component {
	constructor() {
		super();
	}
    render() {
        return (
            <ul>
    			
                    {
                        ({ list }) => // Recibimos los parámetros enviados desde el Provider
                            list.map((item, key) =>
                                <li key={key}>
                                    {item}
          
                                </li>
                            )
                    }	
                    <li>{ this.state }</li>
 				
            </ul>
        );
    }
}

class Twitter extends React.Component{
    constructor() {
        super();
        this.createItem = this.createItem.bind(this);

        this.itemInput = React.createRef();

        this.state = {
            list: []
        };
    }

    createItem() {
        const itemValue = this.itemInput.current.value;
        if (itemValue) {
            this.setState({
                list: [
                    ...this.state.list,
                    itemValue
                ],

            }); 
            this.itemInput.current.value = '';
            this.itemInput.current.focus();
        }
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
							<textarea className="post-tweet" type="text" placeholder="What's Happening?" ref={this.itemInput}></textarea>
						</div>
						<div className="btn">
							<button className="btn-tweet" onClick={this.createItem}>Tweet</button>
						</div>
					</div>
					<div className="tweets">
		      				{this.state.list.map((item, key) =>
		      					<div className="the-tweet" key={key}>
										<div className="img-tweet">
											<img className="img-profile" src="http://www.femalefirst.co.uk/image-library/square/500/1/1024x5347096774193549origin0x11cristianoronaldo.jpg" />
										</div>
									<div className="body-tweet">
										<div className="header-tweet">
											<span className="username">@cristiano</span>
											<span className="date">11-03-2019</span>
										</div>
										<div className="content-tweet">
											<span className="text-tweet">
												{item}	
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