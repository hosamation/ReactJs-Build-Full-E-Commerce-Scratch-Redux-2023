import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesAction = ({ deletData, onViewData }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={deletData} className="btn-style p-2">
          Delete All
        </button>
        <button onClick={onViewData} className="btn-style p-2">
          Show Details
        </button>
      </Col>
    </Row>
  );
};

export default DatesAction;
