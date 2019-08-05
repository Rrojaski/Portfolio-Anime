import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import Section from "../../components/Section/Section";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import Image from "../../components/Image/Image";
import Avatar from "../../images/Avatar.png";
import Button from "../../components/Button/Button";
import mrt from "../../images/mrt.png";

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Section backColor="linear-gradient(to right, transparent 0%,transparent 50%,transparent 60%,#ffb637 60%,#ffb637 100%)">
          <Grid>
            <Row center="xs">
              <Col xs={12} lg={8}>
                <Row start="xs" middle="xs">
                  <Col xs={5}>
                    <Paragraph fsize="1rem">Hello</Paragraph>
                    <Title color="#ffb637" largeFont>
                      I'm Roman
                    </Title>
                    <Paragraph fsize="1.5rem">
                      Freelance web Designer & Developer
                    </Paragraph>
                    <Button>HIRE ME</Button>
                  </Col>
                  <Col xs={7}>
                    <Image sizex="400px" src={Avatar} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>

        <Section backColor="#313131">
          <Grid>
            <Row center="xs">
              <Col xs={12} lg={8}>
                <Row start="xs" middle="xs">
                  <Col xs={5}>
                    <Image sizex="100%" src={mrt} />
                  </Col>
                  <Col xs={7}>
                    <Title>About Me</Title>
                    <Paragraph>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Paragraph>
                    <Row>
                      <Col>
                        <Button>HIRE ME</Button>
                      </Col>
                      <Col>
                        <Button>DOWNLOAD CV</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>

        <Section>
          <Grid>
            <Row center="xs">
              <Col xs={12} lg={8}>
                <Row start="xs">
                  <Col xs={6}>
                    <Title>Services</Title>
                    <Paragraph>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </Paragraph>
                  </Col>
                  <Col>
                    <Row>
                      <Col xs={6}>
                        <Image sizey="300px" sizex="100%" src={mrt} />
                      </Col>
                      <Col xs={6}>
                        <Image sizey="300px" sizex="100%" src={mrt} />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        <Image sizey="300px" sizex="100%" src={mrt} />
                      </Col>
                      <Col xs={6}>
                        <Image sizey="300px" sizex="100%" src={mrt} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <Row center="xs">
              <Col xs={12} lg={8}>
                <Row center="xs">
                  <Col>
                    <Title>Have any project in mind?</Title>
                    <Button>HIRE ME</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Section>
        <Section>
          <Grid>
            <Row center='xs'>
              <Col xs={12} lg={8}>
                <Title>"Copyright"</Title>
              </Col>
            </Row>
          </Grid>
        </Section>
      </React.Fragment>
    );
  }
}

export default Content;
