import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import '../ExplorePage.css';

const UploadSearchItem = ({key, upload}) => (
    <Col xs={4}>
        <Row>
            <Col xs={2}>
                <img className={'profileShortPhoto'} src={upload.user.photo} alt={'photo'} />
            </Col>
            <Col xs={2}>
                <span>{upload.user.name} {upload.user.surname} </span>
            </Col>
        </Row>
        <Row>
            <Col>
                <iframe className={'videoUpload'} src={upload.video}>
                </iframe>
            </Col>
        </Row>
    </Col>
);

export default UploadSearchItem;