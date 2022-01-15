import React from "react";
import { blogs } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import ProjectsCard from "../components/ProjectsCard";

const Blog = () => {
  return (
    <section className="section section-lg">
      <Container>
        <Fade bottom duration={1000} distance="40px">
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">My Blogs</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {blogs.map((data, i) => {
              return <ProjectsCard key={i} data={data} />;
            })}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Blog;
