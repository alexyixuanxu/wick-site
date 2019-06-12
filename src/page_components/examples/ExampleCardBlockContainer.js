/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    ExampleCardBlockContainer.js

    Container for Learn Page Example Card Block
*/

import React, { Fragment, Component } from 'react';

import WickCardDeckContainer from '../../pattern_library/cards/WickCardDeckContainer.js';

import { examples } from '../../data/SiteData.js';

class ExampleCardBlockContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberCards: 3,
            numberRows: 1,
            cards: examples
        };
    }

    updateNumberCards = () => {
        var width = window.innerWidth;
        var numberCards = (width > 575 && width < 992) ? 2 : 3 // coded to match reactstrap cutoff
        var numberRows = Math.ceil(this.state.cards.length / numberCards)
        this.setState({numberCards, numberRows});
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateNumberCards);
        this.updateNumberCards();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNumberCards);
    }

    render() {
        return (
            <Fragment>
                {([...Array(this.state.numberRows).keys()]).map(rowInd => (
                    <WickCardDeckContainer
                        key={rowInd}
                        cards={this.state.cards.slice(this.state.numberCards*rowInd, this.state.numberCards*(rowInd + 1))}
                        type="example"
                        usePadding
                    />
                ))}
            </Fragment>
        );
    }
};

export default ExampleCardBlockContainer;