import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  title,
  authors,
  description,
  thumbnail,
  infoLink
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>Title: {title}</h3>
            <h3>Author: {authors}</h3>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={infoLink}>
              Go to book!
            </a>
           
           
          </Col>
        </Row>
      </Container>
    </li>
  );
}
