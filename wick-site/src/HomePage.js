/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    HomePage.js

    Top-Level Content for the Wick Homepage
*/

import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Button} from 'reactstrap';
import YouTube from 'react-youtube';
import PreviewCardDeckContainer from './PreviewCardDeckContainer.js';
import NewsCardDeckContainer from './NewsCardDeckContainer.js';
import UpdateTab from './UpdateTab.js';
import './HomePage.scss';

const HomePage = () => (
    <Container>
        <Row id="HomePage-promoVideoRow" className="HomePage-row">
            <YouTube videoId="2g811Eo7K8U" />
        </Row>
        <Row id="HomePage-ourLatestRow" className="HomePage-row">our latest</Row>
        <Row className="HomePage-sectionHead HomePage-row">
            <div className="HomePage-sectionTitle">tutorials</div>
            <Col className="HomePage-sectionSubtitle" sm="9" md="7" lg="6">
                Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!
            </Col>
        </Row>
        <Row className="HomePage-cardContainer HomePage-row">
            <Col sm="9">
                <PreviewCardDeckContainer />
            </Col>
        </Row>
        <Row className="HomePage-webpageButtonRow HomePage-row">
            <Col xs="6" sm="4" md="3" lg="2">
                <Button color="secondary" block>watch more</Button>
            </Col>
        </Row>
        <Row className="HomePage-sectionHead HomePage-row">
            <div className="HomePage-sectionTitle">examples</div>
            <Col className="HomePage-sectionSubtitle" sm="9" md="7" lg="6">
                Check out some examples to help you get started using the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!
            </Col>
        </Row>
        <Row className="HomePage-cardContainer HomePage-row">
            <Col sm="9">
                <PreviewCardDeckContainer />
            </Col>
        </Row>
        <Row className="HomePage-webpageButtonRow HomePage-row">
            <Col xs="6" sm="4" md="3" lg="2">
                <Button color="secondary" block>see more</Button>
            </Col>
        </Row>
        <Row className="HomePage-sectionHead HomePage-row">
            <div className="HomePage-sectionTitle">updates</div>
        </Row>
        <Row className="HomePage-row">
            <Col sm="9">
                <UpdateTab />
            </Col>
        </Row>
        <Row id="HomePage-newsRow" className="HomePage-row">
            <Col sm="9">
                <NewsCardDeckContainer />
            </Col>
        </Row>
        <Row className="HomePage-row">
            <Col id="HomePage-supportRow" sm="6">
                <div id="HomePage-supportWick">Support Wick Editor</div>
                <div id="HomePage-supportText">
                    Join the wick editor community with a YouTube membership or Patreon subscription!
                </div>
            </Col>
        </Row>
        <Row id="HomePage-subscribeRow" className="HomePage-row">
            <Col sm="9" md="4" lg="3">
                <Button outline color="secondary" block>Become a Patron</Button>
            </Col>
            <Col sm="9" md="4" lg="3">
                <Button outline color="secondary" block>Subscribe on Youtube</Button>
            </Col>
        </Row>
    </Container>
);

export default HomePage;