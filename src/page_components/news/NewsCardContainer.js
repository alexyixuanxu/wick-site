/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    NewsCardContainer.js

    Container for News Cards
*/

import React, {Component} from 'react';

import NewsCard from './NewsCard.js';

class NewsCardContainer extends Component {
    constructor(props) {
        super(props);

        // display overlay for card
        this.state = {
            isContentHovered: false
        };
    }

    toggleContent = () => this.setState(prevState => ({isContentHovered: !prevState.isContentHovered}));

    launchLink = () => window.open(this.props.link);

    render() {
        return (
            <NewsCard
                {...this.props}
                onClick={this.launchLink}
                toggleContent={this.toggleContent}
                isContentHovered={this.state.isContentHovered}/>
        );
    }
};

export default NewsCardContainer;