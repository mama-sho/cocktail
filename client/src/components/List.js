import React from 'react'
import { Col } from 'react-bootstrap'

function List({ cocktails, onClickDetail }) {
  return cocktails.map((cocktail, key) => {
    return (
      <Col
        id="cocktail"
        xs={12}
        md={6}
        lg={6}
        xl={4}
        className="mb-2"
        key={key}
      >
        <a herf="#" onClick={() => onClickDetail(cocktail.cocktail_id)}>
          <h4>{cocktail.cocktail_name}</h4>
          <div>
            <span className="mr-2">
              <span className="tag">BASE.</span>
              <span className="tag-detail-base">{cocktail.base_name}</span>
            </span>
            <span className="mr-2">
              <span className="tag">ALC.</span>
              <span className="tag-detail-ALC">{cocktail.alcohol}%</span>
            </span>
            <span className="mr-2">
              <span className="tag">TASTE.</span>
              <span className="tag-detail-taste">{cocktail.taste_name}</span>
            </span>
            <span className="mr-2">
              <span className="tag">STYLE.</span>
              <span className="tag-detail-style">{cocktail.style_name}</span>
            </span>
            <span className="mr-2">
              <span className="tag">TOP.</span>
              <span className="tag-detail-top">{cocktail.top_name}</span>
            </span>
          </div>
        </a>
      </Col>
    )
  })
}

export default List
