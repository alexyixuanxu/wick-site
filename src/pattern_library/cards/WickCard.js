/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    WickCard.js

    Component for Cards
*/

import React, { Fragment } from 'react';
import Img from 'react-image';

import { Card, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap';

import arrow from '../../Images/Tutorials/arrow.svg';

import WickCardModal from './WickCardModal.js';

import '../../scss_styles/WickCard.scss';

const WickCard = ({title, body, image, onClick, includeModal, isModalOpen, onMouseEnter, onMouseLeave, isContentHovered}) => (
    <Fragment>
        <Card className="WickCard-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <CardImg width="100%" src={image} alt="Card image cap" />
            <CardImgOverlay className="WickCard-content">
                <CardTitle className={isContentHovered ? "WickCard-title" : "WickCard-title WickCard-title--collapsed"}>{title}</CardTitle>
                {isContentHovered && (
                    <Fragment>
                        <CardText className="WickCard-text">{body}</CardText>
                        <Img src={arrow} />
                    </Fragment>
                )}
            </CardImgOverlay>
        </Card>
        {includeModal && (
            <WickCardModal title={title} onClick={onClick} isModalOpen={isModalOpen} />
        )}
    </Fragment>
);

export default WickCard;