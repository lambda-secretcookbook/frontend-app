import React from "react";

import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => (
  <Row className="h-100 justify-content-center align-items-center">
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </Row>
);

export default Loading;
