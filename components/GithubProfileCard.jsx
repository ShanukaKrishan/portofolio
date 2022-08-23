import React from "react";

import { Card, Col, Row, Container, Button } from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={
                  "https://avatars.githubusercontent.com/u/81793781?s=400&u=91277a380eb37cfaa3da5d40fac7163dfc315c4f&v=4"
                }
                style={{ width: "200px", backgroundColor: "black" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Lets Have a Tea Talk</h2>
              <p className="lead text-white mt-3">
                Want to get to know me more?
                <a
                  className="lead text-teal mt-3"
                  href={`mailto:${"shanukakrishan@yahoo.com"}?subject=${
                    encodeURIComponent("Job Application") || ""
                  }&body=${encodeURIComponent("HI") || ""}`}
                  style={{
                    color: "rgba(45,206,137)",
                    padding: "0.5rem",
                    backgroundColor: "white",
                    borderRadius: "25px",
                    margin: "0.5rem",
                  }}
                >
                  contact me
                </a>
              </p>
              <p className="text-white mt-3">
                Full Stack Mobile Developer who likes working with Web
                Application{" "}
              </p>
              <div>
                <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                  <i className="ni ni-pin-3 text-info mr-2" />
                  <span>Kuwait</span>
                  <span style={{ marginLeft: "3rem" }}> </span>
                </div>
              </div>

              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
