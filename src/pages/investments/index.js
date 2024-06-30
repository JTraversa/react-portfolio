import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { datainvestments, meta } from "../../content_option";

export const Investments = () => {
  const theme = localStorage.getItem('theme');

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Investments | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Investments </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row>{datainvestments.map((investment, index) => (
          <React.Fragment key={index}>
            {index % 3 === 0 && <div className="w-100"></div>}
            <Col md="3">
              <div className="po_item">
                <img src={theme === 'dark' ? investment.imgdark : investment.img} alt="" />
                <div className="content">
                  <p>{investment.description}</p>
                  <a href={investment.link}>view investment</a>
                </div>
              </div>
            </Col>
          </React.Fragment>
        ))}</Row>
      </Container>
    </HelmetProvider>
  );
};
