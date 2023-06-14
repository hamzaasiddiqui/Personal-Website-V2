import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
  services,
} from "../../content_option";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiExpress,SiVisualstudiocode, SiJupyter } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc mb-0 mt-0">
                    {data.description[1]}
                  </p>
                  <p className="service_desc mb-0 mt-0">
                    {data.description[2]}
                  </p>
                  <p className="service_desc mb-0 mt-0">
                    {data.description[3]}
                  </p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Field of Interests</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Tech Stack</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                <tr>
                  <th scope="row">Web Development</th>
                  <td>
                    <FaNodeJs className="mx-1" style={{fontSize: '24px'}} />
                    <FaReact className="mx-1" style={{fontSize: '24px'}} />
                    <SiNextdotjs className="mx-1" style={{fontSize: '24px'}} />
                    <SiExpress className="mx-1" style={{fontSize: '24px'}} />
                    <FaHtml5 className="mx-1" style={{fontSize: '24px'}} />
                    <FaCss3Alt className="mx-1" style={{fontSize: '24px'}} />
                    <SiJavascript className="mx-1" style={{fontSize: '24px'}} />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Software Development</th>
                  <td>
                    <TbBrandCpp className="mx-1" style={{fontSize: '24px'}} />
                    <FaPython className="mx-1" style={{fontSize: '24px'}} />
                    <FaJava className="mx-1" style={{fontSize: '24px'}} />
                    <SiVisualstudiocode className="mx-1" style={{fontSize: '24px'}} />
                    <SiJupyter className="mx-1" style={{fontSize: '24px'}} />
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
