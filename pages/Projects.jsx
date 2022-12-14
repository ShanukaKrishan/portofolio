import React from "react";

import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-reveal";

const Projects = () => {
	return projects && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle "  style={{ color: "rgb(168,101,201)" }}>
							<i className="ni ni-laptop " />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 "  style={{ color: "rgb(192,120,246)" }}>Projects [Undergraduate]</h4>
					</div>
				</div>
				<Row className="row-grid align-items-center">
					{projects.map((data, i) => {
						return <ProjectsCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
