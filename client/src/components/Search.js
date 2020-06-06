import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function Search({onClickSearch}) {
    return (
        <Row className="my-5">
            <Col>
                <Form.Control placeholder="カクテル名を入力" />
            </Col>
            <Col>
                <Button onClick={onClickSearch}>検索</Button>
            </Col>
        </Row>
    );
}

export default Search;
