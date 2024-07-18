import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Website Both Frontend & Backend",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Graphics",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "UI/UX Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "FullStack",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Networking",
      description: "Administration & Configuration",
      imgUrl: projImg2,
    },
    {
      title: "Security Startup",
      description: "Cybersecurity",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Throughout my academic journey and professional experiences, I have successfully completed numerous projects in web development, graphics, and networking. These projects have allowed me to apply and expand my skills in front-end and back-end development, UI/UX design, and network configuration. My work in web development involved creating responsive and dynamic websites, while my graphics enabled logos, characters, animations and user-friendly interfaces. My networking projects encompassed setting up and managing network infrastructures, ensuring secure and efficient communication systems. These diverse experiences have equipped me with a comprehensive understanding of various IT domains and honed my ability to deliver high-quality solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Motivated.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Ready to gain more experience.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
