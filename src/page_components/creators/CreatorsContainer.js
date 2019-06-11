/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    CreatorsContainer.js

    Content for the Wick Creators
*/

import React, { Component, Fragment } from 'react';

import CreatorsRow from './CreatorsRow.js';

import coreyemery from '../../Images/People/CoreyEmery.svg';
import lucadamasco from '../../Images/People/LucaDamasco.svg';
import zachrispoli from '../../Images/People/ZachRispoli.svg';
import annagusman from '../../Images/People/AnnaGusman.svg';

class CreatorsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            creators: [
                {name: "Zach Rispoli", role:'Co-creator', img: zachrispoli},
                {name: "Luca Damasco", role:'Co-creator', img: lucadamasco}
            ],
            designers: [
                {name: "Anna Gusman", role:'Brand, web, and UX design', img: annagusman},
                {name: "Corey Emery", role:'Web Developer', img: coreyemery}
            ],
            editorDesigners: [
                {name: "Anna Gusman"},
                {name: "Cameron Burgess"},
                {name: "Gautam Bose"}
            ]
        };
    }

    render() {
        return (
            <Fragment>
                <CreatorsRow
                    people={this.state.creators}
                    title=""
                    includeHeadshot
                />
                <CreatorsRow
                    people={this.state.designers}
                    title=""
                    includeHeadshot
                />
                <CreatorsRow
                    people={this.state.editorDesigners}
                    title="Original editor interface design by"
                />
            </Fragment>
        )
    }
};

export default CreatorsContainer;
