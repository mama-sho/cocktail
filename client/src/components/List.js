import React from 'react';
import { Row, Col } from 'react-bootstrap';

function List({ cocktails }) {
  return cocktails.map((cocktail, key) => {
    return (
      <Row key={key} className="mb-5">
        <Col xs={12}>
          <h4>{cocktail.cocktail_name}</h4>
          <div>詳細</div>
        </Col>
      </Row>
    );
  });
}

export default List;



