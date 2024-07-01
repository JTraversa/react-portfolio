import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  experience,
  oshighlights
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme1}</p>
              <p>{dataabout.aboutme2}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Open-Source Highlights</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {oshighlights.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th className="wide-column">{data.thing}</th>
                      <td>{data.impact}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Technical Expertise</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="skill-title">{data.name}</h3>
                  <p>{data.subSkills.join(', ')}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Professional Experience</h3>
          </Col>
          <Col lg="7">
            {experience.map((data, i) => {
              return (
                <div className="experience-block" key={i}>
                  <h3 className="experience-where">{data.where}</h3>
                  <h4 className="experience-title">{data.title}</h4>
                  <p className="experience-date">{data.date}</p>
                  <p className="experience-description">{data.description}</p>
                  <ul className="bullet-list">
                    {data.bullets.map((bullet, j) => (
                      <li className="bullet-point" key={j}>{bullet}</li>
                    ))}
                  </ul>
                  <hr className="separator" />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
