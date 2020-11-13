import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
    state = {
        votes: 0,
    };

    addVotesHandler = () => {
        this.setState({
            votes: this.state.votes +1,
        });
    };

    readMoreHandler = () => {
        console.log("Hmmm");
    };

    render() {
        return (
            <div className="article">
                <img alt="banner" src="https://en.bc.fi/wp-content/uploads/sites/14/2019/01/laptop.jpg"/>
                <h2>Full Stack Web Developer Program</h2>
                <p>
                    The Full Stack Web Developer program is designed for aldults who want to work as software developers. Studying in the program is very practical in comparison to academic studying. The studies focus 100% on getting the core skills needed as a software developer.
                </p>
                <p>
                    <strong>{this.state.votes}</strong> likes
                </p>
                <button onClick={this.readMoreHandler}>Read more</button>
                <button onClick={this.addVotesHandler}>Upvote</button>
            </div>
        );
    }
}

export default Article;